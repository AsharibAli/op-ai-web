"use client";
import dynamic from "next/dynamic";

// Dynamically import BubbleChat with SSR turned off
const DynamicBubbleChat = dynamic(
  () => import("flowise-embed-react").then((mod) => mod.BubbleChat),
  {
    ssr: false, // This is important, as it disables server-side rendering for the module
  },
);

const App = () => {
  return (
    <DynamicBubbleChat
      chatflowid="64ff8147-14ea-41e9-af99-ae8968c68d5c"
      apiHost="https://flowise-r1c3.onrender.com"
    />
  );
};

export default App;
