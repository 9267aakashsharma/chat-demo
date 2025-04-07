import { Outlet, useParams } from "react-router";
import { useAtomValue, useSetAtom } from "jotai";

import { ChatSidebar } from "./components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { activeChatId, chats } from "@/state/atoms/chats.atom";
import { useEffect } from "react";

export default function ChatLayout() {
  const { chatId } = useParams<{
    chatId: string;
  }>();
  const chatsList = useAtomValue(chats);
  const updateActiveChatId = useSetAtom(activeChatId);

  const sidebarItems = chatsList.map((chat) => ({
    id: chat.id,
    title: chat.title,
    url: `/${chat.id}`,
    isUserActive: chat.isChatActive,
    avatar: chat.profileImage,
  }));

  useEffect(() => {
    if (!chatId) return;
    updateActiveChatId(chatId);
  }, [chatId, updateActiveChatId]);

  return (
    <SidebarProvider>
      <ChatSidebar items={sidebarItems} />
      <section className="flex-1">
        <Outlet />
      </section>
    </SidebarProvider>
  );
}
