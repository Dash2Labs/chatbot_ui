
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
    chats: [
      { type: "ai", text: "Hello! How can I assist you today?", timestamp: "10:00 AM" },
      { type: "user", text: "Can you tell me about the weather?", timestamp: "10:01 AM" },
      { type: "ai", text: "Sure! It’s sunny and 75°F.", timestamp: "10:02 AM" },
    ],
    onSubmit: (message) => alert(`Submitted: ${message}`),
    onScroll: (event) => console.log("Scrolled:", event.currentTarget.scrollTop),
    onScrollTop: () => console.log("Reached the top"),
    onScrollBottom: () => console.log("Reached the bottom"),
  },
};

export const WithFileUpload: Story = {
  args: {
    chats: [
      { type: "ai", text: "Please upload a file for further assistance.", timestamp: "10:00 AM" },
      { type: "user", text: "Sure, uploading now.", timestamp: "10:01 AM" },
    ],
    onSubmit: (message) => alert(`Submitted: ${message}`),
    onFileUpload: (file) => alert(`File Uploaded: ${file.name}`),
    onScroll: (event) => console.log("Scrolled:", event.currentTarget.scrollTop),
    onScrollTop: () => console.log("Reached the top"),
    onScrollBottom: () => console.log("Reached the bottom"),
  },
};

export const LongChatHistory: Story = {
  args: {
    chats: Array.from({ length: 50 }, (_, i) => ({
      type: i % 2 === 0 ? "ai" : "user",
      text: `This is message #${i + 1}`,
      timestamp: `10:${String(i).padStart(2, "0")} AM`,
    })),
    onSubmit: (message) => alert(`Submitted: ${message}`),
    onScrollTop: () => alert("Reached the top"),
    onScrollBottom: () => alert("Reached the bottom"),
  },
};

export const CustomizedHandlers: Story = {
  args: {
    chats: [
      { type: "ai", text: "Let me know if you need anything!", timestamp: "10:00 AM" },
      { type: "user", text: "Thank you for your help!", timestamp: "10:01 AM" },
    ],
    onSubmit: (message) => alert(`Custom Submit Handler: ${message}`),
    onScroll: (event) => alert(`Custom Scroll Handler: ScrollTop is ${event.currentTarget.scrollTop}`),
    onFileUpload: (file) => alert(`Custom File Upload Handler: ${file.name}`),
    onScrollTop: () => alert("Custom Top Scroll Handler"),
    onScrollBottom: () => alert("Custom Bottom Scroll Handler"),
  },
};
