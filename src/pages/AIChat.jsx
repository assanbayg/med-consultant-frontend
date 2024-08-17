import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useChatRequest from "../hooks/useChatRequest";
import useOrganization from "../hooks/useOrganization";

import MessageList from "../components/chat/MessageList";
import SendButton from "../components/chat/SendButton";
import InputField from "../components/ui/InputField";

export default function AIChat() {
  const { chatId } = useParams();
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const { sendUserMessage, abortRequest, isLoading } = useChatRequest();
  const { loadChatMessages } = useOrganization();

  const memoizedLoadChatMessages = useCallback(async () => {
    const loadedMessages = await loadChatMessages(chatId);
    setMessages(loadedMessages);
  }, [chatId, loadChatMessages]);

  useEffect(() => {
    memoizedLoadChatMessages();
  }, [chatId]);

  const handleSend = async (e) => {
    e.preventDefault();
    setQuestion("");
    await sendUserMessage(chatId, question, setMessages);
  };

  const handleAbort = () => {
    abortRequest();
  };

  return (
    <div className="flex h-screen min-w-144 flex-col">
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
        <SendButton
          onClick={handleSend}
          onAbort={handleAbort}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
