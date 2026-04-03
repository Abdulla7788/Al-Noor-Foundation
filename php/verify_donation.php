<?php
require_once 'db_config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $txn_id = filter_input(INPUT_POST, 'transaction_id', FILTER_SANITIZE_STRING);
    $amount = filter_input(INPUT_POST, 'amount', FILTER_VALIDATE_FLOAT);
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

    if ($txn_id && $amount) {
        try {
            // Check if transaction ID already exists
            $stmt = $pdo->prepare("SELECT id FROM donations WHERE transaction_id = ?");
            $stmt->execute([$txn_id]);
            
            if ($stmt->rowCount() > 0) {
                echo json_encode(['status' => 'error', 'message' => 'Transaction already recorded']);
            } else {
                // Insert new transaction
                $sql = "INSERT INTO donations (transaction_id, amount, donor_name, donor_email, status) VALUES (?, ?, ?, ?, 'verified')";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$txn_id, $amount, $name, $email]);

                // Placeholder for WhatsApp API call logic
                // notifyAdminViaWhatsApp($txn_id, $amount);

                echo json_encode(['status' => 'success', 'message' => 'Donation verified and recorded. Thank you!']);
            }
        } catch(PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid transaction details']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
