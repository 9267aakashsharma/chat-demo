import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAtomValue, useSetAtom } from "jotai";
import { addMessage } from "@/state/atoms/message.atom";
import { useState } from "react";
import { ChatMessage } from "@/types/message";
import { nanoid } from "nanoid";
import { user } from "@/state/atoms/user.atom";

function ChatInput({
  onSendMessage,
}: {
  onSendMessage?: (message: ChatMessage) => void;
}) {
  const currentUser = useAtomValue(user);
  const addMessageToList = useSetAtom(addMessage);
  const [messageContent, setMessageContent] = useState<
    Pick<ChatMessage, "content" | "attachments">
  >({
    content: "",
    attachments: [],
  });

  const handleSendMessage = () => {
    if (!messageContent.content.length && !messageContent.attachments?.length)
      return;
    const message = {
      ...messageContent,
      id: nanoid(),
      isEdited: false,
      timestamp: new Date(),
      from: { ...currentUser },
    };
    addMessageToList(message);
    if (onSendMessage) {
      onSendMessage(message);
    }
    setMessageContent({
      content: "",
      attachments: [],
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-sidebar dark:bg-sidebar shadow-2xl p-2 flex flex-col gap-2 rounded-xl">
      <Textarea
        placeholder="Type a message..."
        className="flex-1"
        rows={1}
        value={messageContent.content}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setMessageContent({
            ...messageContent,
            content: e.target.value,
          });
        }}
      />
      <div className="flex justify-between items-center">
        <div></div>
        <div>
          <Button className="" type="submit" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
