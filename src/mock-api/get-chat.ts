import { nanoid } from "nanoid";

import { Chat } from "@/types/chat";
import { User } from "@/types/user";
import { getRandomNumber } from "@/utils/helpers";
import { sampleChatMessages } from "@/mock-data/chat-message";
import { samplePrivateExistingChat } from "@/mock-data/chats";
import { sampleMessageTexts } from "@/mock-data/sample-message-texts";
import { getRandomMessage } from "./get-random-message";

// this returns mock data for the chat with given chat id
async function getChat({
  length = 3,
  user,
  oppositeUser,
}: {
  length?: number;
  user: User;
  oppositeUser: User;
}): Promise<Chat> {
  const allowedMaxIndex = Math.min(
    sampleMessageTexts.length - 1,
    sampleChatMessages.length - 1
  );
  const randomLength = getRandomNumber(0, Math.min(length, allowedMaxIndex));
  const messages = await Promise.all(
    new Array(randomLength).fill(1).map(async (_i, index) => {
      const message = await getRandomMessage();
      const currentUser = index % 2 === 0 ? user : oppositeUser;
      return {
        ...message,
        from: currentUser,
        id: `message-${currentUser.id}-${message.id}-${nanoid()}`,
        content: sampleMessageTexts[index],
        timestamp: new Date(
          new Date().getTime() - getRandomNumber(0, 1000 * 60 * 60 * 24)
        ),
      };
    })
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...samplePrivateExistingChat,
        messages,
        id: `chat-${oppositeUser.id}`,
        title: oppositeUser.name,
        createdAt: messages.length > 0 ? messages[0].timestamp : new Date(),
        lastMessage:
          messages.length > 0 ? messages[messages.length - 1] : undefined,
        lastMessageAt:
          messages.length > 0
            ? messages[messages.length - 1].timestamp
            : new Date(),
        isChatActive: oppositeUser.isActive,
        hasUnreadMessages: getRandomNumber(0, 1) === 1,
        profileImage: oppositeUser.profileImage,
        description: oppositeUser.bio,
        participants: [user, oppositeUser],
      });
    }, 200);
  });
}

export { getChat };
