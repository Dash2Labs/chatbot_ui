import React, { useContext } from "react";
import "./cardWithActions.css";
import { useTheme } from "../../themeContext/themeProvider";
import { CardWithActionsProps } from "../Chats/chatCard.types";

const CardWithActions: React.FC<CardWithActionsProps> = ({
  actionCardTitle,
  actionCardSubtitle,
  actions,
  sessionId,
  handleActionCardClick,
}) => {
  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;
  return (
    <div
      className="card-with-actions"
      style={
        {
          "--dynamic-border-color": currentTheme?.cc_bg_color,
        } as React.CSSProperties
      }
    >
      <div
        className="msg"
        style={{
          backgroundColor: currentTheme?.cc_msg_bg,
          color: currentTheme?.cc_primary_font_color,
        }}
      >
        <div className="card-header">
          <p className={`title ${fontSize} ${contrast}`}>{actionCardTitle}</p>
          {actionCardSubtitle && (
            <p className={`card-subtitle ${fontSize} ${contrast}`}>
              {actionCardSubtitle}
            </p>
          )}
        </div>
        <div className="card-actions">
          {actions && actions.map((action, index) => (
            <button
              key={index}
              className={`card-action-button ${fontSize} ${contrast}`}
              onClick={() =>
                handleActionCardClick &&
                handleActionCardClick(action.label, sessionId)
              }
              style={{
                backgroundColor: currentTheme?.cc_msg_bg,
                color: currentTheme?.cc_primary_font_color,
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardWithActions;
