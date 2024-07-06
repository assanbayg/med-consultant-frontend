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
    <div className="flex flex-col h-screen w-full justify-between">
      <div className="">
        <h1>this is a chat</h1>
      </div>
      <MessageList messages={messages} />
      <div className="fixed bottom-0 flex p-4 gap-x-1">
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
