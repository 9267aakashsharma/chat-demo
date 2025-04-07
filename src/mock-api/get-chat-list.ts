import { User } from "@/types/user";
import { Chat } from "@/types/chat";
import { USERS } from "@/mock-data/users";
import { getChat } from "./get-chat";
import { getRandomNumber } from "@/utils/helpers";
import { sampleChatMessages } from "@/mock-data/chat-message";

// NOTE: this returns dynamic mock data for the chat list as a given user
function getChatsList({
  user,
  length = 3,
}: {
  length: number;
  user: User;
}): Promise<Chat[]> {
  return Promise.all(
    USERS.filter((u, index) => u.id !== user.id && index < length).map(
      async (oppositeUser) => {
        const chat = await getChat({
          length: getRandomNumber(0, sampleChatMessages.length - 1),
          user,
          oppositeUser,
        });
        return chat;
      }
    )
  );
}

export { getChatsList };
