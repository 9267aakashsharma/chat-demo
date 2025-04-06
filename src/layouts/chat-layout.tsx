import { Outlet } from "react-router";

function ChatLayout() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default ChatLayout;
