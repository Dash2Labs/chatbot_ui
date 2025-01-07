export interface ChatCardProps {
  type: "ai" | "user"; // Determines if the card is AI or User
  text: string; // The chat text
  timestamp: string; // The timestamp of the chat
  profileImage?: string; // Optional: Profile image URL
  name?: string; // Optional: Name of the user to generate initials
  ratingEnabled?: boolean; // Optional: Enables the star feedback system
  textFeedbackEnabled?: boolean; // Optional: Enables text feedback modal
  isProfileImageRequired?: boolean; // Optional: Toggle profile image visibility
  feedback?: string; // Submitted feedback text
  rating?: number ; // Submitted star rating (1-5 stars)
  onFeedbackSubmit?: (stars: number, textFeedback?: string) => void; // Callback for feedback submission
}
