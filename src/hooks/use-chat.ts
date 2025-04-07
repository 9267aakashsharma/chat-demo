import { useState } from "react";
import { ChatMessage, ErrorMessage } from "@/types/message";
import { getChatResponse } from "@/mock-api/get-response-message";
import { User } from "@/types/user";

function useChat({
  oppositeUser,
  onSuccess,
  onError,
}: {
  oppositeUser: User;
  onSuccess?: (success: boolean) => void;
  onError?: (error: ErrorMessage) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (
    e: React.FormEvent<HTMLFormElement>,
    message: ChatMessage
  ) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { ...message }]);

    try {
      setIsLoading(true);

      const responseMessage = await getChatResponse(oppositeUser);

      setMessages((prev) => [...prev, { ...responseMessage }]);

      onSuccess?.(true);
    } catch (error) {
      onError?.({
        error,
        message: "An error occurred while sending the message.",
        timestamp: new Date().toISOString(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    messages,
    setMessages,
    sendMessage: handleSendMessage,
  };
}

export { useChat };
