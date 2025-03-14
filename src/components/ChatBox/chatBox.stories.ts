import { Meta, StoryObj } from "@storybook/react";
import ChatBox from "./chatBox";

const meta: Meta<typeof ChatBox> = {
  title: "Chat/ChatBox",
  component: ChatBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ChatBox>;

export const DefaultChatBox: Story = {
  args: {
    sessionId: "session-123",
    userName: "John Doe",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    chats: [
      {
        type: "text",
        sender:"ai",
        text: "Hello! How can I assist you today?",
        timestamp: "10:00 AM",
        chatId: "1",
        sessionId: "session-123",
      },
      {
        type: "text",
        sender:"user",
        text: "Can you tell me about the weather?",
        timestamp: "10:01 AM",
      },
      {
        type: "text",
        sender:"ai",
        text: "Sure! It’s sunny and 75°F.",
        timestamp: "10:02 AM",
        chatId: "2",
        sessionId: "session-123",
      },
      {
        type: "actionCard",
        sender:"ai",
        text: "",
        timestamp: "",
        actionCardTitle: "Here are some options:",
        actionCardSubtitle: "Select an option to proceed.",
        actions: [{label: "Option 1"}, {label: "Option 2"}, {label: "Option 3"}],
      },
      {
        type: "pdf",
        sender:"user",
        text: "",
        timestamp: "10:30 PM",
        pdfUrl: "https://www.example.com/sample.pdf",
        pdfUploaded: true,
      }
    ],
    onChatSubmit: (message, sessionId) =>
      alert(`Message Submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onChatScroll: (event) => console.log("Scrolled:", event.currentTarget.scrollTop),
    onChatScrollTop: () => console.log("Reached the top"),
    onChatScrollBottom: () => console.log("Reached the bottom"),
    handleActionCardClick: (label: string, sessionId?: string) => {
      alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
    },
  },
};

export const WithFileUpload: Story = {
  args: {
    sessionId: "session-456",
    userName: "Jane Doe",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    chats: [
      {
        type: "text",
        sender:"ai",
        text: "Please upload a file for further assistance.",
        timestamp: "10:00 AM",
        chatId: "3",
        sessionId: "session-456",
      },
      { type: "text",sender:"user" , text: "Sure, uploading now.", timestamp: "10:01 AM" },
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
    onChatSubmit: (message, sessionId) =>
      alert(`Message Submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onFileUpload: (file, sessionId) =>
      alert(`File Uploaded:\nFile: ${file.name}\nSession ID: ${sessionId}`),
    onChatScroll: (event) => console.log("Scrolled:", event.currentTarget.scrollTop),
    onChatScrollTop: () => console.log("Reached the top"),
    onChatScrollBottom: () => console.log("Reached the bottom"),
    handleActionCardClick: (label: string, sessionId?: string) => {
      alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
    },
  },
};

export const LongChatHistory: Story = {
  args: {
    sessionId: "session-789",
    userName: "User",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    chats: Array.from({ length: 50 }, (_, i) => ({
      type: i % 2 === 0 ? "text" : "text",
      sender: i % 2 === 0 ? "ai" : "user",
      text: `This is message #${i + 1}`,
      timestamp: `10:${String(i).padStart(2, "0")} AM`,
      chatId: `chat-${i + 1}`,
      sessionId: "session-789",
    })),
    onChatSubmit: (message, sessionId) =>
      alert(`Message Submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onChatScrollTop: () => alert("Reached the top"),
    onChatScrollBottom: () => console.log("Reached the bottom"),
  },
};

export const CustomizedHandlers: Story = {
  args: {
    sessionId: "session-999",
    userName: "User",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    chats: [
      {
        type: "text",
        sender:"ai",
        text: "Let me know if you need anything!",
        timestamp: "10:00 AM",
        chatId: "4",
        sessionId: "session-999",
      },
      {
        type: "text",
        sender:"user",
        text: "Thank you for your help!",
        timestamp: "10:01 AM",
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
    onChatSubmit: (message, sessionId) =>
      alert(`Custom Submit Handler:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onChatScroll: (event) =>
      alert(`Custom Scroll Handler: ScrollTop is ${event.currentTarget.scrollTop}`),
    onFileUpload: (file, sessionId) =>
      alert(`Custom File Upload Handler:\nFile: ${file.name}\nSession ID: ${sessionId}`),
    onChatScrollTop: () => alert("Custom Top Scroll Handler"),
    onChatScrollBottom: () => console.log("Custom Bottom Scroll Handler"),
    handleActionCardClick: (label: string, sessionId?: string) => {
      alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
    },
  },
};

export const FeedbackAndRating: Story = {
  args: {
    sessionId: "session-1122",
    userName: "User",
    userProfileImage: "https://via.placeholder.com/40",
    aiName: "AI",
    aiProfileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
    chats: [
      {
        type: "text",
        sender:"ai",
        text: "How satisfied are you with this response?",
        timestamp: "10:05 AM",
        chatId: "5",
        sessionId: "session-1122",
        ratingEnabled: true,
        textFeedbackEnabled: true,
      },
      {
        type: "text",
        sender:"user",
        text: "This is great, thank you!",
        timestamp: "10:06 AM",
      },
    ],
    onChatSubmit: (message, sessionId) =>
      alert(`Message Submitted:\nMessage: ${message}\nSession ID: ${sessionId}`),
    onStarClick: (star, chatId, sessionId) =>
      alert(`Star Clicked:\nStars: ${star}\nChat ID: ${chatId}\nSession ID: ${sessionId}`),
    onTextFeedbackSubmit: (feedback, chatId, sessionId) =>
      alert(
        `Feedback Submitted:\nFeedback: ${feedback}\nChat ID: ${chatId}\nSession ID: ${sessionId}`
      ),
  },
};
