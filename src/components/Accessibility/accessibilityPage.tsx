import React from "react";
import "./accessibilityPage.css";
import accessibilityIcon from "../../assets/selectedIcon.svg";
import { useTheme } from "../../themeContext/themeProvider";
import { FontSize, Contrast } from "../../themeContext/accessibilityTypes";

const Accessibility: React.FC = () => {
  const { theme, themes, setFontSize, fontSize, contrast, setContrast } =
    useTheme();

  const fontSizes: { size: string; label: string; name: FontSize }[] = [
    { size: "14px", label: "font-container-14", name: "small" },
    { size: "16px", label: "font-container-16", name: "medium" },
    { size: "18px", label: "font-container-18", name: "large" },
    { size: "20px", label: "font-container-20", name: "extra-large" },
  ];

  const contrasts: { contrast: Contrast; label: String }[] = [
    { contrast: "semi-bold", label: "contrast-semibold" },
    { contrast: "bold", label: "contrast-bold" },
    { contrast: "extra-bold", label: "contrast-extrabold" },
  ];

  const handleFontSizeSelect = (name: FontSize) => {
    setFontSize(name);
  };

  const handleContrastSelect = (contrast: Contrast) => {
    setContrast(contrast);
  };

  const currentTheme = themes[theme] || themes.light;
  return (
    <>
      <p
        className={`page-title ${fontSize} ${contrast}`}
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
              fontSize === font?.name ? "selected-setting" : ""
            }`}
            onClick={() => handleFontSizeSelect(font?.name)}
            style={{ borderColor: currentTheme?.cb_input_border_color }}
          >
            <p>I can read this font size comfortably.</p>
            {fontSize === font?.name && (
              <div className="selected">
                <img src={accessibilityIcon} alt="selected" />
              </div>
            )}
          </div>
        ))}

        {/* Contrast Section */}
        <div className="contrast-wrapper">
          {contrasts.map((item) => (
            <div
              key={item.contrast}
              className={`contrast-container ${item.label} ${
                contrast === item.contrast ? "selected-setting" : ""
              }`}
              onClick={() => handleContrastSelect(item.contrast)}
              style={{ borderColor: currentTheme?.cb_input_border_color }}
            >
              <div className="selected-wrapper">
                {contrast === item.contrast && (
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
