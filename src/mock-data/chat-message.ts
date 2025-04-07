import { nanoid } from "nanoid";

import { ChatMessage } from "@/types/message";
import { AMY, ANITA, JOHN, JAMES, SHAUN, TYPEFACE_AI } from "./users";

export const simpleChatMessage: ChatMessage = {
  id: nanoid(),
  isEdited: false,
  content: "Hello, how can I help you?",
  timestamp: new Date(),
  attachments: [],
  from: TYPEFACE_AI,
};

export const chatMessageWithImage: ChatMessage = {
  id: nanoid(),
  isEdited: false,
  content: "Here is the image you requested.",
  timestamp: new Date(),
  attachments: [
    {
      fileSize: 1024,
      format: "image/png",
      url: "https://picsum.photos/200/300",
      title: "Landscape",
    },
  ],
  from: JOHN,
};

export const chatMessageWithVideo: ChatMessage = {
  id: nanoid(),
  isEdited: false,
  content: "Check out this video.",
  timestamp: new Date(),
  attachments: [
    {
      duration: 120,
      fileSize: 2048,
      format: "video/mp4",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Big Buck Bunny",
    },
  ],
  from: ANITA,
};

export const chatMessageWithAudio: ChatMessage = {
  id: nanoid(),
  isEdited: false,
  content: "Listen to this audio clip.",
  timestamp: new Date(),
  attachments: [
    {
      duration: 30,
      fileSize: 512,
      format: "audio/mpeg",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Sound Helix",
    },
  ],
  from: AMY,
};

export const chatMessageWithFile: ChatMessage = {
  id: nanoid(),
  isEdited: false,
  content: "Here is the file you requested.",
  timestamp: new Date(),
  attachments: [
    {
      fileSize: 2048,
      format: "application/pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      title: "Dummy PDF",
    },
  ],
  from: JAMES,
};

export const chatMessageWithLink: ChatMessage = {
  id: nanoid(),
  isEdited: false,
  content: "Check out this link.",
  timestamp: new Date(),
  attachments: [
    {
      url: "https://www.example.com",
      title: "Example Link",
    },
  ],
  from: SHAUN,
};

export const sampleChatMessages: ChatMessage[] = [
  simpleChatMessage,
  chatMessageWithImage,
  chatMessageWithVideo,
  chatMessageWithAudio,
  chatMessageWithFile,
  chatMessageWithLink,
];
