export interface HistoryCardProps {
    title: string;
    timeStamps: string | Date;
    isActive?: boolean;
    isSelected?: boolean;
    onClick?: () => void;
    sessionId?: string;
}
