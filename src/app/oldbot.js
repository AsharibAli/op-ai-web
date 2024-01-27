const chatbotScript = `
<script type="module">
import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
Chatbot.init({
    chatflowid: "81c22979-bd0a-42ec-a369-beb0739908c7",
    apiHost: "https://flowise-r1c3.onrender.com",
    chatflowConfig: {
        // topK: 2
    },
    theme: {
        button: {
            backgroundColor: "#3B81F6",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "white",
            customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
        },
        chatWindow: {
            welcomeMessage: "Welcome to the Optimism AI Chatbot! I'm here to assist you with any questions you have about the Optimism blockchain & It's Ecosystem.",
            backgroundColor: "#ffffff",
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
                backgroundColor: "#f7f8ff",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/AsharibAli/op-ai-web/main/public/images/optimismai.jpeg",
            },
            userMessage: {
                backgroundColor: "#3B81F6",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
                placeholder: "Type your question",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
            }
        }
    }
})
</script>
`;

{
  /* Render the chatbot script */
}
<div dangerouslySetInnerHTML={{ __html: chatbotScript }} />;
