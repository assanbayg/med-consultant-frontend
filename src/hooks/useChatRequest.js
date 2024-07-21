import { useState } from "react";

export default function useChatRequest() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (question, setMessages) => {
    if (!question.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, isUser: true },
      { text: "", isUser: false }, // placeholder for the incoming response. If removed, user's initial question gets erased :((()))
    ]);
    setIsLoading(true);

    // for now I used my own mini backend for testing streaming
    // need to rewrite once I receive API documentation from Akbar agai
    try {
      const res = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: question }),
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
    } catch (error) {
      console.error("Error fetching the chat response:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1), // remove the placeholder
        { text: "Error: Could not fetch response.", isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
}
