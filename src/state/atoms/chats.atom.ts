import { atom } from "jotai";

import { Chat, ChatsList } from "@/types/chat";

export const activeChatId = atom<string | null>(null);

export const chats = atom<Chat[]>([]);

export const chatsList = atom<ChatsList[]>((get) =>
  get(chats).map((chat) => ({
    id: chat.id,
    title: chat.title,
    url: `/${chat.id}`,
    profileImage: chat.profileImage,
  }))
);

export const removeChatById = atom(null, (get, set, id: string) => {
  const chatsList = get(chats);
  const updatedChats = chatsList.filter((chat) => chat.id !== id);
  set(chats, updatedChats);
  set(activeChatId, null);
});

export const activeChat = atom(
  (get) => {
    const chatsList = get(chats);
    const activeId = get(activeChatId);
    if (!activeId || chatsList.length < 1) return null;
    return chatsList.find((chat) => chat.id === activeId) || null;
  },
  (get, set, newChat: Chat) => {
    const chatsList = get(chats);
    const activeId = get(activeChatId);
    if (!activeId || chatsList.length < 1) return;
    const updatedChats = chatsList.map((chat) =>
      chat.id === activeId ? { ...chat, ...newChat } : chat
    );
    set(chats, updatedChats);
  }
);
