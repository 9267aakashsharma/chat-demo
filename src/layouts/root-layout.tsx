import { Outlet } from "react-router";

function RootLayout() {
  return (
    <main className="h-screen overflow-hidden">
      <section className="p-8">
        <Outlet />
      </section>
    </main>
  );
}

export default RootLayout;
