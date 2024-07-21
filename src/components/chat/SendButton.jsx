import { IoSend, IoStop } from "react-icons/io5";

export default function SendButton({ onClick, isLoading }) {
  return (
    <>
      <button
        className="rounded-btn bg-gray-900"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? <IoStop /> : <IoSend />}
      </button>
      <button
        className="rounded-btn bg-red-800"
        onClick={onClick}
        disabled={!isLoading}
      >
        <IoStop />
      </button>
    </>
  );
}
