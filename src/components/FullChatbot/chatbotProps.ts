import { BasicChatBoxProps } from "../ChatBox/chatBox.types";
import { BasicHistoryBoxProps } from "../HistoryBox/historyBox.types";
import { LogoProps } from "../HistoryBox/historyBox.types";
import { userDetailsProps } from "../Chats/chatCard.types";
import { ToasterProps } from "../Toaster/toaster";
import { ThemeProviderProps } from "../../themeContext/themeProvider";

export interface AuthProps {
  onLogin?: (username: string, password: string) => void;
  onGuestLogin?: () => void;
  onSignup?: (username: string, password: string) => void;
}

export interface FullChatbotProps
  extends BasicChatBoxProps,
    BasicHistoryBoxProps,
    LogoProps,
    userDetailsProps,
    AuthProps,
    ToasterProps,
    ThemeProviderProps {}
