import React, { useState, useRef, useEffect, ReactNode } from "react";
import "./floatingIcon.css";
import MobileChatbot from "../FullChatbot/mobileChatbot";
import { FullChatbotProps } from "../FullChatbot/chatbotProps";
import FullChatbot from "../FullChatbot";
import { ThemeProvider } from "../../themeContext/themeProvider";

const FloatingIcon: React.FC<FullChatbotProps> = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(event.target as Node)
    ) {
      setIsContentVisible(false);
    }
  };

  useEffect(() => {
    if (isContentVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContentVisible]);

  const commonProps = {
    history: props.history,
    chats: props.chats,
    onChatSubmit: props.onChatSubmit,
    onChatScroll: props.onChatScroll,
    onChatScrollTop: props.onChatScrollTop,
    onChatScrollBottom: props.onChatScrollBottom,
    onFileUpload: props.onFileUpload,
    onSearchChange: props.onSearchChange,
    onCardClick: props.onCardClick,
    onCreateNewChat: props.onCreateNewChat,
    sessionId: props.sessionId,
    onStarClick: props.onStarClick,
    onTextFeedbackSubmit: props.onTextFeedbackSubmit,
    userName: props.userName,
    userProfileImage: props.userProfileImage,
    aiName: props.aiName,
    aiProfileImage: props.aiProfileImage,
    isProfileImageRequired: props.isProfileImageRequired,
    onHistoryScroll: props.onHistoryScroll,
    onHistoryScrollTop: props.onHistoryScrollTop,
    onHistoryScrollBottom: props.onHistoryScrollBottom,
    fullLogo: props.fullLogo,
    compactLogo: props.compactLogo,
    isMobile: true,
    handleActionCardClick: props.handleActionCardClick,
  };

  return (
    <>
      <div
        className="floating-btn-wrapper"
        onClick={() => setIsContentVisible(!isContentVisible)}
      >
        <img
          src={
            props.compactLogo ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG-BgPRkDU3PXBySotnBzQV7CJ1bP-eS7sg&s"
          }
          alt="logo"
        />
      </div>
      {isContentVisible && (
        <div className="mobilebot-container" ref={contentRef}>
          <ThemeProvider
            onSettingsChange={props.onSettingsChange}
            initialSettings={props.initialSettings}
            customThemes={props.customThemes}
          >
            <MobileChatbot {...commonProps} />
          </ThemeProvider>
        </div>
      )}
    </>
  );
};

export default FloatingIcon;
