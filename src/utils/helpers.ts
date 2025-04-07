import { format } from "date-fns";

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getMessageFormattedDate = (date: Date | string) => {
  const messageDate = new Date(date);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  if (messageDate > now) {
    return `Today, ${format(messageDate, "h:mm a")}`;
  } else if (messageDate > yesterday) {
    return `Yesterday, ${format(messageDate, "h:mm a")}`;
  } else {
    return format(messageDate, "MMM d, h:mm a");
  }
};
