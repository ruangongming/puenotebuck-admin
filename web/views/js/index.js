function sendMessage() {
    const userMessage = document.getElementById('user-message').value;
    const chatMessages = document.getElementById('chatMessages');

    // Hiển thị tin nhắn người dùng trong phần trò chuyện
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'text-gray-600 mb-2';
    userMessageElement.innerHTML = `${userMessage}`;
    chatMessages.appendChild(userMessageElement);

    // Gửi yêu cầu đến máy chủ Rasa
    fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'message': userMessage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Xử lý dữ liệu nhận được từ máy chủ Rasa
        console.log('Rasa Response:', data);

        // Hiển thị tin nhắn của bot trong phần trò chuyện
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'text-white-600 font-semibold mb-2';
        botMessageElement.innerHTML = `${data[0].text}`;
        chatMessages.appendChild(botMessageElement);

        // Cập nhật giá trị của trường nhập liệu tin nhắn người dùng
        document.getElementById('user-message').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
