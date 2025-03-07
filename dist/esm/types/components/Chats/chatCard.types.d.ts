export interface BasicChatProps {
    sender: "ai" | "user";
    type: "text" | "actionCard" | "pdf";
    text: string;
    timestamp: string;
    profileImage?: string;
    ratingEnabled?: boolean;
    textFeedbackEnabled?: boolean;
    feedback?: string;
    rating?: number;
    chatId?: string;
    sessionId?: string;
    onStarClick?: (star: number, chatId?: string, sessionId?: string) => void;
    onTextFeedbackSubmit?: (feedback: string, chatId?: string, sessionId?: string) => void;
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
export interface PDFCardProps {
    pdfUrl?: string;
    pdfUploaded?: boolean;
}
export interface ChatCardProps extends BasicChatProps, userDetailsProps, CardWithActionsProps, PDFCardProps {
}
export {};
