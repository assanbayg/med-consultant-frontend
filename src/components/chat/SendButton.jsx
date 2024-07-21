export default function SendButton({ onClick, isLoading }) {
  return (
    <button className="primary-btn" onClick={onClick} disabled={isLoading}>
      {isLoading ? "..." : "Send"}
    </button>
  );
}
