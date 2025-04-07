import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@/types/user";

function UserAvatar({
  size = "md",
  userProfile,
}: {
  size?: "sm" | "md" | "lg";
  userProfile: Pick<User, "name" | "profileImage" | "isActive">;
}) {
  return (
    <div className="relative">
      <Avatar
        className={cn("rounded-md shadow-2xl", {
          "w-8 h-8": size === "sm",
          "w-10 h-10": size === "md",
          "w-12 h-12": size === "lg",
        })}
      >
        <AvatarImage src={userProfile.profileImage} />
        <AvatarFallback className="w-12 h-12 rounded-md">
          {userProfile.name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "w-3 h-3 rounded-full absolute -bottom-0.5 -right-0.5 z-10 shadow-lg",
          {
            "bg-chart-2": userProfile.isActive,
            "bg-gray-400": !userProfile.isActive,
          }
        )}
      />
    </div>
  );
}

export default UserAvatar;
