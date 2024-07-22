import { IoSend, IoStop } from "react-icons/io5";

export default function SendButton({ onClick, onAbort, isLoading }) {
  return (
    <>
      <button
        className="rounded-btn bg-slate-50 dark:bg-gray-900"
        onClick={isLoading ? onAbort : onClick}
      >
        {isLoading ? <IoStop /> : <IoSend />}
      </button>
      <button
        className="rounded-btn bg-red-800"
        onClick={onAbort}
        disabled={true}
      >
        <IoStop color="white" />
      </button>
    </>
  );
}
