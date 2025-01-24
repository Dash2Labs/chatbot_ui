import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FullChatbot from "./fullChatbot";
import logo from "../../assets/Dash2Logo.png";
import collapsedLogo from "../../assets/collapsedLogo.png";

const meta: Meta<typeof FullChatbot> = {
  title: "FullChatbot/Chatbot",
  component: FullChatbot,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof FullChatbot>;

export const Default: Story = {
  args: {
    history: [
      {
        title: "Chat with Alice",
        timeStamps: new Date().toLocaleString(),
        isActive: true,
        sessionId: "1234567890",
      },
      {
        title: "Project Discussion",
        timeStamps: "2023-11-15 10:30 AM",
        isActive: false,
        sessionId: "1234567890",
      },
    ],
    chats: [
      {
        type: "ai",
        text: "Hello! How can I assist you today?",
        timestamp: "10:00 AM",
        chatId: "1",
        sessionId: "session-123",
        ratingEnabled: true,
        textFeedbackEnabled: true,
      },
      {
        type: "user",
        text: "Can you tell me about the weather?",
        timestamp: "10:01 AM",
        chatId: "2",
        sessionId: "session-123",
      },
      {
        type: "ai",
        text: "It’s sunny and 75°F.",
        timestamp: "10:02 AM",
        chatId: "3",
        sessionId: "session-123",
        ratingEnabled: true,
      },
    ],
    sessionId: "session-123",
    userName: "User",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    fullLogo: logo,
    compactLogo: collapsedLogo,
    onChatSubmit: (message: string, sessionId?: string) =>
      alert(`Message submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onChatScroll: () => console.log("Scrolled through chat"),
    onChatScrollTop: () => console.log("Scrolled to top"),
    onChatScrollBottom: () => console.log("Scrolled to bottom"),
    onHistoryScroll: (event) =>
      console.log(`History Scroll: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("History scrolled to top"),
    onHistoryScrollBottom: () => alert("History scrolled to bottom"),
    onSearchChange: (term: string) => console.log(`Search term: ${term}`),
    onCardClick: (cardDetails) =>
      alert(`Card clicked:\n${JSON.stringify(cardDetails, null, 2)}`),
    onFileUpload: (file: File, sessionId?: string) =>
      alert(`File uploaded:\nFile: ${file.name}\nSession ID: ${sessionId}`),
    onCreateNewChat: () => alert("New chat created"),
    onStarClick: (star: number, chatId?: string, sessionId?: string) =>
      alert(
        `Star clicked:\nStars: ${star}\nChat ID: ${chatId}\nSession ID: ${sessionId}`
      ),
    onTextFeedbackSubmit: (
      feedback: string,
      chatId?: string,
      sessionId?: string
    ) =>
      alert(
        `Feedback submitted:\nFeedback: ${feedback}\nChat ID: ${chatId}\nSession ID: ${sessionId}`
      ),
  },
};

export const LongChatHistory: Story = {
  args: {
    history: [
      { title: "Chat 1", timeStamps: "2023-11-10 09:00 AM", isActive: false, sessionId: "1234567890", },
      { title: "Chat 2", timeStamps: "2023-11-11 11:00 AM", isActive: true, sessionId: "1234567890", },
    ],
    chats: Array.from({ length: 50 }, (_, i) => ({
      type: i % 2 === 0 ? "ai" : "user",
      text: `This is message #${i + 1}`,
      timestamp: `10:${String(i).padStart(2, "0")} AM`,
      chatId: `chat-${i + 1}`,
      sessionId: "session-456",
    })),
    sessionId: "session-456",
    userName: "User",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    fullLogo: "https://via.placeholder.com/150",
    compactLogo: "https://via.placeholder.com/50",
    onChatSubmit: (message: string, sessionId?: string) =>
      alert(`Message submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onChatScrollTop: () => console.log("Scrolled to top"),
    onChatScrollBottom: () => console.log("Scrolled to bottom"),
    onHistoryScroll: (event) =>
      console.log(`History Scroll: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("History scrolled to top"),
    onHistoryScrollBottom: () => alert("History scrolled to bottom"),
  },
};

export const FeedbackAndRatingEnabled: Story = {
  args: {
    history: [
      { title: "Customer Support", timeStamps: "2023-11-12 03:00 PM", isActive: true, sessionId: "1234567890", },
    ],
    chats: [
      {
        type: "ai",
        text: "How satisfied are you with this response?",
        timestamp: "10:05 AM",
        chatId: "1",
        sessionId: "session-789",
        ratingEnabled: true,
        textFeedbackEnabled: true,
      },
      {
        type: "user",
        text: "This is great, thank you!",
        timestamp: "10:06 AM",
        chatId: "2",
        sessionId: "session-789",
      },
    ],
    sessionId: "session-789",
    userName: "User",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    fullLogo: "https://via.placeholder.com/150",
    compactLogo: "https://via.placeholder.com/50",
    onChatSubmit: (message: string, sessionId?: string) =>
      alert(`Message submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onStarClick: (star: number, chatId?: string, sessionId?: string) =>
      alert(
        `Star clicked:\nStars: ${star}\nChat ID: ${chatId}\nSession ID: ${sessionId}`
      ),
    onTextFeedbackSubmit: (
      feedback: string,
      chatId?: string,
      sessionId?: string
    ) =>
      alert(
        `Feedback submitted:\nFeedback: ${feedback}\nChat ID: ${chatId}\nSession ID: ${sessionId}`
      ),
    onHistoryScroll: (event) =>
      console.log(`History Scroll: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("History scrolled to top"),
    onHistoryScrollBottom: () => alert("History scrolled to bottom"),
  },
};
