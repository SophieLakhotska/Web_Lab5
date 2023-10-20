function sendMessage(user) {
    var messageInput;
    var className;
    if (user === 'user1') {
        messageInput = document.getElementById("user1-input");
        className = "user1";
    } else {
        messageInput = document.getElementById("user2-input");
        className = "user2";
    }

    var message = messageInput.value;
    if (message.trim() === "") {
        return;
    }

    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");
    newMessage.className = "message " + className;
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);

    // Очищення поля введення
    messageInput.value = "";

    // Прокрутка чату до нижньої частини для відображення нового повідомлення
    chatBox.scrollTop = chatBox.scrollHeight;
}