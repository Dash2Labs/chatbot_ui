import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Accessibility from "./accessibilityPage";

const meta: Meta<typeof Accessibility> = {
  title: "Accessibility/Settings",
  component: Accessibility,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Accessibility>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default Accessibility settings page. Users can select font sizes and contrast options for improved readability and accessibility.",
      },
    },
  },
};

export const WithPreselectedSettings: Story = {
  args: {
    initialFontSize: "medium",
    initialContrast: "bold",
  },
  parameters: {
    docs: {
      description: {
        story:
          "An example of the Accessibility page with preselected font size and contrast settings.",
      },
    },
  },
};
