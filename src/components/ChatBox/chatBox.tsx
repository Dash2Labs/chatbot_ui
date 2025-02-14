import React, { useState, useRef, useEffect } from "react";
import ChatCard from "../Chats";
import "./chatBox.css";
import { useTheme } from "../../themeContext/themeProvider";
import { ChatBoxProps } from "./chatBox.types";



const ChatBox: React.FC<ChatBoxProps> = (props) => {
  const [message, setMessage] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;

    if (props.onChatScroll) props.onChatScroll(event);
    if (container.scrollTop === 0 && props.onChatScrollTop) props.onChatScrollTop();
    if (
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      props.onChatScrollBottom
    )
    props.onChatScrollBottom();
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
    if (file && props.onFileUpload) props.onFileUpload(file, props.sessionId || "");
  };

  const handleSubmit = () => {
    if (message.trim()) {
      props.onChatSubmit(message, props.sessionId || "");
      setMessage("");
    }
  };
  const SendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24.709"
      viewBox="0 0 25 24.709"
    >
      <path
        id="Path_49"
        data-name="Path 49"
        d="M36.065,28.271a.576.576,0,0,0-.827-.795L24.9,36.268l-5.457-2.111a1.328,1.328,0,0,1-.155-2.409L41.947,19.057a1.117,1.117,0,0,1,1.642,1.089L41.6,40.862a1.371,1.371,0,0,1-1.876,1.145l-6.642-2.572-4.169,3.907a1.077,1.077,0,0,1-1.812-.795V39.479Z"
        transform="translate(-18.594 -18.924)"
        fill="#fff"
        style={{ fill: currentTheme?.btn_icon_color }}
      />
    </svg>
  );
  const UploadIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14.998"
      height="20"
      viewBox="0 0 14.998 20"
    >
      <path
        id="Path_57"
        data-name="Path 57"
        d="M33.308,13.091,28.9,8.681a1.519,1.519,0,0,0-1.06-.441H26.7a2.5,2.5,0,0,0-4.9,0H20.25a1.5,1.5,0,0,0-1.5,1.5v15a1.5,1.5,0,0,0,1.5,1.5h12a1.5,1.5,0,0,0,1.5-1.5V14.15A1.521,1.521,0,0,0,33.308,13.091Zm-1.27.15h-2.79a.5.5,0,0,1-.5-.5V9.95Zm-7.789-6a1.51,1.51,0,0,1,1.41,1H22.84A1.51,1.51,0,0,1,24.25,7.241Zm8.5,17.5a.51.51,0,0,1-.5.5h-12a.5.5,0,0,1-.5-.5v-15a.5.5,0,0,1,.5-.5h1.5v4.5a2.5,2.5,0,1,0,5,0v-2a1.5,1.5,0,0,0-3,0v2a.5.5,0,0,0,1,0v-2a.5.5,0,1,1,1,0v2a1.5,1.5,0,0,1-3,0v-4.5h5v3.5a1.5,1.5,0,0,0,1.5,1.5h3.5Z"
        transform="translate(-18.75 -6.238)"
        fill="#e31837"
        style={{ fill: currentTheme?.btn_bg_color }}
      />
    </svg>
  );
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
          {props.chats && props.chats.map((chat, index) => (
            <ChatCard
              key={index}
              type={chat.type}
              sender={chat.sender} // ai or user
              text={chat.text} // Chat message
              timestamp={chat.timestamp} // Message timestamp
              userProfileImage={props.userProfileImage} // Profile image URL (optional)
              userName={props.userName} // Name of the user (optional)
              aiName={props.aiName} // Name of the AI (optional)
              aiProfileImage={props.aiProfileImage} // Profile image URL of AI (optional)
              ratingEnabled={chat.ratingEnabled ?? true} // Enable/disable rating (default true)
              textFeedbackEnabled={chat.textFeedbackEnabled ?? true} // Enable/disable text feedback (default true)
              isProfileImageRequired={props.isProfileImageRequired ?? false} // Show profile image (default false)
              onStarClick={props.onStarClick} // Callback for star click
              feedback={chat.feedback || ""} // Existing feedback text (optional)
              rating={chat.rating || 0} // Existing rating (default 0)
              chatId={chat.chatId || ""} // Chat ID for reference
              sessionId={chat.sessionId || props.sessionId || ""} // Session ID for reference
              onTextFeedbackSubmit={props.onTextFeedbackSubmit} // Callback for text feedback submission
              actionCardTitle={chat.actionCardTitle} // Action card title (optional)
              actions={chat.actions} // Action card buttons
              actionCardSubtitle={chat.actionCardSubtitle} // Action card subtitle (optional)
              handleActionCardClick={props.handleActionCardClick} // Callback for action card button click
              pdfUploaded={chat.pdfUploaded} // PDF uploaded status
              pdfUrl={chat.pdfUrl} // PDF URL

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
              <UploadIcon />
            </label>
          </div>
          <button
            className={`chat-box-submit-btn ${message ? "" : "btn-disabled"}`}
            onClick={handleSubmit}
            disabled={!message}
            style={{
              backgroundColor: message
                ? currentTheme?.btn_bg_color
                : currentTheme?.cb_disabled_button_bg_color,
            }}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
