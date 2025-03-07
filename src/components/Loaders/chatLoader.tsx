import "./loader.css";
import React from "react";
import { useTheme } from "../../themeContext/themeProvider";
import { useTranslation } from "../../Locales/translations";

interface ChatLoaderProps {
  isProfileImageRequired?: boolean;
  aiName?: string;
  aiProfileImage?: string;
}

const ChatLoader: React.FC<ChatLoaderProps> = ({
  isProfileImageRequired = false,
  aiName = "A",
  aiProfileImage = "",
}) => {
  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;
  const { t } = useTranslation();

  return (
    <div className={`chat-card-container align-left ${fontSize} ${contrast}`}>
      {isProfileImageRequired && (
        <div className="profile-wrapper">
          {aiProfileImage ? (
            <img src={aiProfileImage} alt="Profile" className="profile-image" />
          ) : (
            <div className={`profile-initials ${fontSize} ${contrast}`}>
              {aiName?.charAt(0)?.toUpperCase()}
            </div>
          )}
        </div>
      )}
      <div>
        <ol className="chat">
          <li
            className="other"
            style={
              {
                "--dynamic-border-color": currentTheme?.cc_bg_color,
              } as React.CSSProperties
            }
          >
            <div
              className={`msg ${fontSize} ${contrast}`}
              style={{
                backgroundColor: currentTheme?.cc_msg_bg,
                color: currentTheme?.cc_primary_font_color,
              }}
            >
              <div className="chat-loader">
                <span className="loading-text"  style={{color:currentTheme?.primary_font_color}}>{t("loading_response")}</span>
                <span className="dot" style={{background:currentTheme?.primary_font_color}}></span>
                <span className="dot" style={{background:currentTheme?.primary_font_color}}></span>
                <span className="dot" style={{background:currentTheme?.primary_font_color}}></span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ChatLoader;
