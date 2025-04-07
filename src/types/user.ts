type UserRole = "user" | "assistant" | "system";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  isActive: boolean;
  profileImage?: string;
  bio?: string;
}

export type { User, UserRole };
