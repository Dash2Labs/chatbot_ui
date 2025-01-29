import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardWithActions from "./cardWithActions";

const meta: Meta<typeof CardWithActions> = {
  title: "Components/CardWithActions",
  component: CardWithActions,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Positions the component centrally
  },
  argTypes: {
    handleActionCardClick: { action: "action triggered" },
  },
};

export default meta;

type Story = StoryObj<typeof CardWithActions>;

/**
 * ## Component Overview
 *
 * The `CardWithActions` component is designed for AI-based chatbots to display interactive action cards during or after a conversation. It supports:
 * - **Dynamic Title and Subtitle**: Pass a `title` and optional `subtitle`.
 * - **Action Buttons**: Dynamically render buttons based on the `actions` array, each triggering a custom callback.
 * - **Session Context**: Supports a `sessionId` for contextual interactions.
 *
 * ## Props
 *
 * - `actionCardTitle` (string): Title displayed on the card.
 * - `subtitle` (string | optional): Subtitle displayed below the title.
 * - `actions` (array of objects): Array of action objects with the structure `{ label: string }`.
 * - `sessionId` (string | optional): Session identifier for contextual interactions.
 * - `handleActionCardClick` (function): Callback triggered when a button is clicked. It provides:
 *   - `label` (string): Label of the clicked button.
 *   - `sessionId` (string | optional): Session ID.
 *
 * ## Usage Example
 *
 * ```tsx
 * <CardWithActions
 *   actionCardTitle="Choose an Option"
 *   actionCardSubtitle="Please select one of the actions below:"
 *   actions={[
 *     { label: "Accept" },
 *     { label: "Decline" },
 *     { label: "Maybe Later" },
 *   ]}
 *   sessionId="session-123"
 *   handleActionCardClick={(label, sessionId) =>
 *     console.log(`Action: ${label}, Session ID: ${sessionId}`)
 *   }
 * />
 * ```
 */

export const Default: Story = {
  args: {
    actionCardTitle: "Choose an Option",
    actionCardSubtitle: "Please select one of the actions below:",
    actions: [
      { label: "Accept" },
      { label: "Decline" },
      { label: "Maybe Later" },
    ],
    sessionId: "session-123",
    handleActionCardClick: (label: string, sessionId?: string) => {
      alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
    },
  },
};

export const WithoutSubtitle: Story = {
  args: {
    actionCardTitle: "Quick Actions",
    actions: [
      { label: "Yes" },
      { label: "No" },
      { label: "Ask Again" },
    ],
    sessionId: "session-456",
    handleActionCardClick: (label: string, sessionId?: string) => {
      alert(`Action: ${label}\nSession ID: ${sessionId || "None"}`);
    },
  },
};

export const MultipleActions: Story = {
  args: {
    actionCardTitle: "Select Your Preferences",
    actionCardSubtitle: "You can select one or more options:",
    actions: [
      { label: "Option 1" },
      { label: "Option 2" },
      { label: "Option 3" },
      { label: "Option 4" },
    ],
    sessionId: "session-789",
    handleActionCardClick: (label: string, sessionId?: string) => {
      console.log(`Action: ${label}, Session ID: ${sessionId || "None"}`);
    },
  },
};
