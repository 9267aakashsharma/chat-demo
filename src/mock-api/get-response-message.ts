import { nanoid } from "nanoid";

import { User } from "@/types/user";
import { ChatMessage } from "@/types/message";

// NOTE: this returns dynamic mock data for the chat response as a given user
function getChatResponse(user: User): Promise<ChatMessage> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `response-${user.id}-${nanoid()}`,
        content: `Hi, I am ${user.name}. How can I assist you today? \nClick to seek more help - https://typeface.ai/help`,
        isEdited: false,
        from: user,
        timestamp: new Date(),
        attachments: [],
      });
    }, 1000);
  });
}

export { getChatResponse };
