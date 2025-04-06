import { Route, Routes } from "react-router";

import Chat from "@/pages/chat";
import ChatLayout from "@/layouts/chat-layout";
import RootLayout from "@/layouts/root-layout";

function RoutesProvider() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<ChatLayout />}>
          <Route index element={<Chat />} />
          <Route path="/:chatId" element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RoutesProvider;
