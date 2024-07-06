import { Message } from "./Message";

export const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-2">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} />
      ))}
    </div>
  );
};
