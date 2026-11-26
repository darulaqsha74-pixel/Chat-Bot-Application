const API_KEY = CONFIG.GEMINI_API_KEY;
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chatMassage");

function sendAction() {
    const userMessage = userInput.value;
    const userMessageDiv = document.createElement("div");

    if (userMessage.trim() !== "") {
        userMessageDiv.className = "user-message";
        userMessageDiv.textContent = userMessage;
        chatContainer.appendChild(userMessageDiv);
        document.getElementById("userInput").value = "";
        chatContainer.scrollTop = chatContainer.scrollHeight;

        const typingDiv = showTyping();
        getResponce(userMessage, typingDiv);

        const botReply = "Reply";

        typingDiv.remove();

    }

}

function showTyping() {
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message", "bot-message");
    typingDiv.textContent = "Lumi is typing...";
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return typingDiv;
}

async function getResponce(userMessage, typingDiv) {
    try {

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": API_KEY
                },

                body: JSON.stringify({

                    contents: [
                        {
                            parts: [
                                {
                                    text: userMessage
                                }
                            ]
                        }
                    ]

                })

            }
        );

        const data = await response.json();
        console.log(data);
        const botReply = data.candidates[0].content.parts[0].text;
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "bot-message";
        botMessageDiv.textContent = botReply;
        typingDiv.remove();
        chatContainer.appendChild(botMessageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;

    }
    catch (error) {

        console.log(error);

    }


}