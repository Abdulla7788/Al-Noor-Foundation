<?php
// backend/config.php - Secure Configuration

// Database Credentials (REPLACE WITH YOUR LOCAL XAMPP DETAILS)
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'alnoor_charity');

// WhatsApp/Twilio Credentials (TO BE FILLED BY USER)
define('TWILIO_SID', 'your_twilio_sid');
define('TWILIO_AUTH_TOKEN', 'your_twilio_auth_token');
define('TWILIO_WHATSAPP_NUMBER', 'whatsapp:+14155238886'); // Change to your Twilio WhatsApp sender

// Security: PDO Connection
try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    die("Database Connection Failed: " . $e->getMessage());
}

// Utility: General Formatting
function formatCurrency($amount) {
    return '₹' . number_format($amount, 2);
}

// Security: Validation and Sanitization
function sanitizeInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Security: Rate Limiting Helper (Simple Session-based)
session_start();
function checkRateLimit($key, $limit = 5, $window = 60) {
    if (!isset($_SESSION['rate_limit'])) $_SESSION['rate_limit'] = [];
    $now = time();
    $history = $_SESSION['rate_limit'][$key] ?? [];
    $history = array_filter($history, fn($t) => $t > $now - $window);
    if (count($history) >= $limit) return false;
    $history[] = $now;
    $_SESSION['rate_limit'][$key] = $history;
    return true;
}
?>
