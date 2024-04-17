document.getElementById('sendButton').addEventListener('click', () => {
  const recipient = document.getElementById('recipient').value;
  const message = document.getElementById('message').value;
  
  // Tại đây bạn có thể thêm logic để gửi email hoặc tin nhắn đến người nhận
  // Ví dụ: sử dụng một dịch vụ email API như SendGrid hoặc Mailgun
  
  document.getElementById('response').textContent = 'Message sent!';
});
