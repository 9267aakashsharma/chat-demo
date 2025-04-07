import { ChatMessage } from "@/types/message";
import UserAvatar from "./user-avatar";
import { useAtomValue, useSetAtom } from "jotai";
import { user } from "@/state/atoms/user.atom";
import { cn } from "@/lib/utils";
import Linkify from "linkify-react";
import { getMessageFormattedDate } from "@/utils/helpers";
import { EllipsisVertical, Trash2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { removeMessageById } from "@/state/atoms/message.atom";

function MessageBlock({ message }: { message: ChatMessage }) {
  const currentUserId = useAtomValue(user)?.id;
  const isMyMessage = message.from.id === currentUserId;

  const removeMessage = useSetAtom(removeMessageById);

  return (
    <div
      className={cn("flex items-end gap-x-4 group", {
        "flex-row": !isMyMessage,
        "flex-row-reverse": isMyMessage,
      })}
    >
      <UserAvatar userProfile={message.from} />
      <div
        className={cn("rounded-lg p-2 min-w-80", {
          "bg-primary/20": isMyMessage,
          "bg-primary/30": !isMyMessage,
        })}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-sm">{message.from.name}</p>
          {isMyMessage && (
            <Popover>
              <PopoverTrigger>
                <EllipsisVertical
                  size={20}
                  className="cursor-pointer text-foreground group-hover:opacity-100 opacity-0 transition-opacity duration-200"
                />
              </PopoverTrigger>
              <PopoverContent className="w-fit p-1">
                <Button
                  className="inline-flex justify-center items-center cursor-pointer"
                  onClick={() => removeMessage(message.id)}
                >
                  <Trash2 className="text-red-400" />
                  Delete
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </div>
        <Linkify options={{ target: "_blank" }}>
          <p className="text-base font-normal mt-2 whitespace-pre-wrap [&>a]:text-blue-300">
            {message.content}
          </p>
        </Linkify>
        <small className="text-xs opacity-40 mt-6">
          {getMessageFormattedDate(message.timestamp)}
        </small>
      </div>
    </div>
  );
}

export default MessageBlock;
