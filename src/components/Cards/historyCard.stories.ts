
import type { Meta, StoryObj } from "@storybook/react";
import HistoryCard from "./historyCard";

const meta: Meta<typeof HistoryCard> = {
  title: "History/HistoryCard",
  component: HistoryCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof HistoryCard>;

export const Default: Story = {
  args: {
    title: "Sample Chat",
    timeStamps: "2024-11-18 10:00 AM",
    isActive: false,
    isSelected: false,
  },
};

export const ActiveChat: Story = {
  args: {
    title: "Active Chat",
    timeStamps: "2024-11-18 10:30 AM",
    isActive: true,
    isSelected: false,
  },
};

export const SelectedChat: Story = {
  args: {
    title: "Selected Chat",
    timeStamps: "2024-11-18 11:00 AM",
    isActive: false,
    isSelected: true,
  },
};

export const ActiveAndSelectedChat: Story = {
  args: {
    title: "Active & Selected Chat",
    timeStamps: "2024-11-18 11:30 AM",
    isActive: true,
    isSelected: true,
  },
};

export const WithOnClick: Story = {
  args: {
    title: "Clickable Chat",
    timeStamps: "2024-11-18 12:00 PM",
    isActive: false,
    isSelected: false,
    onClick: () => alert("HistoryCard clicked!"), // Example click handler
  },
};
