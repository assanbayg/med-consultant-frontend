import useOrganization from "./useOrganization";
import { useRef, useState } from "react";

export default function useChatRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef(null);
  const { sendMessageFB } = useOrganization();

  const sendMessage = async (chatId, question, setMessages) => {
    if (!question.trim()) return;

    sendMessageFB(chatId, question, true);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, isUser: true },
      { text: "", isUser: false }, // placeholder for the incoming response. If removed, user's initial question gets erased :((()))
    ]);
    setIsLoading(true);

    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    const url = "http://127.0.0.1:5000/api/chat";

    // for now I used my own mini backend for testing streaming
    // need to rewrite once I receive API documentation from Akbar agai
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: question }),
        signal,
      });

      const reader = res.body.getReader(); // receive reponse body as stream
      const decoder = new TextDecoder(); // stream has bytes but we need String, therefore we decode
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
            // update the last message with the new chunk
            updatedMessages[updatedMessages.length - 1].text = answer;
            return updatedMessages;
          });
        }
      }
      sendMessageFB(chatId, answer, false );
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

  const abortRequest = () => {
    console.log("1");
    if (abortControllerRef.current) {
      console.log(2);
      abortControllerRef.current.abort();
    }
  };

  return { sendMessage, abortRequest, isLoading };
}
