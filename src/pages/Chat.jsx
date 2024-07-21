import { useState } from "react";

import useChatRequest from "../hooks/useChatRequest";

import MessageList from "../components/chat/MessageList";
import SendButton from "../components/chat/SendButton";
import InputField from "../components/ui/InputField";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const { sendMessage, isLoading } = useChatRequest();

  const handleSend = async (e) => {
    e.preventDefault();
    await sendMessage(question, setMessages);
    setQuestion("");
  };

  return (
    <div className="flex h-screen w-full min-w-144 flex-col">
      <div className="p-4">
        <h1>This is a chat</h1>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <MessageList messages={messages} />
      </div>
      <div className="flex gap-x-1 p-4">
        <InputField
          id="question"
          name="question"
          type="text"
          placeholder="Write a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-grow"
        />
        <SendButton onClick={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}
