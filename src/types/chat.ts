import { ChatMessage } from "./message";
import { User } from "./user";

interface Chat {
  id: string;
  createdAt: Date;
  messages: ChatMessage[];
  hasUnreadMessages: boolean;
  lastMessage?: ChatMessage;
  lastMessageAt?: Date;
  isPinned: boolean;
  isArchived: boolean;
  title: string;
  profileImage?: string;
  description?: string;
  isGroupChat: boolean;
  participants: User[];
  isChatActive?: boolean;
}

interface ChatsList
  extends Pick<Chat, "id" | "title" | "profileImage" | "isChatActive"> {
  url: string;
}

export type { Chat, ChatsList };
