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
    isMobile: isMobile,
    handleActionCardClick: props.handleActionCardClick,
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
