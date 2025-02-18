import React from "react";
import "./header.css";
interface HeaderProps {
    userName?: string;
    handleToggle?: (checked: boolean) => void;
    isToggleChecked?: boolean;
    toggleLabel?: string;
    customStyles?: React.CSSProperties;
    profileStyles?: React.CSSProperties;
    isMobile?: boolean;
    isChatOpen?: boolean;
    accessibilityOpen?: boolean;
    setIsChatOpen?: (isOpen: boolean) => void;
    setAccessibilityOpen?: (isOpen: boolean) => void;
    compactLogo?: string;
    userProfileImage?: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
