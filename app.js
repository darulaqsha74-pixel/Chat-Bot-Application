
const userInput = document.getElementById("userInput");
const userMessage=userInput.value;
const chatContainer = document.getElementById("chatMassage");
    
function sendAction() {
    const userMessageDiv = document.createElement("div");

    if(userMessage.trim()!==""){
        userMessageDiv.className = "user-message";
        userMessageDiv.textContent = userMessage;
        chatContainer.appendChild(userMessageDiv);
        document.getElementById("userInput").value = "";
        chatContainer.scrollTop=chatContainer.scrollHeight;
       
        const typingDiv = showTyping();
        const botReply = "Reply";
        
        typingDiv.remove();
        getResponce();

    }
    
}

function showTyping(){
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message","bot-message");
    typingDiv.textContent = "Lumi is typing...";
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop=chatContainer.scrollHeight;
    return typingDiv;
}

function getResponce(){
    
}