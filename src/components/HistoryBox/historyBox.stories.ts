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
        title: " Chat with Alice Chat with Alice Chat with Alice",
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
    ],
    onCardClick: (cardDetails) =>
      alert(
        `Card Details:\nTitle: ${cardDetails.title}\nTimestamp: ${cardDetails.timeStamps}\nActive: ${cardDetails.isActive}`
      ),
    onSearchChange: (term) => console.log(`Search term updated: ${term}`),
    onCreateNewChat: () => alert("New chat created!"),
  },
};

export const WithSearch: Story = {
  args: {
    history: [
      {
        title: "Daily Standup",
        timeStamps: "2023-11-20 09:00 AM",
        isActive: false,
      },
      {
        title: "Planning Session",
        timeStamps: "2023-11-19 01:00 PM",
        isActive: false,
      },
      {
        title: "Chat with Bob",
        timeStamps: "2023-11-18 10:00 AM",
        isActive: true,
      },
    ],
    onCardClick: (cardDetails) => console.log("Selected card:", cardDetails),
    onSearchChange: (term) =>
      console.log(`Filtering with search term: ${term}`),
    onCreateNewChat: () => alert("Triggered creation of a new chat."),
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
