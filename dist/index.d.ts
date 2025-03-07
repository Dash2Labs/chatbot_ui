/// <reference types="react" />
import React$1 from 'react';

interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}
declare const Button: React$1.FC<ButtonProps>;

interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}
declare const SwitchToggle: React$1.FC<SwitchProps>;

interface HistoryCardProps {
    title: string;
    timeStamps: string | Date;
    isActive?: boolean;
    isSelected?: boolean;
    onClick?: () => void;
    sessionId?: string;
}

declare const HistoryCard: React$1.FC<HistoryCardProps>;

interface HistoryBoxSettingProps {
    isCollapsed?: boolean;
    setIsCollapsed?: (isCollapsed: boolean) => void;
    accessibilityOpen?: boolean;
    setAccessibilityOpen?: (accessibilityOpen: boolean) => void;
    setIsChatOpen?: (isOpen: boolean) => void;
}
interface LogoProps {
    fullLogo?: string;
    compactLogo?: string;
}
interface BasicHistoryBoxProps {
    history: HistoryCardProps[];
    onSearchChange: (term: string) => void;
    onCardClick?: (cardDetails: HistoryCardProps) => void;
    onCreateNewChat: () => void;
    sessionId?: string;
    onHistoryScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    onHistoryScrollTop?: () => void;
    onHistoryScrollBottom?: () => void;
    isMobile?: boolean;
}
interface HistoryBoxProps extends BasicHistoryBoxProps, HistoryBoxSettingProps, LogoProps {
}

declare const HistoryBox: React$1.FC<HistoryBoxProps>;

interface BasicChatProps {
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
interface userDetailsProps {
    userName?: string;
    userProfileImage?: string;
    aiName?: string;
    aiProfileImage?: string;
    isProfileImageRequired?: boolean;
}
interface Action {
    label: string;
}
interface CardWithActionsProps {
    actionCardTitle?: string;
    actionCardSubtitle?: string;
    actions?: Action[];
    sessionId?: string;
    handleActionCardClick?: (label: string, sessionId?: string) => void;
}
interface PDFCardProps {
    pdfUrl?: string;
    pdfUploaded?: boolean;
}
interface ChatCardProps extends BasicChatProps, userDetailsProps, CardWithActionsProps, PDFCardProps {
}

declare const ChatCard: React$1.FC<ChatCardProps>;

interface BasicChatBoxProps {
    chats: ChatCardProps[];
    onChatScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    onChatScrollTop?: () => void;
    onChatScrollBottom?: () => void;
    onChatSubmit: (message: string, sessionId?: string) => void;
    onFileUpload?: (file: File, sessionId?: string) => void;
    onStarClick?: (star: number, chatId?: string, sessionId?: string) => void;
    onTextFeedbackSubmit?: (feedback: string, chatId?: string, sessionId?: string) => void;
    sessionId?: string;
    handleActionCardClick?: (label: string, sessionId?: string) => void;
}
interface ChatBoxProps extends BasicChatBoxProps, userDetailsProps {
}

declare const ChatBox: React$1.FC<ChatBoxProps>;

interface HeaderProps {
    userName?: string;
    handleToggle?: (checked: boolean) => void;
    isToggleChecked?: boolean;
    toggleLabel?: string;
    customStyles?: React$1.CSSProperties;
    profileStyles?: React$1.CSSProperties;
    isMobile?: boolean;
    isChatOpen?: boolean;
    accessibilityOpen?: boolean;
    setIsChatOpen?: (isOpen: boolean) => void;
    setAccessibilityOpen?: (isOpen: boolean) => void;
    compactLogo?: string;
    userProfileImage?: string;
}
declare const Header: React$1.FC<HeaderProps>;

interface FullChatbotProps extends BasicChatBoxProps, BasicHistoryBoxProps, LogoProps, userDetailsProps {
}

declare const FullChatbot: React$1.FC<FullChatbotProps>;

export { Button, ChatBox, type ChatBoxProps, ChatCard, type ChatCardProps, FullChatbot, Header, HistoryBox, type HistoryBoxProps, HistoryCard, type HistoryCardProps, SwitchToggle };
