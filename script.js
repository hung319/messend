document.addEventListener('DOMContentLoaded', function() {
  const messageForm = document.getElementById('message-form');
  const messageInput = document.getElementById('message-input');
  const messagesContainer = document.getElementById('messages-container');

  // Load messages from local storage
  const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  savedMessages.forEach(message => {
    displayMessage(message);
  });

  // Event listener for message submission
  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
      const message = {
        text: messageText,
        timestamp: new Date().toISOString()
      };
      displayMessage(message);
      saveMessage(message);
      messageInput.value = '';
    }
  });

  // Function to display message
  function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = `${message.text} - ${new Date(message.timestamp).toLocaleString()}`;
    messagesContainer.appendChild(messageElement);
  }

  // Function to save message to local storage
  function saveMessage(message) {
    savedMessages.push(message);
    localStorage.setItem('messages', JSON.stringify(savedMessages));
  }
});
