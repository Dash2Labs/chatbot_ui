import React, { ReactNode } from "react";
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
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};
