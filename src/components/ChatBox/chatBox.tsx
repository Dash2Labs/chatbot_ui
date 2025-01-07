import React, { useState, useRef } from "react";
import ChatCard from "../Chats";
import { ChatCardProps } from "../Chats/chatCard.types";
import "./chatBox.css";
import send from "../../assets/send.svg";
import upload from "../../assets/upload.svg";
import { useTheme } from "../../themeContext/themeProvider";

interface ChatBoxProps {
  chats: ChatCardProps[];
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  onScrollTop?: () => void;
  onScrollBottom?: () => void;
  onSubmit: (message: string) => void;
  onFileUpload?: (file: File) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  chats,
  onScroll,
  onScrollTop,
  onScrollBottom,
  onSubmit,
  onFileUpload,
}) => {
  const [message, setMessage] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { theme, themes } = useTheme();
  const currentTheme = themes[theme] || themes.light;

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;

    if (onScroll) onScroll(event);
    if (container.scrollTop === 0 && onScrollTop) onScrollTop();
    if (
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      onScrollBottom
    )
      onScrollBottom();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onFileUpload) onFileUpload(file);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <>
      <p
        className="page-title"
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
            <ChatCard key={index} {...chat} />
          ))}
        </div>
        <div className="chat-box-input-area">
          <div className="input-upload-container">
            <input
              type="text"
              className="chat-box-input"
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
