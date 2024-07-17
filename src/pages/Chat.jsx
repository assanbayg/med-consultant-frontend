import { useState } from "react";
import InputField from "../components/ui/InputField";
import { MessageList } from "../components/chat/MessageList";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (question.trim() === "") {
      return;
    }
    setMessages([...messages, { text: question, isUser: true }]);
    setQuestion("");
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is a bot response", isUser: false },
      ]);
    }, 1000);
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
        <button className="primary-btn" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
