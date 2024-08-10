// script.js
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    appendMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        appendMessage(botResponse, 'bot');
    }, 500);
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateBotResponse(userInput) {
    // Basic example of bot responses
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you': 'I am a bot, but I’m here to help you!',
        'bye': 'Goodbye! Have a great day!',
        'what is your name': 'I’m a chatbot created by OpenAI.',
        'help': 'I can assist with basic questions. Try asking "hello" or "how are you?"'
    };

    const response = responses[userInput.toLowerCase()];
    return response || "I’m not sure how to respond to that. Try asking something else.";
}
