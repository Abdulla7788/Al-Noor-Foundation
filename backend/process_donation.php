<?php
// backend/process_donation.php - Secure Donation Handling
require_once 'config.php';

// Set Content-Type for JSON Response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // For development only! Use your React URL in production.
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}

// 1. Rate Limiting check
if (!checkRateLimit('donation', 5, 60)) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many donation attempts. Please wait a minute.']);
    exit();
}

// 2. Capture and Sanitize POST Data
$data = json_decode(file_get_contents('php://input'), true);

$name = sanitizeInput($data['name'] ?? '');
$email = sanitizeInput($data['email'] ?? '');
$phone = sanitizeInput($data['phone'] ?? '');
$amount = floatval($data['amount'] ?? 0);
$transaction_id = sanitizeInput($data['transaction_id'] ?? uniqid('TXN_'));

// 3. Server-side Validation
if (empty($name) || empty($email) || empty($phone) || $amount <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Please fill in all details correctly.']);
    exit();
}

// 4. Secure Database Insertion via PDO (Prepared Statements)
try {
    $stmt = $pdo->prepare("INSERT INTO donors (name, email, phone, amount, transaction_id, status) VALUES (?, ?, ?, ?, ?, 'success')");
    $stmt->execute([$name, $email, $phone, $amount, $transaction_id]);
    
    // 5. Automated Messaging (Mock Logic - User to add actual Twilio Creds)
    $messageBody = "Thank you for donating to Al-Noor Foundation. Your donation of " . formatCurrency($amount) . " has been received successfully. Your contribution is making a real impact. Your Receipt ID is: $transaction_id";
    
    // Helper function for actually calling Twilio can go here
    // sendWhatsAppMessage($phone, $messageBody);

    // 6. Return Success Response
    echo json_encode([
        'status' => 'success',
        'message' => 'Donation processed successfully!',
        'receipt' => [
            'donor' => $name,
            'amount' => formatCurrency($amount),
            'id' => $transaction_id,
            'date' => date('Y-m-d H:i:s'),
            'foundation' => 'Al-Noor Foundation',
            'tax_exempt' => 'Section 80G Certified'
        ]
    ]);

} catch (PDOException $e) {
    if ($e->getCode() == 23000) { // Duplicate Transaction ID
        http_response_code(409);
        echo json_encode(['error' => 'This transaction has already been recorded.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Server error. Please contact support.']);
    }
}

// Function to call WhatsApp API (Requires Twilio SDK - not installed by default in XAMPP)
function sendWhatsAppMessage($to, $message) {
    // This is where you'd put the Twilio / WhatsApp Cloud API call
    // For now, we simulate success for the UI
    return true;
}
?>
