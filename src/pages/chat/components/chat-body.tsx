import { useRef } from "react";

import ChatInput from "./chat-input";
import MessageBlock from "./message-block";
import { ChatMessage } from "@/types/message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getChatResponse } from "@/mock-api/get-response-message";
import { User } from "@/types/user";
import { useSetAtom } from "jotai";
import { addMessage } from "@/state/atoms/message.atom";

function ChatBody({
  messages,
  oppositeUser,
}: {
  messages: ChatMessage[];
  oppositeUser: User;
}) {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const addMessageToList = useSetAtom(addMessage);

  const handleScrollToBottom = () => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const fetchResponseMessage = async (): Promise<ChatMessage> => {
    return getChatResponse(oppositeUser);
  };

  const handleSendMessage = async () => {
    handleScrollToBottom();

    const responseMessage = await fetchResponseMessage();
    if (responseMessage) {
      addMessageToList(responseMessage);
    }

    handleScrollToBottom();
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 mx-auto max-h-[calc(100vh-100px-124px-32px)] w-4/5 no-scrollbar">
        {messages.map((message) => (
          <div key={message.id} className="p-4">
            <MessageBlock message={message} />
          </div>
        ))}
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No messages yet.</p>
          </div>
        )}
        <div className="w-10 h-10 mt-24" ref={scrollBottomRef} />
      </ScrollArea>
      <div className="p-4 mx-auto w-3/5 sticky bottom-0 z-10 bg-transparent">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatBody;
