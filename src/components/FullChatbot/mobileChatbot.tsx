import React, { useState } from "react";
import ChatBox from "../ChatBox";
import HistoryBox from "../HistoryBox";
import Header from "../Header/header";
import "./fullChatbot.css";
import Accessibility from "../Accessibility/accessibilityPage";
import { useTheme } from "../../themeContext/themeProvider";
import { FullChatbotProps } from "./chatbotProps";
import SignupModal from "../Signup/signupModal";
import SignupPage from "../Signup/signupPage";
import Toaster from "../Toaster/toaster";

const MobileChatbot: React.FC<FullChatbotProps> = (props) => {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [ischatOpen, setIsChatOpen] = useState(false);
  const { theme, themes } = useTheme();

  const currentTheme = themes[theme] || themes.light;

  return (
    <>
      <div
        className={`page-layouts`}
        style={{
          backgroundColor: currentTheme?.main_container_bg,
          maxWidth: "600px",
        }}
      >
        <div className="toolbar">
          <Header
            userName={props.userName || ""}
            toggleLabel="Enable Dark Theme"
            isMobile={props.isMobile}
            isChatOpen={ischatOpen}
            setIsChatOpen={setIsChatOpen}
            accessibilityOpen={accessibilityOpen}
            setAccessibilityOpen={setAccessibilityOpen}
            compactLogo={props.compactLogo}
          />
        </div>

        {!ischatOpen && !accessibilityOpen && (
          <div className="main-pages">
            <HistoryBox
              history={props.history}
              onSearchChange={props.onSearchChange}
              onCardClick={props.onCardClick}
              onCreateNewChat={props.onCreateNewChat}
              // logo={logo}
              isCollapsed={false}
              accessibilityOpen={accessibilityOpen}
              setAccessibilityOpen={setAccessibilityOpen}
              isMobile={props.isMobile}
              setIsChatOpen={setIsChatOpen}
              onHistoryScroll={props.onHistoryScroll}
              onHistoryScrollTop={props.onHistoryScrollTop}
              onHistoryScrollBottom={props.onHistoryScrollBottom}
              fullLogo={props.fullLogo}
              compactLogo={props.compactLogo}
            />
          </div>
        )}

        {ischatOpen && !accessibilityOpen && (
          <div className="main-pages">
            <ChatBox
              chats={props.chats}
              onChatSubmit={props.onChatSubmit}
              onChatScroll={props.onChatScroll}
              onChatScrollBottom={props.onChatScrollBottom}
              onChatScrollTop={props.onChatScrollTop}
              onFileUpload={props.onFileUpload}
              sessionId={props.sessionId}
              onStarClick={props.onStarClick}
              onTextFeedbackSubmit={props.onTextFeedbackSubmit}
              userName={props.userName}
              userProfileImage={props.userProfileImage}
              aiName={props.aiName}
              aiProfileImage={props.aiProfileImage}
              isProfileImageRequired={props.isProfileImageRequired}
              handleActionCardClick={props.handleActionCardClick}
              isResponseLoading={props.isResponseLoading}
            />
          </div>
        )}

        {accessibilityOpen && (
          <div className="main-pages">
            <Accessibility />
          </div>
        )}
        {props.toasterConfig?.isToasterOpen && (
          <Toaster toasterConfig={props.toasterConfig} />
        )}
      </div>
    </>
  );
};

export default MobileChatbot;
