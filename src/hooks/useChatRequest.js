/*
useChat request hook handles the following functions:
1. receiveUserMessage - receives user_message from telegram bot
  - chatId

2. sendUserMessage - sends user_message to ai model. it can be user for both clinic client and client staff
  - chatId - id of the chat
  - user_message - message from user
  - setMessages - function to set messages in the app state
  - url - well, this one is obvious

3. sendFinalResponse - sends ai model response back to user in telegram
  - chatId - id of the telegram chat
  - response - approved response from ai model

if something goes wrong, admin can abort ai model by calling abortRequest 
*/
import useOrganization from "./useOrganization";
import { useRef, useState } from "react";

export default function useChatRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef(null);
  const { sendMessageFB } = useOrganization();

  // handle response streaming
  const handleStreamingResponse = async (response, setMessages) => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let answer = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        answer += chunk;

        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text = answer;
          return updatedMessages;
        });
      }
    }
    return answer;
  };

  // send ai model response back to user in telegram
  const sendFinalResponse = async (chatId, response) => {
    const telegramBackendUrl = `https://example.com/api/response/${chatId}`;

    try {
      await fetch(telegramBackendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId, response }),
      });

      console.log("Response sent to another backend successfully.");
    } catch (error) {
      console.error("Error sending response to backend:", error);
    }
  };

  // should send to message to llama model later
  const sendUserMessage = async (
    chatId,
    question,
    setMessages,
    url = "http://127.0.0.1:5000/api/chat",
  ) => {
    if (!question.trim()) return;

    sendMessageFB(chatId, question, true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: question, isUser: true },
      { id: Date.now().toString(), text: "", isUser: false },
    ]);

    setIsLoading(true);

    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      // send the request to the backend
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_message: question }),
        signal,
      });

      // handle streaming response
      const answer = await handleStreamingResponse(res, setMessages);

      // send the response back to Firebase
      sendMessageFB(chatId, answer, false);

      // send the final response to another backend
      await sendFinalResponse(chatId, answer);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Aborted");
      } else {
        console.error("Error fetching the chat response:", error);
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // remove the placeholder
          { text: "Error: Could not fetch response.", isUser: false },
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // receive messages from user in telegram
  // TODO: fix it
  const receiveUserMessage = async (chatId) => {
    const telegramBackendUrl = `https://example.com/api/response/${chatId}`;

    try {
      const res = await fetch(telegramBackendUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Error fetching messages: ${res.statusText}`);
      }

      const messages = await res.json();
      console.log("Messages received from another backend:", messages);
    } catch (error) {
      console.error("Error receiving messages from another backend:", error);
    }
  };

  // abort the streaming request
  const abortRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  return {
    sendUserMessage,
    sendFinalResponse,
    receiveUserMessage,
    abortRequest,
    isLoading,
  };
}
