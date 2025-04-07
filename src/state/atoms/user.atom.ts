import { SHAUN } from "@/mock-data/users";
import { User } from "@/types/user";
import { atom } from "jotai";
import { activeChat } from "./chats.atom";

export const user = atom<User>({ ...SHAUN });

export const activeChatOppositeParticipant = atom<User | null>((get) => {
  const activeChatDetails = get(activeChat);
  const currentUser = get(user);
  if (!activeChatDetails || !currentUser) return null;
  const { participants } = activeChatDetails;
  return participants.find((user) => user.id !== currentUser.id) || null;
});
