import React, { useState, useRef, useEffect, ReactNode } from "react";
import "./floatingIcon.css";

interface FloatingIconProps {
  compactLogo?: string;
  children: ReactNode; // Accepts any React component or element
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ compactLogo, children }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
      setIsContentVisible(false);
    }
  };

  useEffect(() => {
    if (isContentVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContentVisible]);

  return (
    <>
      <div
        className="floating-btn-wrapper"
        onClick={() => setIsContentVisible(!isContentVisible)}
      >
        <img
          src={
            compactLogo ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG-BgPRkDU3PXBySotnBzQV7CJ1bP-eS7sg&s"
          }
          alt="logo"
        />
      </div>
      {isContentVisible && (
        <div className="mobilebot-container" ref={contentRef}>
          {children}
        </div>
      )}
    </>
  );
};

export default FloatingIcon;
