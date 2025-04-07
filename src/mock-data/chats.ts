import { Chat } from "@/types/chat";
import { nanoid } from "nanoid";

export const samplePrivateExistingChat: Chat = {
  id: nanoid(),
  createdAt: new Date("2023-10-01T12:00:00Z"),
  hasUnreadMessages: false,
  title: "Chat with John Doe",
  description: "Discussing project updates and feedback.",
  isArchived: false,
  isPinned: false,
  isGroupChat: false,
  messages: [],
  participants: [],
};

export const samplePrivateNewChat: Chat = {
  id: nanoid(),
  createdAt: new Date("2023-10-01T12:00:00Z"),
  hasUnreadMessages: false,
  title: "New Chat",
  description: "Start a new conversation.",
  isArchived: false,
  isPinned: false,
  isGroupChat: false,
  messages: [],
  participants: [],
};
