import React, { useEffect, useState } from "react";
import ChatBox from "../ChatBox";
import HistoryBox from "../HistoryBox";
import Header from "../Header/header";
import "./fullChatbot.css";
import arrow from "../../assets/arrow.svg";
import Accessibility from "../Accessibility/accessibilityPage";
import { useTheme } from "../../themeContext/themeProvider";
import MobileChatbot from "./mobileChatbot";
import { ChatbotProps } from "./chatbotProps";


interface FullChatbotProps extends ChatbotProps {}

const FullChatbot: React.FC<FullChatbotProps> = ({
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
  sessionId,
  onStarClick,
  onTextFeedbackSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const { theme, themes } = useTheme();
  const [isMobile, setIsMobile] = useState(true);

  const currentTheme = themes[theme] || themes.light;
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

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

  console.log(isMobile);

  return (
    <>
      {!isMobile ? (
        <div className="main">
          <div
            className={` ${isCollapsed ? "collapsed-arrow" : ""} arrow`}
            onClick={toggleSidebar}
          >
            <img src={arrow} alt="Toggle Sidebar" />
          </div>
          <HistoryBox
            history={history}
            onSearchChange={onSearchChange}
            onCardClick={onCardClick}
            onCreateNewChat={onCreateNewChat}
            // logo={logo}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            accessibilityOpen={accessibilityOpen}
            setAccessibilityOpen={setAccessibilityOpen}
          />
          <div
            className={`page-layouts ${isCollapsed ? "full-width" : ""}`}
            style={{ backgroundColor: currentTheme?.main_container_bg }}
          >
            <div className="toolbar">
              <Header
                userName="John Doe"
                // handleToggle={onToggleTheme}
                toggleLabel="Enable Dark Theme"
                // isToggleChecked={theme === "dark"}
              />
            </div>
            <div className="main-pages">
              {accessibilityOpen ? (
                <Accessibility />
              ) : (
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
              )}
            </div>
          </div>
        </div>
      ) : (
        <MobileChatbot
          history={history}
          chats={chats}
          onChatSubmit={onChatSubmit}
          onChatScroll={onChatScroll}
          onChatScrollTop={onChatScrollTop}
          onChatScrollBottom={onChatScrollBottom}
          onFileUpload={onFileUpload}
          onSearchChange={onSearchChange}
          onCardClick={onCardClick}
          onCreateNewChat={onCreateNewChat}
          isMobile={isMobile}
          sessionId={sessionId}
          onStarClick={onStarClick}
          onTextFeedbackSubmit={onTextFeedbackSubmit}
        />
      )}
    </>
  );
};

export default FullChatbot;
