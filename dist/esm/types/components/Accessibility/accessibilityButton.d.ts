import React from "react";
import "./accessibilityButton.css";
export interface AccessibilityButtonProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    onAccessibilityClick?: () => void;
    className?: string;
    isCollapsed?: boolean;
}
declare const AccessibilityButton: React.FC<AccessibilityButtonProps>;
export default AccessibilityButton;
