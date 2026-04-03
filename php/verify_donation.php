<?php
// Enabling CORS for React Development Environment (localhost:3000)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once 'db_config.php';

// Decode JSON input from React's fetch body
$input = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $input) {
    $txn_id = isset($input['transaction_id']) ? filter_var($input['transaction_id'], FILTER_SANITIZE_STRING) : null;
    $amount = isset($input['amount']) ? filter_var($input['amount'], FILTER_VALIDATE_FLOAT) : null;
    $name = isset($input['name']) ? filter_var($input['name'], FILTER_SANITIZE_STRING) : null;
    $email = isset($input['email']) ? filter_var($input['email'], FILTER_SANITIZE_EMAIL) : null;

    if ($txn_id && $amount) {
        try {
            $stmt = $pdo->prepare("SELECT id FROM donations WHERE transaction_id = ?");
            $stmt->execute([$txn_id]);
            
            if ($stmt->rowCount() > 0) {
                echo json_encode(['status' => 'error', 'message' => 'Transaction already recorded']);
            } else {
                $sql = "INSERT INTO donations (transaction_id, amount, donor_name, donor_email, status) VALUES (?, ?, ?, ?, 'verified')";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$txn_id, $amount, $name, $email]);

                // Return success with a generated receipt ID
                $receipt_id = "REC" . strtoupper(substr($txn_id, -6)) . rand(100, 999);
                echo json_encode([
                    'status' => 'success', 
                    'message' => 'Donation verified and recorded. Thank you!',
                    'receipt_id' => $receipt_id
                ]);
            }
        } catch(PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid transaction details. Expected transaction_id and amount.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request or empty payload']);
}
?>
