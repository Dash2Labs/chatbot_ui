import React from "react";
import "./header.css";
import SwitchToggle from "../Switch/switch";
import { useTheme } from "../../themeContext/themeProvider";

interface HeaderProps {
  userName: string; // Display the username dynamically
  handleToggle?: (checked: boolean) => void; // Callback for theme toggle
  isToggleChecked?: boolean; // Controlled state for dark mode
  toggleLabel?: string; // Custom label for the toggle switch
  customStyles?: React.CSSProperties; // Optional custom styles for the header wrapper
  profileStyles?: React.CSSProperties; // Optional custom styles for the profile section
}

const Header: React.FC<HeaderProps> = ({
  userName,
  toggleLabel = "Dark mode",
  customStyles,
  profileStyles,
}) => {
  const { theme, setTheme, themes } = useTheme(); 
  const currentTheme = themes[theme] || themes.light;

  return (
    <div
      className="headers"
      style={customStyles}
    >
      <SwitchToggle
        checked={theme === "dark"}
        label={toggleLabel}
        onChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
      />
      <div className="profile-wrapper" style={profileStyles}>
        <p
          className="user-name"
          style={{
            color: currentTheme?.font_color,
          }}
        >
          Hello {userName}
        </p>
        <div
          className="profile"
          style={{
            backgroundColor: currentTheme?.profile_bg_color,
            color: currentTheme?.profile_font_color,
          }}
        >
          {userName.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Header;
