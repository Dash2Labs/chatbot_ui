import type { Meta, StoryObj } from "@storybook/react";
import ChatCard from "./chatCard";

const meta: Meta<typeof ChatCard> = {
  title: "Chat/ChatCard",
  component: ChatCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ChatCard>;

export const DefaultAI: Story = {
  args: {
    type: "text",
    sender:"ai",
    text: "Hello! How can I assist you today?",
    timestamp: "10:30 AM",
  },
};

export const WithProfileImage: Story = {
  args: {
    type: "text",
    sender:"user",
    text: "Can you tell me about the weather?",
    timestamp: "10:31 AM",
    profileImage: "https://via.placeholder.com/40",
    isProfileImageRequired: true,
  },
};

export const WithInitials: Story = {
  args: {
    type: "text",
    sender:"user",
    text: "Please let me know more details.",
    timestamp: "10:32 AM",
    userName: "John Doe",
    isProfileImageRequired: true,
  },
};

export const WithStarsOnly: Story = {
  args: {
    type: "text",
    sender:"ai",
    text: "How satisfied are you with this response?",
    timestamp: "10:34 AM",
    ratingEnabled: true,
    onStarClick: (stars, chatId, sessionId) =>
      alert(`Rated ${stars} star(s) for Chat ID: ${chatId}, Session ID: ${sessionId}`),
  },
};

export const WithPDF: Story = {
  args: {
    type: "pdf",
    sender: "user",
    text: "",
    timestamp: "10:40 AM",
    pdfUrl: "https://www.example.com/sample.pdf",
    pdfUploaded: true,
  },
};


export const WithStarsAndTextFeedback: Story = {
  args: {
    type: "text",
    sender:"ai",
    text: "Do you need any additional help?",
    timestamp: "10:35 AM",
    ratingEnabled: true,
    textFeedbackEnabled: true,
    onStarClick: (stars, chatId, sessionId) =>
      console.log(
        `Rated ${stars} star(s) for Chat ID: ${chatId}, Session ID: ${sessionId}`
      ),
    onTextFeedbackSubmit: (textFeedback, chatId, sessionId) =>
      console.log(
        `Text Feedback: "${textFeedback}" for Chat ID: ${chatId}, Session ID: ${sessionId}`
      ),
  },
};

export const WithExistingFeedbackAndRating: Story = {
  args: {
    type: "text",
    sender:"ai",
    text: "Here’s the information you requested.",
    timestamp: "10:36 AM",
    feedback: "Great response, very helpful!",
    rating: 5,
    ratingEnabled: true,
    textFeedbackEnabled: true,
    onStarClick: (stars, chatId, sessionId) =>
      console.log(
        `Updated Rating: ${stars} for Chat ID: ${chatId}, Session ID: ${sessionId}`
      ),
    onTextFeedbackSubmit: (textFeedback, chatId, sessionId) =>
      console.log(
        `Updated Feedback: "${textFeedback}" for Chat ID: ${chatId}, Session ID: ${sessionId}`
      ),
  },
};

export const UserWithoutImage: Story = {
  args: {
    type: "text",
    sender:"user",
    text: "Thank you for your assistance.",
    timestamp: "10:37 AM",
    isProfileImageRequired: false, // No profile image displayed
  },
};

export const AIWithoutImage: Story = {
  args: {
    type: "text",
    sender:"ai",
    text: "Let me know if you need further assistance.",
    timestamp: "10:38 AM",
    isProfileImageRequired: false, // No profile image displayed
  },
};

export const FullFeedbackExample: Story = {
  args: {
    type: "text",
    sender:"ai",
    text: "Please provide your feedback for this response.",
    timestamp: "10:39 AM",
    ratingEnabled: true,
    textFeedbackEnabled: true,
    onStarClick: (stars, chatId, sessionId) =>
      console.log(
        `Rated ${stars} star(s) for Chat ID: ${chatId}, Session ID: ${sessionId}`
      ),
    onTextFeedbackSubmit: (textFeedback, chatId, sessionId) =>
      console.log(
        `Feedback submitted:
Text: "${textFeedback || "No comments"}" for Chat ID: ${chatId}, Session ID: ${sessionId}`
      ),
    feedback: "This is good but could use more details.",
    rating: 4,
  },
};
