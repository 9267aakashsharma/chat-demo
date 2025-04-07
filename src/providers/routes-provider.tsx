import { Route, Routes } from "react-router";

import Chat from "@/pages/chat";
import RootLayout from "@/root-layout";
import ChatLayout from "@/pages/chat/layout";

function RoutesProvider() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<ChatLayout />}>
          <Route index element={<Chat />} />
          <Route path="/:chatId" element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RoutesProvider;
