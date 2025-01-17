import React, { useState } from "react";
import ChatBox from "../ChatBox";
import HistoryBox from "../HistoryBox";
import Header from "../Header/header";
import "./fullChatbot.css";
import Accessibility from "../Accessibility/accessibilityPage";
import { useTheme } from "../../themeContext/themeProvider";
import { ChatbotProps } from "./chatbotProps";



export interface MobileChatbotProps extends ChatbotProps {
  isMobile: boolean;
}


const MobileChatbot: React.FC<MobileChatbotProps> = ({
  history,
  chats,
  onChatSubmit,
  onChatScroll,
  onChatScrollTop,
  onChatScrollBottom,
  onFileUpload,
  onSearchChange,
  onCardClick,
  onCreateNewChat,
  isMobile,
  sessionId,
  onStarClick,
  onTextFeedbackSubmit,
}) => {
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
            userName="John Doe"
            toggleLabel="Enable Dark Theme"
            isMobile={isMobile}
            isChatOpen={ischatOpen}
            setIsChatOpen={setIsChatOpen}
            accessibilityOpen={accessibilityOpen}
            setAccessibilityOpen={setAccessibilityOpen}
          />
        </div>

        {!ischatOpen && !accessibilityOpen && (
          <div className="main-pages">
            <HistoryBox
              history={history}
              onSearchChange={onSearchChange}
              onCardClick={onCardClick}
              onCreateNewChat={onCreateNewChat}
              // logo={logo}
              isCollapsed={false}
              accessibilityOpen={accessibilityOpen}
              setAccessibilityOpen={setAccessibilityOpen}
              isMobile={isMobile}
              setIsChatOpen={setIsChatOpen}
            />
          </div>
        )}

        {ischatOpen && !accessibilityOpen && (
          <div className="main-pages">
            <ChatBox
              chats={chats}
              onSubmit={onChatSubmit}
              onChatScroll={onChatScroll}
              onChatScrollBottom={onChatScrollBottom}
              onChatScrollTop={onChatScrollTop}
              onFileUpload={onFileUpload}
              sessionId={sessionId}
              onStarClick={onStarClick}
              onTextFeedbackSubmit={onTextFeedbackSubmit}
            />
          </div>
        )}

        {accessibilityOpen && (
          <div className="main-pages">
            <Accessibility />
          </div>
        )}
      </div>
    </>
  );
};

export default MobileChatbot;
