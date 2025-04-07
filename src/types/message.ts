import { User } from "@/types/user";

interface FileAttachment {
  fileSize: number;
  format: string;
  url: string;
  title: string;
}

interface ImageAttachment {
  fileSize: number;
  format: string;
  url: string;
  title?: string;
}

interface VideoAttachment {
  duration: number;
  fileSize: number;
  format: string;
  url: string;
  thumbnail?: string;
  title?: string;
}

interface AudioAttachment {
  duration: number;
  fileSize: number;
  format: string;
  url: string;
  title?: string;
}

interface LinkAttachment {
  title: string;
  description?: string;
  previewImage?: string;
  url: string;
}

export type Attachment =
  | FileAttachment
  | ImageAttachment
  | VideoAttachment
  | AudioAttachment
  | LinkAttachment;

interface ChatMessage {
  id: string;
  isEdited: boolean;
  content: string;
  timestamp: Date;
  attachments?: Attachment[];
  from: User;
}

interface ErrorMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  message: string;
  timestamp: string;
}

export type { ChatMessage, ErrorMessage };
