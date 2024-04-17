<?php
// Kiểm tra xem dữ liệu tin nhắn đã được gửi chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy tin nhắn từ form
    $message = $_POST["message"];

    // Lưu tin nhắn vào tập tin hoặc cơ sở dữ liệu (ở đây tôi chỉ in ra nó)
    echo "Bạn đã gửi tin nhắn: " . $message;
}
?>
