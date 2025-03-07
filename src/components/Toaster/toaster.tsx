import React from "react";
import "./toaster.css";
import { useTheme } from "../../themeContext/themeProvider";

type ToasterVariant = "success" | "error";

 interface ToasterConfig {
  title?: string;
  variant?: ToasterVariant;
  isToasterOpen?: boolean;
  timing?: number;
}

export interface ToasterProps {
  toasterConfig?: ToasterConfig;
}

const Toaster: React.FC<ToasterProps> = ({ toasterConfig }) => {
  const { title, variant } = toasterConfig || {};
  const { fontSize, contrast } = useTheme();
  
  return (
    <div className={`custom-toaster ${variant}`}>
      <div className="toaster-content">
        <div className="toaster-text">
          {title && (
            <p
              className={`toaster-title ${fontSize} ${contrast}`}
              style={{ color: "#fff" }}
            >
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toaster;
