import React from "react";
import "./accessibilityPage.css";
import { useTheme } from "../../themeContext/themeProvider";
import { FontSize, Contrast } from "../../themeContext/accessibilityTypes";
import { useTranslation } from "../../Locales/translations";

const Accessibility: React.FC = () => {
  const {
    theme,
    themes,
    setFontSize,
    fontSize,
    contrast,
    setContrast
  } = useTheme();
  const { t } = useTranslation();

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
  const SelectedIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="11"
      viewBox="0 0 15 11"
    >
      <path
        id="Path_6229"
        data-name="Path 6229"
        d="M13.614,21.306h0a1.523,1.523,0,0,1-1.06-.426L8.928,17.359a1.415,1.415,0,0,1,0-2.049,1.533,1.533,0,0,1,2.118,0l2.567,2.492,7.317-7.075a1.535,1.535,0,0,1,2.119,0,1.417,1.417,0,0,1,0,2.049l-8.378,8.1A1.531,1.531,0,0,1,13.614,21.306Z"
        transform="translate(-8.491 -10.307)"
        fill="#fff"
        style={{ fill: currentTheme?.btn_icon_color }}
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
        {t("accessibilitySettings")}
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
            <p>{t("comfortableFontSize")}</p>
            {fontSize === font?.name && (
              <div className="selected">
                <SelectedIcon />
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
                    <SelectedIcon />
                  </div>
                )}
              </div>
              <p>{t("comfortableContrast")}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accessibility;
