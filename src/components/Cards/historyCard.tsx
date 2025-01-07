import React from "react";
import { useTheme } from "../../themeContext/themeProvider"; 
import "./historyCard.css";

interface HistoryCardProps {
  title: string; 
  timeStamps: string | Date; 
  isActive: boolean; 
  isSelected: boolean; 
  onClick?: () => void; 
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  title,
  timeStamps,
  isActive,
  isSelected,
  onClick,
}) => {
  const { theme, themes } = useTheme(); 


  const currentTheme = themes[theme] || themes.light;

  return (
    <div
      className={`history-card-container ${isSelected ? "selected" : ""}`}
      onClick={onClick} 
      style={{
        backgroundColor: currentTheme?.hc_bg_color,
        borderColor: isSelected ?  currentTheme?.hc_border :"", 
        color: currentTheme?.hc_primary_font_color,
      }}
    >
      <h3
        className="history-card-title"
        style={{
          color: currentTheme?.hc_primary_font_color,
          fontSize: "var(--font-size)", 
        }}
      >
        {title}
      </h3>
      <div
        className="history-card-timeStamps"
        style={{ color: currentTheme?.hc_secondary_font_color }}
      >
        <p>
          {typeof timeStamps === "string"
            ? timeStamps
            : timeStamps.toLocaleString()}
        </p>
        {isActive && (
          <span
            className="history-card-active"
            style={{
              backgroundColor: currentTheme?.hc_active_bg_color,
              color: currentTheme?.hc_active_color,
            }}
          >
            Active
          </span>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;
