import { NavLink, useNavigate } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import UserAvatar from "./user-avatar";
import { CircleX, Github } from "lucide-react";
import { useSetAtom } from "jotai";
import { removeChatById } from "@/state/atoms/chats.atom";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  id: string;
  title: string;
  url: string;
  avatar?: string;
  isUserActive?: boolean;
}

export function ChatSidebar({ items }: { items: SidebarItem[] }) {
  const navigate = useNavigate();
  const removeChat = useSetAtom(removeChatById);

  return (
    <Sidebar collapsible="none" className="shrink-0 h-auto">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id} className="w-full min-w-10 my-1">
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <SidebarMenuButton
                        className="py-2 h-auto group"
                        isActive={isActive}
                      >
                        <UserAvatar
                          size="sm"
                          userProfile={{
                            name: item.title,
                            profileImage: item.avatar,
                            isActive: item.isUserActive || false,
                          }}
                        />
                        <span>{item.title}</span>
                        <CircleX
                          size={24}
                          onClick={() => {
                            removeChat(item.id);
                            navigate("/");
                          }}
                          className="text-red-300 ml-auto group-hover:opacity-100 opacity-0 transition-opacity duration-75"
                        />
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <a
          href="https://github.com/9267aakashsharma/chat-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center mb-4"
        >
          <Button className="inline-flex items-center gap-x-2">
            <Github size={24} className="" />
            View on GitHub
          </Button>
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
