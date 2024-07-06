import { Message } from "./Message";

export const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 p-2 overflow-y-auto ">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} />
      ))}
    </div>
  );
};
