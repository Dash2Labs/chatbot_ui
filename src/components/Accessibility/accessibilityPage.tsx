import React, { useState } from "react";
import "./accessibilityPage.css";
import accessibilityIcon from "../../assets/selectedIcon.svg";
import { useTheme } from "../../themeContext/themeProvider";

const Accessibility: React.FC = () => {
  const [selectedFontSize, setSelectedFontSize] = useState("14px");
  const [selectedContrast, setSelectedContrast] = useState("semi-bold");

  const fontSizes = [
    { size: "14px", label: "font-container-14" },
    { size: "16px", label: "font-container-16" },
    { size: "18px", label: "font-container-18" },
    { size: "20px", label: "font-container-20" },
  ];

  const contrasts = [
    { contrast: "semi-bold", label: "contrast-semibold" },
    { contrast: "bold", label: "contrast-bold" },
    { contrast: "extra-bold", label: "contrast-extrabold" },
  ];

  const handleFontSizeSelect = (size: string) => {
    setSelectedFontSize(size);
  };

  const handleContrastSelect = (contrast: string) => {
    setSelectedContrast(contrast);
  };
  const { theme, themes } = useTheme();

  const currentTheme = themes[theme] || themes.light;
  return (
    <>
      <p
        className="page-title"
        style={{
          color: currentTheme?.primary_font_color,
        }}
      >
        Accessibility Settings
      </p>
      <div
        className="accessibility-container"
        style={{
          backgroundColor: currentTheme?.cb_bg_color,
          color: currentTheme?.primary_font_color,
        }}
      >
        {/* Font Size Section */}
        {fontSizes.map((font) => (
          <div
            key={font.size}
            className={`font-container ${font.label} ${
              selectedFontSize === font.size ? "selected-setting" : ""
            }`}
            onClick={() => handleFontSizeSelect(font.size)}
            style={{ borderColor: currentTheme?.cb_input_border_color }}
          >
            <p>I can read this font size comfortably.</p>
            {selectedFontSize === font.size && (
              <div className="selected">
                <img src={accessibilityIcon} alt="selected" />
              </div>
            )}
          </div>
        ))}

        {/* Contrast Section */}
        <div className="contrast-wrapper">
          {contrasts.map((contrast) => (
            <div
              key={contrast.contrast}
              className={`contrast-container ${contrast.label} ${
                selectedContrast === contrast.contrast ? "selected-setting" : ""
              }`}
              onClick={() => handleContrastSelect(contrast.contrast)}
              style={{ borderColor: currentTheme?.cb_input_border_color }}
            >
              <div className="selected-wrapper">
                {selectedContrast === contrast.contrast && (
                  <div className="selected">
                    <img src={accessibilityIcon} alt="selected" />
                  </div>
                )}
              </div>
              <p>This contrast is comfortable.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accessibility;
