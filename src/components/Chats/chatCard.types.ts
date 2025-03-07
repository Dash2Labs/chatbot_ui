export interface BasicChatProps {
  chatId?: string; // Unique chat ID
  feedback?: string; // Submitted feedback text
  onStarClick?: (star: number, chatId?: string, sessionId?: string) => void; // Callback for feedback submission
  onTextFeedbackSubmit?: (feedback: string, chatId?: string, sessionId?: string) => void; // Callback for text feedback submission
  rating?: number; // Submitted star rating (1-5 stars)
  ratingEnabled?: boolean; // Optional: Enables the star feedback system
  sender: "ai" | "user"; // Determines if the card is AI or User
  sessionId?: string; // Unique session ID
  text: string; // The chat text
  textFeedbackEnabled?: boolean; // Optional: Enables text feedback modal
  timestamp: string; // The timestamp of the chat
  type: "text" | "actionCard" | "pdf"; // Determines the type of chat card
}

export interface userDetailsProps {
  aiName?: string;
  aiProfileImage?: string;
  isProfileImageRequired?: boolean;
  userName?: string;
  userProfileImage?: string;
}

export interface Action {
  label: string;
}

export interface CardWithActionsProps {
  actions?: Action[];
  actionCardSubtitle?: string;
  actionCardTitle?: string;
  handleActionCardClick?: (label: string, sessionId?: string) => void;
  sessionId?: string;
}

export interface PDFCardProps{
  pdfUploaded?: boolean;
  pdfUrl?: string;
}

export interface ChatCardProps extends BasicChatProps, userDetailsProps,CardWithActionsProps,PDFCardProps {}
