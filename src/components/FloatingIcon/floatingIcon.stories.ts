import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FloatingIcon from "./floatingIcon";


const meta: Meta<typeof FloatingIcon> = {
  title: "Components/FloatingIcon",
  component: FloatingIcon,
  parameters: {
    layout: "fullscreen", // Ensures proper positioning for the floating icon
  },
};

export default meta;

type Story = StoryObj<typeof FloatingIcon>;

export const Default: Story = {
  args: {
    compactLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG-BgPRkDU3PXBySotnBzQV7CJ1bP-eS7sg&s", // Pass the compact logo for the floating button
  },
};


