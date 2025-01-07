import React from "react";
import { ThemeProvider } from "../../themeContext/themeProvider";
import FullChatbot from "../FullChatbot";

interface ChatbotSuiteProps {
  history: any;
  onChatSubmit: (message: string) => void;
  onScroll: () => void;
  onScrollTop: () => void;
  onScrollBottom: () => void;
  onSearchChange: (term: string) => void;
  onCardClick: (cardDetails: any) => void;
  onFileUpload: (file: File) => void;
  onCreateNewChat: () => void;
  chats: any;
}

const ChatbotSuite: React.FC<ChatbotSuiteProps> = ({
  history,
  onSearchChange,
  onCardClick,
  onCreateNewChat,
  chats,
  onChatSubmit,
  onScroll,
  onScrollBottom,
  onScrollTop,
  onFileUpload,
}) => {
  return (
    <ThemeProvider>
      <FullChatbot
        history={history}
        onSearchChange={onSearchChange}
        onCardClick={onCardClick}
        onCreateNewChat={onCreateNewChat}
        chats={chats}
        onChatSubmit={onChatSubmit}
        onScroll={onScroll}
        onScrollBottom={onScrollBottom}
        onScrollTop={onScrollTop}
        onFileUpload={onFileUpload}
      />
    </ThemeProvider>
  );
};

export default ChatbotSuite;
