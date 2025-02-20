import { colors, themeColors } from "@/constants/theme";
import { createContext, useContext, useMemo, useState } from "react";
import { ColorSchemeName } from "react-native";

type Theme = Extract<ColorSchemeName, "dark" | "light">;

type ThemeContext<T extends Theme> = {
  theme: T;
  setTheme: (theme: T) => void;
  colors: (typeof themeColors)[T];
};

const ThemeContext = createContext<ThemeContext<Theme>>({
  theme: "dark",
  setTheme: () => {},
  colors: themeColors["dark"],
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const contextValues = useMemo(
    () => ({
      theme,
      setTheme,
      colors: themeColors[theme],
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
