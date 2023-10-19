"use client";
import dynamic from "next/dynamic";

// Dynamically import BubbleChat with SSR turned off
const DynamicBubbleChat = dynamic(
  () => import("flowise-embed-react").then((mod) => mod.BubbleChat),
  {
    ssr: false, // This is important, as it disables server-side rendering for the module
    loading: () => <p>Loading...</p>, // Optional loading component or message
  },
);

const Chat = () => {
  return (
    <DynamicBubbleChat
      chatflowid="64ff8147-14ea-41e9-af99-ae8968c68d5c"
      apiHost="https://flowise-r1c3.onrender.com"
      theme={{
        button: {
          backgroundColor: "#3B81F6",
          right: 20,
          bottom: 20,
          size: "medium",
          iconColor: "white",
          customIconSrc:
            "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
        },
        chatWindow: {
          welcomeMessage: "Hello! This is custom welcome message",
          backgroundColor: "#ffffff",
          height: 700,
          width: 400,
          fontSize: 16,
          poweredByTextColor: "#303235",
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc:
              "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
          },
          userMessage: {
            backgroundColor: "#3B81F6",
            textColor: "#ffffff",
            showAvatar: true,
            avatarSrc:
              "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#3B81F6",
          },
        },
      }}
    />
  );
};

export default Chat;
