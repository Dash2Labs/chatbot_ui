
export interface ChatbotProps {
  history: any;
  chats: any;
  onChatSubmit: (message: string, sessionId?: string) => void;
  onChatScroll: () => void;
  onChatScrollTop: () => void;
  onChatScrollBottom: () => void;
  onSearchChange: (term: string) => void;
  onCardClick: (cardDetails: any) => void;
  onFileUpload: (file: File, sessionId?: string) => void;
  onCreateNewChat: () => void;
  onStarClick?: (star: number, chatId?: string, sessionId?: string) => void;
  onTextFeedbackSubmit?: (
    feedback: string,
    chatId?: string,
    sessionId?: string
  ) => void;
  sessionId?: string;
}


