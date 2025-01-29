import React, { useState } from "react";
import { ChatCardProps } from "./chatCard.types";
import "./chatCard.css";
import { useTheme } from "../../themeContext/themeProvider";
import CardWithActions from "../ActionableCard/cardWithActions";

const ChatCard: React.FC<ChatCardProps> = ({
  type = "text",
  sender ,
  text,
  timestamp,
  ratingEnabled = true,
  textFeedbackEnabled = true,
  isProfileImageRequired = false,
  onStarClick,
  feedback = "",
  rating = 0,
  chatId = "",
  sessionId = "",
  onTextFeedbackSubmit,
  userName,
  userProfileImage,
  aiName,
  aiProfileImage,
  handleActionCardClick,
  actionCardTitle,
  actionCardSubtitle,
  actions,

}) => {
  const [selectedStars, setSelectedStars] = useState<number>(rating);
  const [textFeedback, setTextFeedback] = useState<string>(feedback);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getInitials = () => {
    if (sender === "ai") {
      return `${aiName?.[0] ?? ""}`.toUpperCase();
    } else {
      return `${userName?.[0] ?? ""}`.toUpperCase();
    }
  };

  const getProfileImage = () => {
    if (sender === "ai") {
      return aiProfileImage;
    } else {
      return userProfileImage;
    }
  };

  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;
  const CancelIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15.001"
      viewBox="0 0 15 15.001"
    >
      <path
        id="Union_19"
        data-name="Union 19"
        d="M9290.113,15a.872.872,0,0,1-.627-.26L9283.5,8.754l-5.982,5.985a.9.9,0,0,1-.627.26.887.887,0,0,1-.629-1.514l5.982-5.985-5.982-5.984a.888.888,0,1,1,1.256-1.255l5.982,5.985L9289.486.26a.886.886,0,0,1,1.252,1.254L9284.752,7.5l5.986,5.987a.887.887,0,0,1-.625,1.514Z"
        transform="translate(-9275.998)"
        style={{ fill: currentTheme?.font_color }}
      />
    </svg>
  );
  return (
    <div
      className={`chat-card-container ${
        sender === "ai" ? "align-left" : "align-right"
      } ${fontSize} ${contrast}`}
    >
      {isProfileImageRequired && (
        <div className="profile-wrapper">
          {getProfileImage() ? (
            <img
              src={getProfileImage()}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <div className={`profile-initials ${fontSize} ${contrast}`}>
              {getInitials()}
            </div>
          )}
        </div>
      )}
      {type === "text" ? (
        <div>
          <ol className="chat">
            <li
              className={`${sender === "ai" ? "other" : "self"}`}
              style={
                {
                  "--dynamic-border-color": currentTheme?.cc_bg_color,
                } as React.CSSProperties
              }
            >
              <div
                className={`msg ${fontSize} ${contrast}`}
                style={{
                  backgroundColor: currentTheme?.cc_msg_bg,
                  color: currentTheme?.cc_primary_font_color,
                }}
              >
                <p className={`chat-text ${fontSize} ${contrast}`}>{text}</p>
                <p className={`chat-timestamp ${fontSize} ${contrast}`}>
                  {timestamp}
                </p>
              </div>
            </li>
          </ol>
          <div
            className="feedback-section"
            style={{
              color: currentTheme?.cc_primary_font_color,
            }}
          >
            {ratingEnabled && sender === "ai" && (
              <>
                <label className={`${fontSize} ${contrast}`}>
                  Rate this response
                </label>
                <div className="feedback-star-container">
                  <div className="feedback-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${
                          selectedStars && selectedStars >= star
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedStars(star);
                          onStarClick && onStarClick(star, chatId, sessionId);
                        }}
                      >
                        {selectedStars && selectedStars >= star ? (
                          // SVG for selected star
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.445"
                            height="10"
                            viewBox="0 0 10.445 10"
                          >
                            <path
                              id="Path_51"
                              data-name="Path 51"
                              d="M14.244,10.438a.746.746,0,0,0-.411-1.229l-2.4-.522a.53.53,0,0,1-.343-.254L9.858,6.314a0,0,0,0,0,0,0,.758.758,0,0,0-1.3,0L7.329,8.431a.522.522,0,0,1-.342.254l-2.4.524a.745.745,0,0,0-.407,1.231l1.636,1.836a.514.514,0,0,1,.133.4L5.707,15.11a.749.749,0,0,0,.739.839.774.774,0,0,0,.305-.065l2.254-.993a.461.461,0,0,1,.417,0l2.252.992a.746.746,0,0,0,1.043-.771l-.241-2.437a.512.512,0,0,1,.133-.4Z"
                              transform="translate(-3.987 -5.949)"
                              style={{
                                fill: currentTheme?.btn_bg_color,
                              }}
                            />
                          </svg>
                        ) : (
                          // SVG for unselected star
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.445"
                            height="11"
                            viewBox="0 0 11.445 11"
                          >
                            <path
                              id="Path_54_-_Outline"
                              data-name="Path 54 - Outline"
                              d="M9.21,5.449a1.246,1.246,0,0,1,.886.363h.261v.366l1.166,2a.031.031,0,0,0,.022.018l2.4.523a1.265,1.265,0,0,1,.923.822l.006.017a1.266,1.266,0,0,1-.25,1.2l-.008.009-1.635,1.838-.008.01s0,.006,0,.016l.24,2.426a1.233,1.233,0,0,1-.486,1.134l-.018.014a1.24,1.24,0,0,1-1.237.133l-2.261-1-.005,0-2.254.993a1.275,1.275,0,0,1-.507.107,1.245,1.245,0,0,1-.728-.238L5.7,16.2a1.238,1.238,0,0,1-.491-1.14l.24-2.425a.076.076,0,0,0,0-.016l-.006-.007L3.8,10.764a1.264,1.264,0,0,1-.254-1.2l.006-.017a1.267,1.267,0,0,1,.923-.825l.007,0,2.4-.524s.007,0,.016-.016L8.134,6.055A1.247,1.247,0,0,1,9.21,5.449ZM9.445,6.6l-.017-.029a.239.239,0,0,0-.218-.12.242.242,0,0,0-.218.12L7.761,8.683a1.021,1.021,0,0,1-.664.49L4.7,9.7a.262.262,0,0,0-.2.175.267.267,0,0,0,.061.242l1.632,1.831a1.015,1.015,0,0,1,.259.761v.016L6.2,15.165a.248.248,0,0,0,.35.26l2.247-.99a.964.964,0,0,1,.831,0l2.243.988a.241.241,0,0,0,.244-.024.238.238,0,0,0,.1-.234v-.006l-.242-2.449a1.014,1.014,0,0,1,.26-.771l1.627-1.83a.268.268,0,0,0,.058-.244.264.264,0,0,0-.2-.172l-2.4-.523a1.031,1.031,0,0,1-.661-.488Z"
                              transform="translate(-3.487 -5.449)"
                              style={{
                                fill: currentTheme?.btn_bg_color,
                              }}
                            />
                          </svg>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {textFeedbackEnabled && sender === "ai" && (
              <button
                className="feedback-icon"
                onClick={() => setIsModalOpen(true)}
              >
                {/* 📝 */}
                {/* <img src={feedbackIcon} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.455"
                  height="16.707"
                  viewBox="0 0 23.455 16.707"
                >
                  <path
                    id="Path_6226_-_Outline"
                    data-name="Path 6226 - Outline"
                    d="M5.609,17.769h16.23a3.617,3.617,0,0,1,3.616,3.609v4.877a3.619,3.619,0,0,1-3.616,3.616H10.49L5.885,34.476V29.871H5.609A3.617,3.617,0,0,1,2,26.255V21.378A3.613,3.613,0,0,1,5.609,17.769Zm16.23,11.1a2.619,2.619,0,0,0,2.616-2.616V21.378a2.615,2.615,0,0,0-2.616-2.609H5.609A2.612,2.612,0,0,0,3,21.378v4.877a2.615,2.615,0,0,0,2.609,2.616H6.885v3.191l3.191-3.191Z"
                    transform="translate(-2 -17.769)"
                    fill="#e31837"
                    style={{ fill: currentTheme?.btn_bg_color }}
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      ) : (
        <CardWithActions
        actionCardTitle={actionCardTitle}
        actionCardSubtitle={actionCardSubtitle}
          actions={actions}
          sessionId={sessionId}
          handleActionCardClick={handleActionCardClick}
        />
      )}

      {/* Feedback Modal */}
      {isModalOpen && (
        <div
          className="modal-wrapper"
          style={{ backgroundColor: currentTheme?.modal_main_bg }}
        >
          <div
            className="feedback-modal"
            style={{
              borderColor: currentTheme?.cb_input_border_color,
              backgroundColor: currentTheme?.main_container_bg,
              color: currentTheme?.font_color,
            }}
          >
            <div className="modal-content">
              <div className="title-cancel">
                <h3 className={`${fontSize} ${contrast}`}>
                  Comment on the response
                </h3>
                <button
                  className="modal-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <CancelIcon />
                </button>
              </div>
              <textarea
                className={`modal-textarea ${fontSize} ${contrast}`}
                placeholder="Write your feedback..."
                value={textFeedback}
                onChange={(e) => setTextFeedback(e.target.value)}
                style={{
                  backgroundColor: currentTheme?.main_container_bg,
                  borderColor: currentTheme?.cb_input_border_color,
                }}
              />
              <div className="btn-wrapper">
                <button
                  className={`modal-submit ${fontSize} ${contrast}`}
                  onClick={() => {
                    setIsModalOpen(false);
                    onTextFeedbackSubmit &&
                      onTextFeedbackSubmit(textFeedback, chatId, sessionId);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatCard;
