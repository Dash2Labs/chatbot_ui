import React from "react";
import "./switch.css";
interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}
declare const SwitchToggle: React.FC<SwitchProps>;
export default SwitchToggle;
