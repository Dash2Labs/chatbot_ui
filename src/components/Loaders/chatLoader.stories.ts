import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChatLoader from "./chatLoader";

const meta: Meta<typeof ChatLoader> = {
  title: "Components/ChatLoader",
  component: ChatLoader,
  parameters: {
    layout: "centered", // Ensures the loader appears centered in the Storybook UI
  },
};

export default meta;

type Story = StoryObj<typeof ChatLoader>;

export const Default: Story = {};
