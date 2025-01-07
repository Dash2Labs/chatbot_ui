import React, { FC } from "react";
import "./switch.css";
import { useTheme } from "../../themeContext/themeProvider";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const SwitchToggle: FC<SwitchProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  const handleToggle = () => {
    if (onChange) {
      onChange(!checked);
    }
  };
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme] || themes.light;
  return (
    <div className="switch-container">
      {label && (
        <span
          className="switch-label"
          style={{
            color: currentTheme?.font_color,
          }}
        >
          {label}
        </span>
      )}
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
