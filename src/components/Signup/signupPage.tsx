import React, { useState } from "react";
import "./signupPage.css";
import { useTheme } from "../../themeContext/themeProvider";
import { AuthProps } from "../FullChatbot/chatbotProps";
import { useTranslation } from "../../Locales/translations";

const SignupPage: React.FC<AuthProps> = ({
  onLogin,
  onGuestLogin,
  onSignup,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { t } = useTranslation();

  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;

  const handleAuthAction = () => {
    if (isSignup) {
      onSignup && onSignup(username, password);
    } else {
      onLogin && onLogin(username, password);
    }
  };

  return (
    <div
      className="signup-page"
      style={{
        background: currentTheme?.main_container_bg,
        color: currentTheme?.font_color,
      }}
    >
      <div className="signup-card">
        <h2 className={`signup-title ${fontSize} ${contrast}`}>
          {isSignup ? `${t("sign_up")}` : `${t("sign_in")}`}
        </h2>

        <div className="input-group">
          <label
            htmlFor="username"
            className={`input-label ${fontSize} ${contrast}`}
          >
            {t("username")}
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t("enter_username")}
            className={`chat-box-input ${fontSize} ${contrast}`}
            style={{
              backgroundColor: currentTheme?.cb_input_bg_color,
              borderColor: currentTheme?.cb_input_border_color,
              color: currentTheme?.cc_primary_font_color,
            }}
          />
        </div>

        <div className="input-group">
          <label
            htmlFor="password"
            className={`input-label ${fontSize} ${contrast}`}
          >
            {t("password")}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`chat-box-input ${fontSize} ${contrast}`}
            style={{
              backgroundColor: currentTheme?.cb_input_bg_color,
              borderColor: currentTheme?.cb_input_border_color,
              color: currentTheme?.cc_primary_font_color,
            }}
            placeholder={t("enter_password")}
          />
        </div>

        <div
          className={`toggle-link ${fontSize} ${contrast}`}
          style={{
            color: currentTheme?.cc_primary_font_color,
          }}
        >
          {isSignup ? (
            <span>
              {t("already_a_user")}{" "}
              <a onClick={() => setIsSignup(false)}>{t("sign_in")}</a>
            </span>
          ) : (
            <span>
              {t("not_registered_user")}{" "}
              <a onClick={() => setIsSignup(true)}>{t("sign_up")}</a>
            </span>
          )}
        </div>

        <div className="button-group">
          <button
            onClick={handleAuthAction}
            className={`login-button ${fontSize} ${contrast}`}
            style={{
              background: currentTheme?.btn_bg_color,
              color: "#fff",
              border: "none",
            }}
          >
            {isSignup ? `${t("sign_up")}` : `${t("sign_in")}`}
          </button>

          {!isSignup && (
            <button
              onClick={onGuestLogin}
              className={`guest-button ${fontSize} ${contrast}`}
              style={{
                backgroundColor: currentTheme?.cb_input_bg_color,
                border: `1px solid ${currentTheme?.cb_input_border_color}`,
                color: currentTheme?.cc_primary_font_color,
              }}
            >
              {t("continue_as_guest")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
