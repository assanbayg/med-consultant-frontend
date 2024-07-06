import { useState } from "react";
import InputField from "../components/ui/InputField";
import { MessageList } from "../components/chat/MessageList";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    setMessages([...messages, { text: question }]);
    // setQuestion("");
  };

  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <div className="">
        <h1>this is a chat</h1>
      </div>
      <MessageList messages={messages} />
      <div className="fixed bottom-0 flex gap-x-1 p-4">
        <InputField
          id={"question"}
          name={"question"}
          type={"text"}
          placeholder={"Write a question"}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <button className="primary-btn" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
