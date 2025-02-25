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
        type: "text",
        sender:"ai",
        text: "Hello! How can I assist you today?",
        timestamp: "10:00 AM",
        chatId: "1",
        sessionId: "session-123",
        ratingEnabled: true,
        textFeedbackEnabled: true,
      },
      {
        type: "text",
        sender:"user",
        text: "Can you tell me about the weather?",
        timestamp: "10:01 AM",
        chatId: "2",
        sessionId: "session-123",
      },
      {
        type: "text",
        sender:"ai",
        text: "It’s sunny and 75°F.",
        timestamp: "10:02 AM",
        chatId: "3",
        sessionId: "session-123",
        ratingEnabled: true,
      },
      {
        type: "pdf",
        sender:"user",
        text: "",
        timestamp: "10:30 PM",
        pdfUrl: "https://www.example.com/sample.pdf",
        pdfUploaded: true,
      },
      {
        type: "actionCard",
        sender:"ai",
        text: "",
        timestamp: "",
        actionCardTitle: "Here are some options:",
        actionCardSubtitle: "Select an option to proceed.",
        actions: [{label: "Option 1"}, {label: "Option 2"}, {label: "Option 3"}],
      }
    ],
    sessionId: "session-123",
    userName: "User",
    isResponseLoading:true,
    userProfileImage: "data:image/jpeg;base64,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",
    aiName: "AI",
    aiProfileImage: "https://cdn.pixabay.com/photo/2013/07/13/13/41/robot-161367_1280.png",
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
      handleActionCardClick: (label: string, sessionId?: string) => {
        alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
      },
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
      type: "text",
      sender: i % 2 === 0 ? "ai" : "user",
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
        type: "text",
        sender:"ai",
        text: "How satisfied are you with this response?",
        timestamp: "10:05 AM",
        chatId: "1",
        sessionId: "session-789",
        ratingEnabled: true,
        textFeedbackEnabled: true,
      },
      {
        type: "text",
        sender:"user",
        text: "This is great, thank you!",
        timestamp: "10:06 AM",
        chatId: "2",
        sessionId: "session-789",
      },
      {
        type: "actionCard",
        sender:"ai",
        text: "",
        timestamp: "",
        actionCardTitle: "Here are some options:",
        actionCardSubtitle: "Select an option to proceed.",
        actions: [{label: "Option 1"}, {label: "Option 2"}, {label: "Option 3"}],
      }
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
    handleActionCardClick: (label: string, sessionId?: string) => {
      alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
    },
  },
};
