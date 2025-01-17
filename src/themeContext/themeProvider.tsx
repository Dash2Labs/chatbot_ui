import React, { createContext, useState, useContext, ReactNode } from "react";
import { defaultThemes } from "./defaultTheme";
import { ThemeMode, FontSize, Contrast } from "./accessibilityTypes";

export interface ThemeProviderProps {
  children: ReactNode;
  customThemes?: Record<string, Record<string, string>>;
}

interface ThemeContextType {
  theme: ThemeMode;
  fontSize: FontSize;
  contrast: Contrast;
  themes: Record<string, Record<string, string>>;
  setTheme: (theme: ThemeMode) => void;
  setFontSize: (fontSize: FontSize) => void;
  setContrast: (contrast: Contrast) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  fontSize: "medium",
  contrast: "semi-bold",
  themes: defaultThemes,
  setTheme: () => {},
  setFontSize: () => {},
  setContrast: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  customThemes,
}) => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [fontSize, setFontSize] = useState<FontSize>("small");
  const [contrast, setContrast] = useState<Contrast>("semi-bold");

  const mergedThemes = {
    ...defaultThemes,
    ...customThemes,
    // Override defaults with custom themes
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        fontSize,
        contrast,
        themes: mergedThemes,
        setTheme,
        setFontSize,
        setContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
