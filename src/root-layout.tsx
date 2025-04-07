import { useCallback, useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { Outlet } from "react-router";

import { user } from "@/state/atoms/user.atom";
import { chats } from "@/state/atoms/chats.atom";
import { getChatsList } from "@/mock-api/get-chat-list";

function RootLayout() {
  const [error, setError] = useState<{
    message: string;
    error: unknown;
  }>();
  const [loading, setLoading] = useState(true);

  const currentUser = useAtomValue(user);
  const updateChats = useSetAtom(chats);

  const initializeChats = useCallback(async () => {
    try {
      const chats = await getChatsList({
        user: currentUser,
        length: 6,
      });
      updateChats(chats);
    } catch (error) {
      setError({
        message: "Failed to load chats",
        error,
      });
    } finally {
      setLoading(false);
    }
  }, [currentUser, updateChats]);

  useEffect(() => {
    initializeChats();
  }, [initializeChats]);

  if (loading) {
    return (
      <main className="h-screen flex items-center justify-center">
        <div className="loader"></div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen flex items-center justify-center">
        <div className="alert alert-error">
          <span>{error.message}</span>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen overflow-hidden">
      <section className="">
        <Outlet />
      </section>
    </main>
  );
}

export default RootLayout;
