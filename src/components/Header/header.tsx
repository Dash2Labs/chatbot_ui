import React, { useEffect, useState } from "react";
import "./header.css";
import SwitchToggle from "../Switch/switch";
import { useTheme } from "../../themeContext/themeProvider";
import AccessibilityButton from "../Accessibility/accessibilityButton";
import { useTranslation } from "../../Locales/translations";

interface HeaderProps {
  userName?: string;
  handleToggle?: (checked: boolean) => void;
  isToggleChecked?: boolean;
  toggleLabel?: string;
  customStyles?: React.CSSProperties;
  profileStyles?: React.CSSProperties;
  isMobile?: boolean;
  isChatOpen?: boolean;
  accessibilityOpen?: boolean;
  setIsChatOpen?: (isOpen: boolean) => void;
  setAccessibilityOpen?: (isOpen: boolean) => void;
  compactLogo?: string;
  userProfileImage?: string;
  onSignoutClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  customStyles,
  profileStyles,
  isMobile = false,
  isChatOpen = false,
  setIsChatOpen,
  accessibilityOpen = false,
  setAccessibilityOpen,
  compactLogo,
  userProfileImage,
  onSignoutClick,
}) => {
  const {
    theme,
    setTheme,
    themes,
    fontSize,
    contrast,
    setIsSignupOpen,
    isUserLoggedIn,
    language,
    setLanguage,
  } = useTheme();
  const currentTheme = themes[theme] || themes.light;
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const { t } = useTranslation();

  const languages: { langauge: string; label: string }[] = [
    { langauge: "en", label: "English" },
    { langauge: "es", label: "Spanish" },
    { langauge: "zh", label: "Chinese" },
    { langauge: "nv", label: "Navajo" },
    { langauge: "vi", label: "Vietnamese" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target &&
        !(event.target as Element).closest(".profile-container")
      ) {
        setIsOpen(false);
      }
      if (
        event.target &&
        !(event.target as Element).closest(".laguange-wrapper")
      ) {
        setIsLanguageDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6.112"
      height="11"
      viewBox="0 0 5.112 10"
    >
      <g id="Group_1476" data-name="Group 1476" transform="translate(0)">
        <path
          id="Path_42"
          data-name="Path 42"
          d="M27,962.325a.555.555,0,0,1,.142-.333l4-4.444a.556.556,0,0,1,.826.743L28.3,962.363l3.667,4.073a.556.556,0,0,1-.826.743l-4-4.444A.556.556,0,0,1,27,962.325Z"
          transform="translate(-26.994 -957.363)"
          style={{ fill: currentTheme?.cc_primary_font_color }}
        />
      </g>
    </svg>
  );
  return (
    <div className="web-header" style={customStyles}>
      {isMobile && (
        <div className="mob-logo">
          <img className="logo" src={compactLogo} alt="Compact Logo" />
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="light-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.001"
            height="15.001"
            viewBox="0 0 15.001 15.001"
          >
            <path
              id="Union_25"
              data-name="Union 25"
              d="M6.342,13.841v-.684a1.159,1.159,0,0,1,2.318,0v.684a1.159,1.159,0,0,1-2.318,0Zm4.825-1.035h0l-.487-.487a1.159,1.159,0,1,1,1.639-1.639l.487.487a1.159,1.159,0,0,1-1.64,1.639Zm-9.311-.819a1.188,1.188,0,0,1,.339-.832l.475-.475A1.159,1.159,0,1,1,4.311,12.32l-.43.43a1.156,1.156,0,0,1-.865.39h0A1.154,1.154,0,0,1,1.857,11.988ZM4.156,7.5a3.339,3.339,0,1,1,3.339,3.34A3.342,3.342,0,0,1,4.156,7.5Zm2.318,0a1.021,1.021,0,1,0,1.02-1.02A1.022,1.022,0,0,0,6.474,7.5Zm6.683,1.159a1.159,1.159,0,0,1,0-2.318h.684a1.159,1.159,0,0,1,0,2.318Zm-12,0a1.159,1.159,0,0,1,0-2.318h.672a1.159,1.159,0,0,1,0,2.318Zm9.522-4.338a1.157,1.157,0,0,1,0-1.639l.487-.487a1.159,1.159,0,1,1,1.639,1.639l-.487.487h0a1.161,1.161,0,0,1-1.64,0Zm-7.19.339h0Zm-.819-.339L2.2,3.845A1.159,1.159,0,0,1,3.836,2.207l.475.475A1.159,1.159,0,0,1,2.672,4.321ZM6.342,1.843V1.159a1.159,1.159,0,0,1,2.318,0v.684a1.159,1.159,0,0,1-2.318,0Z"
              fill="#e31837"
              style={{ fill: theme == "light" ? "#E31837" : "#ACACAC" }}
            />
          </svg>
        </div>
        <SwitchToggle
          checked={theme === "dark"}
          label={t("enable_dark_theme")}
          onChange={(checked) => {
            setTheme(checked ? "dark" : "light");
          }}
        />
        <div style={{ marginRight: "20px" }} className="dark-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.301"
            height="15.001"
            viewBox="0 0 15.301 15.001"
          >
            <path
              id="Path_6214"
              data-name="Path 6214"
              d="M16.294,10.524A7.7,7.7,0,1,1,6.207,1.981a.358.358,0,0,1,.409.543,6,6,0,0,0,9.09,7.654.358.358,0,0,1,.589.347Z"
              transform="translate(-1.003 -1.962)"
              fill="#acacac"
              style={{ fill: theme == "light" ? "#ACACAC" : "#E31837" }}
            />
          </svg>
        </div>
        <AccessibilityButton
          isCollapsed={true}
          onAccessibilityClick={() => {
            setAccessibilityOpen && setAccessibilityOpen(!accessibilityOpen);
          }}
          className="collapsed-accessibility"
        />
        {/* <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          className={`language-dropdown ${fontSize} ${contrast}`}
          style={{
            backgroundColor: currentTheme?.cb_input_bg_color,
            color: currentTheme?.cc_primary_font_color,
            borderColor: currentTheme?.cb_input_border_color,
          }}
        >
          {languages.map((lang) => (
            <option key={lang.langauge} value={lang.langauge}>
              {lang.label}
            </option>
          ))}
        </select> */}
        <div className="laguange-wrapper">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className={`language-dropdown  ${fontSize} ${contrast}`}
            style={{
              color: currentTheme?.cc_primary_font_color,
            }}
          >
            <div style={{ textTransform: "uppercase" }}>
              {languages
                .find((lang) => lang.langauge === language)
                ?.label.toUpperCase()
                .slice(0, 3) || "Select language"}{" "}
              <span
                className={`lang-arrow ${
                  isLanguageDropdownOpen ? "lang-arrow-up" : ""
                }`}
              >
                <ArrowIcon />
              </span>
            </div>
          </button>
          {isLanguageDropdownOpen && (
            <div className="language-list">
              {languages.map((lang) => (
                <div
                  key={lang.langauge}
                  onClick={() => {
                    setLanguage(lang.langauge);
                    setIsLanguageDropdownOpen(false);
                  }}
                  className={`${fontSize} ${contrast}`}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="profile-wrapper" style={profileStyles}>
          <p
            className={`user-name ${fontSize} ${contrast}`}
            style={{
              color: currentTheme?.font_color,
            }}
          >
            {t("hello")} {userName}
          </p>

          <div className="profile-container">
            <div
              className="profile"
              style={{
                backgroundColor: currentTheme?.profile_bg_color,
                color: currentTheme?.profile_font_color,
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {userProfileImage ? (
                <img
                  src={userProfileImage}
                  width="40"
                  height="40"
                  className="profile-img"
                  alt="profile"
                />
              ) : (
                <div className="profile-initials">
                  {userName?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                className="dropdown-menu"
                style={{
                  backgroundColor: currentTheme?.main_container_bg,
                  color: currentTheme?.cc_primary_font_color,
                }}
              >
                <ul className={`${fontSize} ${contrast}`}>
                  <li onClick={() => setIsSignupOpen(true)}>{t("sign_in")}</li>
                  {isUserLoggedIn && (
                    <li onClick={() => onSignoutClick && onSignoutClick()}>
                      Signout
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        {isMobile && isChatOpen && !accessibilityOpen && (
          <div
            style={{ marginLeft: "20px" }}
            onClick={() => setIsChatOpen && setIsChatOpen(!isChatOpen)}
            className="cancel-icon"
          >
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
                fill="#242424"
                style={{ fill: currentTheme?.font_color }}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
