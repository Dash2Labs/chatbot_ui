import React from "react";
import "./accessibilityButton.css";
import { useTheme } from "../../themeContext/themeProvider";

export interface AccessibilityButtonProps {
  icon?: React.ReactNode;
  title?: string; 
  description?: string; 
  onAccessibilityClick?: () => void; 
  className?: string;
  isCollapsed?: boolean;
}

const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({
  icon,
  title = "Is this easy to read?",
  description = "If not, click on this box.",
  onAccessibilityClick,
  className = "",
  isCollapsed,
}) => {
  const { theme, themes } = useTheme();

  const currentTheme = themes[theme] || themes.light;

  const AccessibilityIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <path
        d="M25,5A20,20,0,1,0,45,25,20.01,20.01,0,0,0,25,5ZM22.078,24A42.971,42.971,0,0,1,19.4,35.559a1.77,1.77,0,0,0,3.309,1.255A47.474,47.474,0,0,0,25,28.718a47.516,47.516,0,0,0,2.287,8.1A1.77,1.77,0,0,0,30.6,35.559a42.979,42.979,0,0,1-2.673-11.547,57.089,57.089,0,0,0,6.36-.671,1.77,1.77,0,1,0-.568-3.493,55.039,55.039,0,0,1-17.442,0,1.769,1.769,0,0,0-.547,3.5A61.39,61.39,0,0,0,22.078,24ZM25,12.684a3.194,3.194,0,1,1-3.194,3.194A3.2,3.2,0,0,1,25,12.684Z"
        transform="translate(-5 -5)"
        fill="#242424"
        fillRule="evenodd"
        style={{ fill: currentTheme?.primary_color }}
      />
    </svg>
  );
  return (
    <div
      className={!isCollapsed ? `accessibility-btn` : className}
      onClick={onAccessibilityClick}
      role="button"
      tabIndex={0}
      style={{
        backgroundColor: currentTheme?.cc_bg_color,
        color: currentTheme?.hc_primary_font_color,
      }}
    >
      {icon || <AccessibilityIcon />}
      {!isCollapsed && (
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
