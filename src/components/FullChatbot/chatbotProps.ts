import { BasicChatBoxProps } from "../ChatBox/chatBox.types";
import { BasicHistoryBoxProps } from "../HistoryBox/historyBox.types";
import { LogoProps } from "../HistoryBox/historyBox.types";
import { userDetailsProps } from "../Chats/chatCard.types";


export interface FullChatbotProps extends  BasicChatBoxProps, BasicHistoryBoxProps, LogoProps, userDetailsProps {}


