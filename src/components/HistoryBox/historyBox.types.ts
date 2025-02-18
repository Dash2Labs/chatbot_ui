import { HistoryCardProps } from "../Cards/historyCard.types";

interface HistoryBoxSettingProps {
  isCollapsed?: boolean;
  setIsCollapsed?: (isCollapsed: boolean) => void;
  accessibilityOpen?: boolean;
  setAccessibilityOpen?: (accessibilityOpen: boolean) => void;
  setIsChatOpen?: (isOpen: boolean) => void;
}

export interface LogoProps {
  fullLogo?: string;
  compactLogo?: string;
}

export interface BasicHistoryBoxProps {
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

export interface HistoryBoxProps extends BasicHistoryBoxProps, HistoryBoxSettingProps, LogoProps {}
