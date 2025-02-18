import React, { ReactNode } from "react";
import "./floatingIcon.css";
interface FloatingIconProps {
    compactLogo?: string;
    children: ReactNode;
}
declare const FloatingIcon: React.FC<FloatingIconProps>;
export default FloatingIcon;
