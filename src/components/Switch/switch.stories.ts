import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SwitchToggle from "./switch"; // Import your component and its props type

const meta: Meta = {
  title: "Others/SwitchToggle",
  component: SwitchToggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void; // Parent-controlled change handler
  label?: string; // Optional label
}

export default meta;

type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    checked: false,
    label: "Default Switch",
    onChange: (checked: boolean) =>
      console.log(`Switch is now ${checked ? "ON" : "OFF"}`),
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked Switch",
    onChange: (checked: boolean) =>
      console.log(`Switch is now ${checked ? "ON" : "OFF"}`),
  },
};

export const WithOnChange: Story = {
  args: {
    checked: false,
    label: "Switch with onChange",
    onChange: (checked: boolean) =>
      alert(`Switch is now ${checked ? "ON" : "OFF"}`),
  },
};

// // Template for Interactive Story
// export const Interactive: Story = {
//   render: (args) => {
//     const [checked, setChecked] = React.useState(args.checked || false);

//     const handleChange = (newChecked: boolean) => {
//       setChecked(newChecked); // Update local state
//       if (args.onChange) {
//         args.onChange(newChecked); // Call the parent's onChange handler
//       }
//     };

//     return (
//       <SwitchToggle
//         {...args}
//         checked={checked}
//         onChange={handleChange}
//       />
//     );
//   },
// };
