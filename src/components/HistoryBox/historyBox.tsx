import React, { useState, useRef } from "react";
import HistoryCard from "../Cards";
import "./historyBox.css";
import AccessibilityButton from "../Accessibility/accessibilityButton";
import messageIcon from "../../assets/messageIcon.svg";
import { useTheme } from "../../themeContext/themeProvider";

interface HistoryItem {
  title: string;
  timeStamps: string | Date;
  isActive: boolean;
  sessionId: string;
}

interface HistoryBoxProps {
  history: HistoryItem[];
  onCardClick?: (cardDetails: HistoryItem) => void;
  onSearchChange?: (term: string) => void;
  onCreateNewChat?: () => void;
  isCollapsed?: boolean;
  setIsCollapsed?: (isCollapsed: boolean) => void;
  accessibilityOpen?: boolean;
  setAccessibilityOpen?: (accessibilityOpen: boolean) => void;
  isMobile?: boolean;
  setIsChatOpen?: (isOpen: boolean) => void;
  fullLogo?: string;
  compactLogo?: string;
  onHistoryScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  onHistoryScrollTop?: () => void;
  onHistoryScrollBottom?: () => void;
}

const HistoryBox: React.FC<HistoryBoxProps> = ({
  history,
  onCardClick,
  onSearchChange,
  onCreateNewChat,
  isCollapsed,
  accessibilityOpen,
  setAccessibilityOpen,
  isMobile = false,
  setIsChatOpen,
  fullLogo,
  compactLogo,
  onHistoryScroll,
  onHistoryScrollTop,
  onHistoryScrollBottom,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const { theme, themes, fontSize, contrast } = useTheme();

  const currentTheme = themes[theme] || themes.light;

  const handleCardClick = (cardDetails: HistoryItem, index: number) => {
    setSelectedCardIndex(index);
    if (isMobile) {
      setIsChatOpen && setIsChatOpen(true);
    }
    if (onCardClick) onCardClick(cardDetails);
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
    if (onSearchChange) onSearchChange(term);
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;

    if (onHistoryScroll) onHistoryScroll(event);
    if (container.scrollTop === 0 && onHistoryScrollTop) onHistoryScrollTop();
    if (
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      onHistoryScrollBottom
    )
      onHistoryScrollBottom();
  };

  const PlusIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: currentTheme?.btn_icon_color }}
    >
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        id="Path_43"
        data-name="Path 43"
        d="M80.145,67.329a9.062,9.062,0,1,0-1.165,13.789L82.1,84.234A1.511,1.511,0,0,0,84.234,82.1l-3.116-3.114A9.06,9.06,0,0,0,80.145,67.329ZM78.01,78.01a6.042,6.042,0,1,1,0-8.544,6.047,6.047,0,0,1,0,8.544Z"
        transform="translate(-64.675 -64.675)"
        fill="#242424"
        style={{ fill: currentTheme?.hc_primary_font_color }}
      />
    </svg>
  );

  return (
    <div
      className={`sidebar ${isCollapsed ? "collapsed" : ""} `}
      style={{
        backgroundColor: currentTheme?.hb_bg_color,
        color: currentTheme?.hc_primary_font_color,
      }}
    >
      <div
        className={`history-box-container ${theme}-theme ${fontSize}`}
        style={{
          color: currentTheme?.hc_primary_font_color,
          borderColor: currentTheme?.hb_border,
        }}
      >
        {!isCollapsed ? (
          <>
            <img className="logo-icon" src={fullLogo} alt="Logo" />
            <div className="new-chat-btn">
              <button
                className={`${fontSize}`}
                style={{ color: currentTheme?.primary_color }}
              >
                <PlusIcon />{" "}
                <span style={{ marginLeft: "10px" }}>Start a new chat</span>
              </button>
            </div>
            <div className="history-box-search">
              <input
                type="text"
                className={`history-box-input ${fontSize} ${contrast}`}
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => handleSearchTermChange(e.target.value)}
              />
              <button
                className="history-box-button"
                onClick={onCreateNewChat}
                style={{ backgroundColor: currentTheme?.btn_bg_color }}
              >
                <PlusIcon />
              </button>
            </div>

            <div
              className={`history-box-cards ${fontSize}`}
              ref={scrollRef}
              onScroll={handleScroll}
            >
              {history.map((item, index) => (
                <HistoryCard
                  key={index}
                  title={item.title}
                  timeStamps={item.timeStamps}
                  isActive={item.isActive}
                  isSelected={selectedCardIndex === index}
                  onClick={() => handleCardClick(item, index)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="icon-view">
            <div className="logo-wrapper">
              <img className="logo" src={compactLogo} alt="Compact Logo" />
            </div>
            <div className="collapsed-menu">
              <button
                className="history-box-button"
                onClick={onCreateNewChat}
                style={{ backgroundColor: currentTheme?.btn_bg_color }}
              >
                <PlusIcon />
              </button>
            </div>
            <div className="collapsed-menu">
              <SearchIcon />
            </div>
            <div className="collapsed-menu">
              <img
                className="icon"
                src={messageIcon}
                alt="New Chat"
                title="New Chat"
              />
            </div>
          </div>
        )}
        {!isMobile && (
          <AccessibilityButton
            isCollapsed={isCollapsed}
            onAccessibilityClick={() => {
              setAccessibilityOpen && setAccessibilityOpen(!accessibilityOpen);
            }}
            className="collapsed-accessibility"
          />
        )}
      </div>
    </div>
  );
};

export default HistoryBox;
