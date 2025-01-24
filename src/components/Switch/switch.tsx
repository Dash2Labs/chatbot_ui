import React, { useEffect } from "react";
import "./switch.css";
import { useTheme } from "../../themeContext/themeProvider";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const SwitchToggle: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  const handleToggle = () => {
    if (onChange) {
      onChange(!checked);
    }
  };
  const { theme, themes, fontSize, contrast } = useTheme();
  const currentTheme = themes[theme] || themes.light;

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .slider:before {
        background-color: ${currentTheme?.btn_bg_color};
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style); // Cleanup on unmount
    };
  }, [currentTheme]);

  return (
    <div className="switch-container">
      {label && (
        <span
          className={`switch-label ${fontSize} ${contrast}`}
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
