import React from "react";
import { ThemeProvider } from "../../themeContext/themeProvider";
import FullChatbot from "../FullChatbot";

interface ChatbotSuiteProps {
  history: any;
  onChatSubmit: (message: string, sessionId?: string) => void;
  onChatScroll: () => void;
  onChatScrollTop: () => void;
  onChatScrollBottom: () => void;
  onSearchChange: (term: string) => void;
  onCardClick: (cardDetails: any) => void;
  onFileUpload: (file: File, sessionId?: string) => void;
  onCreateNewChat: () => void;
  chats: any;
  onStarClick?: (star: number, chatId?: string, sessionId?: string) => void;
  onTextFeedbackSubmit?: (
    feedback: string,
    chatId?: string,
    sessionId?: string
  ) => void;
  sessionId?: string;
}

const ChatbotSuite: React.FC<ChatbotSuiteProps> = ({
  history,
  onSearchChange,
  onCardClick,
  onCreateNewChat,
  chats,
  onChatSubmit,
  onChatScroll,
  onChatScrollBottom,
  onChatScrollTop,
  onFileUpload,
  sessionId,
  onStarClick,
  onTextFeedbackSubmit,
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
        onChatScroll={onChatScroll}
        onChatScrollBottom={onChatScrollBottom}
        onChatScrollTop={onChatScrollTop}
        onFileUpload={onFileUpload}
        sessionId={sessionId}
        onStarClick={onStarClick}
        onTextFeedbackSubmit={onTextFeedbackSubmit}
      />
    </ThemeProvider>
  );
};

export default ChatbotSuite;
