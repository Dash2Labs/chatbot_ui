import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
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

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [fontSize, setFontSize] = useState<FontSize>("medium");
  const [contrast, setContrast] = useState<Contrast>("semi-bold");


  const mergedThemes = {
    ...defaultThemes,
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
      <div
        style={{
          ...mergedThemes[theme],
          fontSize: mapFontSizeToCSS(fontSize),
          fontWeight: mapContrastToCSS(contrast),
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const mapFontSizeToCSS = (fontSize: FontSize): string => {
  switch (fontSize) {
    case "small":
      return "12px";
    case "medium":
      return "16px";
    case "large":
      return "20px";
    case "extra-large":
      return "24px";
    default:
      return "16px";
  }
};

const mapContrastToCSS = (contrast: Contrast): string => {
  switch (contrast) {
    case "bold":
      return "700";
    case "semi-bold":
      return "600";
    case "extra-bold":
      return "800";
    default:
      return "600";
  }
};
