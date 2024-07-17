export const Message = ({ text, isUser }) => {
  return (
    <div
      className={`mb-6 max-w-80 rounded-lg p-2 ${
        isUser
          ? "self-end bg-blue-500 text-white"
          : "self-start bg-gray-300 text-black"
      }`}
    >
      {text}
    </div>
  );
};
