import { useAtomValue } from "jotai";
import { activeChat } from "@/state/atoms/chats.atom";
import { activeChatOppositeParticipant } from "@/state/atoms/user.atom";
import ChatHeader from "./components/chat-header";
import ChatBody from "./components/chat-body";

function Chat() {
  const activeChatDetails = useAtomValue(activeChat);
  const oppositeUser = useAtomValue(activeChatOppositeParticipant);

  if (!activeChatDetails || !oppositeUser) {
    return <div>No active chat selected.</div>;
  }

  return (
    <section className="flex flex-col h-full">
      <ChatHeader user={oppositeUser} />
      <ChatBody
        oppositeUser={oppositeUser}
        messages={activeChatDetails.messages}
      />
    </section>
  );
}

export default Chat;
