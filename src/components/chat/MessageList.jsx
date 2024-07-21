import { Message } from "./Message";

export default function MessageList({ messages }) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto p-2">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isUser={message.isUser} />
      ))}
    </div>
  );
}
