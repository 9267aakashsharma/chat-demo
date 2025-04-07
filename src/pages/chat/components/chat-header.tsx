import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import UserAvatar from "./user-avatar";
import { useSetAtom } from "jotai";
import { clearMessages } from "@/state/atoms/message.atom";

function ChatHeader({ user }: { user: User }) {
  const clearChat = useSetAtom(clearMessages);
  return (
    <header className="flex items-center justify-between gap-x-6 p-4 bg-sidebar dark:bg-sidebar border-b border-sidebar-border">
      <div className="flex items-center gap-x-4">
        <UserAvatar size="lg" userProfile={user} />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.bio}</p>
        </div>
      </div>
      <Button onClick={clearChat}>Clear Chat</Button>
    </header>
  );
}

export default ChatHeader;
