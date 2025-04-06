import { ThemeProvider } from "@/providers/theme-provider";
import RoutesProvider from "@/providers/routes-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RoutesProvider />
    </ThemeProvider>
  );
}

export default App;
