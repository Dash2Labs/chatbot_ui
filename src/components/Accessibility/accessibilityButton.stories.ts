import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AccessibilityButton, { AccessibilityButtonProps } from "./accessibilityButton";

const meta: Meta<typeof AccessibilityButton> = {
  title: "Accessibility/AccessibilityButton",
  component: AccessibilityButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof AccessibilityButton>;

export const Default: Story = {
  args: {
    title: "Is this easy to read?",
    description: "If not, click on this box.",
    onAccessibilityClick: () => alert("Accessibility settings triggered!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default AccessibilityButton with a preset title, description, and click handler. This can be used as-is or customized further.",
      },
    },
  },
};

// export const CustomContent: Story = {
//   args: {
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="red"
//       >
//         <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="red" />
//       </svg>
//     ),
//     title: "Custom Title",
//     description: "Custom description goes here.",
//     onClick: () => console.log("Custom button clicked!"),
//   },
//   parameters: {
//     docs: {
//       description: {
//         story:
//           "This example demonstrates the customization of the `AccessibilityButton` with a custom icon, title, and description.",
//       },
//     },
//   },
// };

export const StyledButton: Story = {
  args: {
    title: "Styled Button",
    description: "This button has additional styling applied.",
    onAccessibilityClick: () => console.log("Styled button clicked!"),
    className: "custom-accessibility-btn",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example shows how to use the `className` prop to apply additional styles to the `AccessibilityButton`.",
      },
    },
  },
};
