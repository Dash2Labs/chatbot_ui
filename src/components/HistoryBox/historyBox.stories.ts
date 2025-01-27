import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import HistoryBox from "./historyBox";

const meta: Meta<typeof HistoryBox> = {
  title: "History/HistoryBox",
  component: HistoryBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof HistoryBox>;

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
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
        sessionId: "1234567890",
      },
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
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
        sessionId: "1234567890",
      },
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
      {
        title: "Team Meeting Notes",
        timeStamps: "2023-11-14 02:00 PM",
        isActive: false,
        sessionId: "1234567890",
      },
    ],
    onCardClick: (cardDetails) =>
      alert(
        `Card Details:\nTitle: ${cardDetails.title}\nTimestamp: ${cardDetails.timeStamps}\nActive: ${cardDetails.isActive}\nsessionId: ${cardDetails.sessionId}`
      ),
    onSearchChange: (term) => console.log(`Search term updated: ${term}`),
    onCreateNewChat: () => alert("New chat created!"),
    isCollapsed: false,
    fullLogo: "https://via.placeholder.com/150",
    compactLogo: "https://via.placeholder.com/50",
    onHistoryScroll: (event) =>
      console.log(`Scroll event: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("Reached the top of history."),
    onHistoryScrollBottom: () => alert("Reached the bottom of history."),
  },
};

export const WithSearch: Story = {
  args: {
    history: [
      {
        title: "Daily Standup",
        timeStamps: "2023-11-20 09:00 AM",
        isActive: false,
        sessionId: "1234567890",
      },
      {
        title: "Planning Session",
        timeStamps: "2023-11-19 01:00 PM",
        isActive: false,
        sessionId: "1234567890",
      },
      {
        title: "Chat with Bob",
        timeStamps: "2023-11-18 10:00 AM",
        isActive: true,
        sessionId: "1234567890",
      },
    ],
    onCardClick: (cardDetails) => console.log("Selected card:", cardDetails),
    onSearchChange: (term) =>
      console.log(`Filtering with search term: ${term}`),
    onCreateNewChat: () => alert("Triggered creation of a new chat."),
    isCollapsed: false,
    fullLogo: "https://via.placeholder.com/150",
    compactLogo: "https://via.placeholder.com/50",
    onHistoryScroll: (event) =>
      console.log(`Scroll event: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("Reached the top of history."),
    onHistoryScrollBottom: () => alert("Reached the bottom of history."),
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates the search functionality and the new chat creation action. Enter a search term to see the callback or click the button to trigger new chat creation.",
      },
    },
  },
};

export const CollapsedView: Story = {
  args: {
    history: [
      {
        title: "Quick Chat",
        timeStamps: "2023-11-10 11:00 AM",
        isActive: false,
        sessionId: "1234567890",
      },
      {
        title: "Notes Review",
        timeStamps: "2023-11-09 03:00 PM",
        isActive: true,
        sessionId: "1234567890",
      },
    ],
    onCardClick: (cardDetails) =>
      alert(
        `Collapsed View Card:\nTitle: ${cardDetails.title}\nTimestamp: ${cardDetails.timeStamps}\nsessionId: ${cardDetails.sessionId}`
      ),
    onCreateNewChat: () => alert("New chat triggered from collapsed view."),
    isCollapsed: true,
    compactLogo: "https://via.placeholder.com/50",
    onHistoryScroll: (event) =>
      console.log(`Scroll event: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("Reached the top of history."),
    onHistoryScrollBottom: () => alert("Reached the bottom of history."),
  },
};

export const WithAccessibility: Story = {
  args: {
    history: [
      {
        title: "Accessibility Demo",
        timeStamps: "2023-11-22 01:00 PM",
        isActive: true,
        sessionId: "1234567890",
      },
      {
        title: "Inclusive Design",
        timeStamps: "2023-11-21 10:00 AM",
        isActive: false,
        sessionId: "1234567890",
      },
    ],
    onCardClick: (cardDetails) =>
      console.log(
        `Accessibility Card Clicked:\nTitle: ${cardDetails.title}\nTimestamp: ${cardDetails.timeStamps} \nsessionId: ${cardDetails.sessionId}`
      ),
    onCreateNewChat: () => alert("Accessibility new chat action triggered."),
    setAccessibilityOpen: (isOpen) =>
      console.log(`Accessibility Panel Toggled: ${isOpen}`),
    isCollapsed: false,
    accessibilityOpen: false,
    fullLogo: "https://via.placeholder.com/150",
    onHistoryScroll: (event) =>
      console.log(`Scroll event: ScrollTop is ${event.currentTarget.scrollTop}`),
    onHistoryScrollTop: () => alert("Reached the top of history."),
    onHistoryScrollBottom: () => alert("Reached the bottom of history."),
  },
};
