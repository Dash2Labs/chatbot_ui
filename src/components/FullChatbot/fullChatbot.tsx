import React, { useEffect, useState } from "react";
import MobileChatbot from "./mobileChatbot";
import WebChatbot from "./webChatbot";
import { ThemeProvider } from "../../themeContext/themeProvider";
import { FullChatbotProps } from "./chatbotProps";

const FullChatbot: React.FC<FullChatbotProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
  }, []);

  const commonProps = {
    aiName: props.aiName,
    aiProfileImage: props.aiProfileImage,
    chats: props.chats,
    compactLogo: props.compactLogo,
    fullLogo: props.fullLogo,
    handleActionCardClick: props.handleActionCardClick,
    history: props.history,
    isMobile: isMobile,
    isProfileImageRequired: props.isProfileImageRequired,
    onCardClick: props.onCardClick,
    onChatScroll: props.onChatScroll,
    onChatScrollBottom: props.onChatScrollBottom,
    onChatScrollTop: props.onChatScrollTop,
    onChatSubmit: props.onChatSubmit,
    onCreateNewChat: props.onCreateNewChat,
    onFileUpload: props.onFileUpload,
    onHistoryScroll: props.onHistoryScroll,
    onHistoryScrollBottom: props.onHistoryScrollBottom,
    onHistoryScrollTop: props.onHistoryScrollTop,
    onSearchChange: props.onSearchChange,
    onStarClick: props.onStarClick,
    onTextFeedbackSubmit: props.onTextFeedbackSubmit,
    sessionId: props.sessionId,
    userName: props.userName,
    userProfileImage: props.userProfileImage,
    isResponseLoading: props.isResponseLoading,
    onLogin: props.onLogin,
    onGuestLogin: props.onGuestLogin,
    toasterConfig: props.toasterConfig,
    onSignup: props.onSignup,
  };

  return (
    <>
      <ThemeProvider
        onSettingsChange={props.onSettingsChange}
        initialSettings={props.initialSettings}
        customThemes={props.customThemes}
      >
        {!isMobile ? (
          <WebChatbot {...commonProps} />
        ) : (
          <MobileChatbot {...commonProps} />
        )}
      </ThemeProvider>
    </>
  );
};

export default FullChatbot;
