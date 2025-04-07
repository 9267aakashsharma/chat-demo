import { User } from "@/types/user";

export const ANITA: User = {
  id: "anita",
  name: "Anita",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-01"),
  lastLogin: new Date("2025-04-07"),
  email: "anita@typeface.ai",
  role: "user",
  isActive: false,
  bio: "Anita is a software engineer with a passion for AI and machine learning. She loves to explore new technologies and is always eager to learn.",
  profileImage: "https://picsum.photos/200",
};

export const AMY: User = {
  id: "amy",
  name: "Amy",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-01"),
  lastLogin: new Date("2025-04-07"),
  email: "amy@typeface.ai",
  role: "user",
  isActive: true,
  bio: "Amy is a UX designer with a keen eye for detail. She enjoys creating user-friendly interfaces and is always looking for ways to improve the user experience.",
  profileImage: "https://picsum.photos/210",
};

export const JAMES: User = {
  id: "james",
  name: "James",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-01"),
  lastLogin: new Date("2025-04-07"),
  email: "james@typeface.ai",
  role: "user",
  isActive: false,
  bio: "James is a data scientist with a strong background in statistics and programming. He enjoys working with large datasets and finding insights.",
  profileImage: "https://picsum.photos/220",
};

export const JOHN: User = {
  id: "john",
  name: "John",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-01"),
  lastLogin: new Date("2025-04-07"),
  email: "john@typeface.ai",
  role: "user",
  isActive: true,
  bio: "John is a product manager with a keen interest in AI and its applications in business. He loves to bridge the gap between technology and business.",
  profileImage: "https://picsum.photos/230",
};

export const SHAUN: User = {
  id: "shaun",
  name: "Shaun",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-01"),
  lastLogin: new Date("2025-04-07"),
  email: "shaun@typefaci.ai",
  role: "user",
  isActive: true,
  bio: "Shaun is a software developer with a passion for building scalable applications. He enjoys working with cloud technologies and is always looking for new challenges.",
  profileImage: "https://picsum.photos/240",
};

export const TYPEFACE_AI: User = {
  id: "typeface-ai",
  name: "Typeface AI",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-01-01"),
  lastLogin: new Date("2025-04-07"),
  email: "chat.ai@typeface.ai",
  role: "assistant",
  isActive: true,
  bio: "Typeface AI is a virtual assistant designed to help you with your tasks and provide information.",
  profileImage: "https://picsum.photos/250",
};

export const USERS: User[] = [ANITA, AMY, JAMES, JOHN, SHAUN, TYPEFACE_AI];
