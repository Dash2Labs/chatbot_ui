import { ChatCardProps } from "../Chats/chatCard.types";
import { userDetailsProps } from "../Chats/chatCard.types";

export interface BasicChatBoxProps {
  chats: ChatCardProps[];
  onChatScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  onChatScrollTop?: () => void;
  onChatScrollBottom?: () => void;
  onChatSubmit: (message: string, sessionId?:string) => void;
  onFileUpload?: (file: File, sessionId?:string) => void;
  onStarClick?: (star: number, chatId?: string, sessionId?: string) => void; 
  onTextFeedbackSubmit?: (
    feedback: string,
    chatId?: string,
    sessionId?: string
  ) => void; 
  sessionId?: string;
  handleActionCardClick?: (label: string, sessionId?: string) => void;
  isResponseLoading?: boolean;
}

export interface ChatBoxProps extends BasicChatBoxProps, userDetailsProps {}