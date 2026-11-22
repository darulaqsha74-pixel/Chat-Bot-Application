


function sendAction() {
    let userMessage=document.getElementById("userInput").value;
    let chatContainer = document.getElementById("chatMassage");
    let userMessageDiv = document.createElement("div");

    if(userMessage.trim()!==""){
        userMessageDiv.className = "user-message";
        userMessageDiv.textContent = userMessage;
        chatContainer.appendChild(userMessageDiv);
        document.getElementById("userInput").value = "";
    }
    
}

function getResponce(userMessage){
    let API
}