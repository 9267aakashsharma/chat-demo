interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: Date;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  actions?: React.ReactNode[];
}

export type { ChatMessage };
