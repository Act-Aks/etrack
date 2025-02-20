import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />;
    </ThemeProvider>
  );
};

export default RootLayout;
