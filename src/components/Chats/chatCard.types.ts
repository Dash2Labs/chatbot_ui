export interface BasicChatProps {
  sender: "ai" | "user"; // Determines if the card is AI or User
  type:"text"| "actionCard"| "pdf"; // Determines the type of chat card
  text: string; // The chat text
  timestamp: string; // The timestamp of the chat
  profileImage?: string; // Optional: Profile image URL
  ratingEnabled?: boolean; // Optional: Enables the star feedback system
  textFeedbackEnabled?: boolean; // Optional: Enables text feedback modal
  feedback?: string; // Submitted feedback text
  rating?: number ; // Submitted star rating (1-5 stars)
  chatId?: string; // Unique chat ID
  sessionId?: string; // Unique session ID
  onStarClick?: (star: number, chatId?:string, sessionId?:string) => void; // Callback for feedback submission
  onTextFeedbackSubmit?: (feedback: string, chatId?:string, sessionId?:string) => void; // Callback for text feedback submission
}

export interface userDetailsProps {
  userName?: string;
  userProfileImage?: string;
  aiName?: string;
  aiProfileImage?: string;
  isProfileImageRequired?: boolean;
}

interface Action {
  label: string;
}

export interface CardWithActionsProps {
  actionCardTitle?: string;
  actionCardSubtitle?: string;
  actions?: Action[];
  sessionId?: string;
  handleActionCardClick?: (label: string, sessionId?: string) => void;
}

export interface PDFCardProps{
  pdfUrl?: string;
  pdfUploaded?: boolean;
}

export interface ChatCardProps extends BasicChatProps, userDetailsProps,CardWithActionsProps,PDFCardProps {}
