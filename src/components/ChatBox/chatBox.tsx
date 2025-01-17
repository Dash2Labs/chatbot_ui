import React, { useState, useRef, useEffect } from "react";
import ChatCard from "../Chats";
import { ChatCardProps } from "../Chats/chatCard.types";
import "./chatBox.css";
import send from "../../assets/send.svg";
import upload from "../../assets/upload.svg";
import { useTheme } from "../../themeContext/themeProvider";

interface ChatBoxProps {
  chats: ChatCardProps[];
  onChatScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  onChatScrollTop?: () => void;
  onChatScrollBottom?: () => void;
  onSubmit: (message: string, sessionId?:string) => void;
  onFileUpload?: (file: File, sessionId?:string) => void;
  onStarClick?: (star: number, chatId?: string, sessionId?: string) => void; 
  onTextFeedbackSubmit?: (
    feedback: string,
    chatId?: string,
    sessionId?: string
  ) => void; 
  sessionId?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  chats,
  onChatScroll,
  onChatScrollTop,
  onChatScrollBottom,
  onSubmit,
  onFileUpload,
  onStarClick,
  onTextFeedbackSubmit,
  sessionId
}) => {
  const [message, setMessage] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;

    if (onChatScroll) onChatScroll(event);
    if (container.scrollTop === 0 && onChatScrollTop) onChatScrollTop();
    if (
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      onChatScrollBottom
    )
      onChatScrollBottom();
  };

  const scrollToBottom = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onFileUpload) onFileUpload(file, sessionId || "");
  };

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message, sessionId || "");
      setMessage("");
    }
  };

  return (
    <>
      <p
        className={`page-title ${fontSize} ${contrast}`}
        style={{
          color: currentTheme?.primary_font_color,
        }}
      >
        New Chat
      </p>
      <div
        className="chat-box-container"
        style={{
          backgroundColor: currentTheme?.cb_bg_color,
          color: currentTheme?.cb_font_color,
        }}
      >
        <div
          className="chat-box-messages"
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            scrollbarColor: `${currentTheme?.scroll_bar_color} ${currentTheme?.cb_bg_color}`,
          }}
        >
          {chats.map((chat, index) => (
            <ChatCard
              key={index}
              type={chat.type} // ai or user
              text={chat.text} // Chat message
              timestamp={chat.timestamp} // Message timestamp
              profileImage={chat.profileImage} // Profile image URL (optional)
              name={chat.name} // Name of the user (optional)
              ratingEnabled={chat.ratingEnabled ?? true} // Enable/disable rating (default true)
              textFeedbackEnabled={chat.textFeedbackEnabled ?? true} // Enable/disable text feedback (default true)
              isProfileImageRequired={chat.isProfileImageRequired ?? false} // Show profile image (default false)
              onStarClick={onStarClick} // Callback for star click
              feedback={chat.feedback || ""} // Existing feedback text (optional)
              rating={chat.rating || 0} // Existing rating (default 0)
              chatId={chat.chatId || ""} // Chat ID for reference
              sessionId={chat.sessionId || ""} // Session ID for reference
              onTextFeedbackSubmit={onTextFeedbackSubmit} // Callback for text feedback submission
            />
          ))}
        </div>
        <div className="chat-box-input-area">
          <div className="input-upload-container">
            <input
              type="text"
              className={`chat-box-input ${fontSize} ${contrast}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                backgroundColor: currentTheme?.cb_input_bg_color,
                borderColor: currentTheme?.cb_input_border_color,
                color: currentTheme?.cc_primary_font_color,
              }}
            />
            <input
              type="file"
              className="chat-box-file-input"
              onChange={handleFileUpload}
              id="input-file"
            />
            <label htmlFor="input-file" className="input-file-icon">
              <img src={upload} alt="Upload" />
            </label>
          </div>
          <button
            className={`chat-box-submit-btn ${message ? "" : "btn-disabled"}`}
            onClick={handleSubmit}
            disabled={!message}
            style={{
              backgroundColor: message
                ? currentTheme?.send_btn_bg
                : currentTheme?.cb_disabled_button_bg_color,
            }}
          >
            <img src={send} alt="Send" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
