import React, { useEffect, useState } from "react";
import ChatBox from "../ChatBox";
import HistoryBox from "../HistoryBox";
import Header from "../Header/header";
import "./fullChatbot.css";
import arrow from "../../assets/arrow.svg";
import Accessibility from "../Accessibility/accessibilityPage";
import { useTheme } from "../../themeContext/themeProvider";

interface FullChatbotProps {
  history: any;
  chats: any;
  onChatSubmit: (message: string) => void;
  onScroll: () => void;
  onScrollTop: () => void;
  onScrollBottom: () => void;
  onSearchChange: (term: string) => void;
  onCardClick: (cardDetails: any) => void;
  onFileUpload: (file: File) => void;
  onCreateNewChat: () => void;
}

const FullChatbot: React.FC<FullChatbotProps> = ({
  history,
  chats,
  onChatSubmit,
  onScroll,
  onScrollTop,
  onScrollBottom,
  onFileUpload,
  onSearchChange,
  onCardClick,
  onCreateNewChat,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const { theme, themes } = useTheme();

  const currentTheme = themes[theme] || themes.light;
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
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
      {/* </div> */}
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
              onScroll={onScroll}
              onScrollBottom={onScrollBottom}
              onScrollTop={onScrollTop}
              onFileUpload={onFileUpload}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FullChatbot;
