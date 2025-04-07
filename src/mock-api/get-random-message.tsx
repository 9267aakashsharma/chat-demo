import { nanoid } from "nanoid";

import { ChatMessage } from "@/types/message";
import { getRandomNumber } from "@/utils/helpers";
import { sampleChatMessages } from "@/mock-data/chat-message";
import { sampleMessageTexts } from "@/mock-data/sample-message-texts";

function getRandomMessage(): Promise<ChatMessage> {
  const allowedMaxIndex = Math.min(
    sampleMessageTexts.length - 1,
    sampleChatMessages.length - 1
  );
  const randomIndex = getRandomNumber(0, allowedMaxIndex);
  const randomMessage = sampleChatMessages[randomIndex];
  const randomText = sampleMessageTexts[randomIndex];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...randomMessage,
        id: nanoid(),
        content: randomText,
      });
    }, 100);
  });
}

export { getRandomMessage };
