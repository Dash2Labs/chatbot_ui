import React, { useState } from "react";
import ChatBox from "../ChatBox";
import HistoryBox from "../HistoryBox";
import Header from "../Header/header";
import "./fullChatbot.css";
import Accessibility from "../Accessibility/accessibilityPage";
import { useTheme } from "../../themeContext/themeProvider";
import { ChatbotProps } from "./chatbotProps";

interface WebChatbotProps extends ChatbotProps {}

const WebChatbot: React.FC<WebChatbotProps> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const { theme, themes } = useTheme();

  const currentTheme = themes[theme] || themes.light;
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };
  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.112"
      height="10"
      viewBox="0 0 5.112 10"
    >
      <g id="Group_1476" data-name="Group 1476" transform="translate(0)">
        <path
          id="Path_42"
          data-name="Path 42"
          d="M27,962.325a.555.555,0,0,1,.142-.333l4-4.444a.556.556,0,0,1,.826.743L28.3,962.363l3.667,4.073a.556.556,0,0,1-.826.743l-4-4.444A.556.556,0,0,1,27,962.325Z"
          transform="translate(-26.994 -957.363)"
          fill="#fff"
          style={{ fill: currentTheme?.btn_icon_color }}
        />
      </g>
    </svg>
  );

  return (
    <div className="main">
      <div
        className={` ${isCollapsed ? "collapsed-arrow" : ""} arrow`}
        onClick={toggleSidebar}
      >
        <ArrowIcon />{" "}
      </div>
      <HistoryBox
        history={props.history}
        onSearchChange={props.onSearchChange}
        onCardClick={props.onCardClick}
        onCreateNewChat={props.onCreateNewChat}
        // logo={logo}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        accessibilityOpen={accessibilityOpen}
        setAccessibilityOpen={setAccessibilityOpen}
        onHistoryScroll={props.onHistoryScroll}
        onHistoryScrollTop={props.onHistoryScrollTop}
        onHistoryScrollBottom={props.onHistoryScrollBottom}
        fullLogo={props.fullLogo}
        compactLogo={props.compactLogo}
      />
      <div
        className={`page-layouts ${isCollapsed ? "full-width" : ""}`}
        style={{ backgroundColor: currentTheme?.main_container_bg }}
      >
        <div className="toolbar">
          <Header
            userName={props.userName}
            // handleToggle={onToggleTheme}
            userProfileImage={props.userProfileImage}
            toggleLabel="Enable Dark Theme"
            // isToggleChecked={theme === "dark"}
          />
        </div>
        <div className="main-pages">
          {accessibilityOpen ? (
            <Accessibility />
          ) : (
            <ChatBox
              chats={props.chats}
              onSubmit={props.onChatSubmit}
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WebChatbot;
