import { ChatMessage } from "@/types/message";
import { atom } from "jotai";
import { activeChat } from "./chats.atom";

export const messages = atom((get) => {
  const chat = get(activeChat);
  if (!chat) return [];
  return chat.messages;
});

export const updateMessageById = atom(
  null,
  (get, set, { id, newMessage }: { id: string; newMessage: ChatMessage }) => {
    const chat = get(activeChat);
    if (!chat) return;
    const updatedMessages = chat.messages.map((message) =>
      message.id === id ? newMessage : message
    );
    set(activeChat, { ...chat, messages: updatedMessages });
  }
);

export const addMessage = atom(null, (get, set, newMessage: ChatMessage) => {
  const chat = get(activeChat);
  if (!chat) return;
  const updatedMessages = [...chat.messages, newMessage];
  set(activeChat, { ...chat, messages: updatedMessages });
});

export const removeMessageById = atom(null, (get, set, id: string) => {
  const chat = get(activeChat);
  if (!chat) return;
  const updatedMessages = chat.messages.filter((message) => message.id !== id);
  set(activeChat, { ...chat, messages: updatedMessages });
});

export const clearMessages = atom(null, (get, set) => {
  const chat = get(activeChat);
  if (!chat) return;
  set(activeChat, { ...chat, messages: [] });
});
