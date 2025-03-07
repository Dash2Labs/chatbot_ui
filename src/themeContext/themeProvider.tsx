import React, { createContext, useState, useContext, ReactNode } from "react";
import { defaultThemes } from "./defaultTheme";
import { ThemeMode, FontSize, Contrast, Languages } from "./accessibilityTypes";

export interface ThemeProviderProps {
  children?: ReactNode;
  customThemes?: Record<string, Record<string, string>>;
  initialSettings?: {
    theme?: ThemeMode;
    fontSize?: FontSize;
    contrast?: Contrast;
    language?: Languages;
  };
  onSettingsChange?: (settings: {
    theme: ThemeMode;
    fontSize: FontSize;
    contrast: Contrast;
    language: Languages;
  }) => void;
}

interface ThemeContextType {
  theme: ThemeMode;
  fontSize: FontSize;
  contrast: Contrast;
  themes: Record<string, Record<string, string>>;
  setTheme: (theme: ThemeMode) => void;
  setFontSize: (fontSize: FontSize) => void;
  setContrast: (contrast: Contrast) => void;
  isSignupOpen: boolean;
  setIsSignupOpen: (isOpen: boolean) => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isLoggedIn: boolean) => void;
  language: Languages;
  setLanguage: (language: Languages) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  fontSize: "medium",
  contrast: "semi-bold",
  themes: defaultThemes,
  setTheme: () => {},
  setFontSize: () => {},
  setContrast: () => {},
  isSignupOpen: false,
  setIsSignupOpen: () => {},
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
  language: "en",
  setLanguage: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  customThemes,
  initialSettings,
  onSettingsChange,
}) => {
  const [theme, setTheme] = useState<ThemeMode>(initialSettings?.theme || "light");
  const [fontSize, setFontSize] = useState<FontSize>(initialSettings?.fontSize || "small");
  const [contrast, setContrast] = useState<Contrast>(initialSettings?.contrast || "semi-bold");
  const [language, setLanguage] = useState<Languages>(initialSettings?.language || "en");

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const mergedThemes = {
    ...defaultThemes,
    ...customThemes,
    // Override defaults with custom themes
  };

  const handleSettingsChange = (newSettings: Partial<{
    theme: ThemeMode;
    fontSize: FontSize;
    contrast: Contrast;
    language: Languages;
  }>) => {

    if (onSettingsChange) {
      onSettingsChange({
        theme: newSettings.theme || theme,
        fontSize: newSettings.fontSize || fontSize,
        contrast: newSettings.contrast || contrast,
        language: newSettings.language || language,
      });
    }
  };

  const updateTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    handleSettingsChange({ theme: newTheme });
  };

  const updateFontSize = (newFontSize: FontSize) => {
    setFontSize(newFontSize);
    handleSettingsChange({ fontSize: newFontSize });
  };

  const updateContrast = (newContrast: Contrast) => {
    setContrast(newContrast);
    handleSettingsChange({ contrast: newContrast });
  };

  const updateLanguage = (newLanguage: Languages) => {
    setLanguage(newLanguage);
    handleSettingsChange({ language: newLanguage });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        fontSize,
        contrast,
        themes: mergedThemes,
        setTheme : updateTheme,
        setFontSize: updateFontSize,
        setContrast: updateContrast,
        isSignupOpen,
        setIsSignupOpen,
        isUserLoggedIn,
        setIsUserLoggedIn,
        language,
        setLanguage: updateLanguage
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
