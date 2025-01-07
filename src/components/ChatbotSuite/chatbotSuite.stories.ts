import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChatbotSuite from "./ChatbotSuite";

const meta: Meta<typeof ChatbotSuite> = {
  title: "FullChatbot/ChatbotSuite",
  component: ChatbotSuite,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ChatbotSuite>;

export const Default: Story = {
  args: {
    history: [
      {
        title: "Chat with Alice",
        timeStamps: new Date().toLocaleString(),
        isActive: true,
      },
      {
        title: "Project Discussion",
        timeStamps: "2023-11-15 10:30 AM",
        isActive: false,
      },
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
      },
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
      },
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
      },
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
      },
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
      },
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
      },
    ],
    chats: [
      {
        type: "ai",
        text: "Hello! How can I assist you today?",
        timestamp: "10:00 AM",
      },
      {
        type: "user",
        text: "Can you tell me about the weather?",
        timestamp: "10:01 AM",
      },
      { type: "ai", text: "Sure! It’s sunny and 75°F.", timestamp: "10:02 AM" },
    ],
    onChatSubmit: (message: string) => alert(`User submitted: ${message}`),
    onScroll: () => console.log("Scrolled through chat"),
    onScrollTop: () => console.log("Scrolled to top"),
    onScrollBottom: () => console.log("Scrolled to bottom"),
    onSearchChange: (term: string) => console.log(`Search term: ${term}`),
    onCardClick: (cardDetails) =>
      alert(`Card clicked: ${JSON.stringify(cardDetails)}`),
    onFileUpload: (file: File) => console.log(`File uploaded: ${file.name}`),
    onCreateNewChat: () => alert("New chat created"),
  },
};
