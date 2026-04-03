# Al-Noor Foundation: Integrated Test Protocol

Follow these steps to verify the **Donate & Verify** platform on your machine.

---

### Step 1: Initialize XAMPP (Backend)
1. Open the **XAMPP Control Panel**.
2. Click **Start** for both **Apache** and **MySQL**.
3. Access [http://localhost/phpmyadmin](http://localhost/phpmyadmin) in your browser.

### Step 2: Prepare the Database
If you haven't already:
1. Create a new database named: `al_noor_foundation`.
2. Select the database and go to the **SQL** tab.
3. Copy-paste and run the contents of [donations.sql](file:///c:/xampp/htdocs/Al-Noor-Foundation-main/php/donations.sql).

### Step 3: Run the Application (Frontend)
1. Open your terminal in `c:\xampp\htdocs\Al-Noor-Foundation-main`.
2. Run: `npm start` (if it's not already running).
3. The app will open at: [http://localhost:3000](http://localhost:3000).

---

### Step 4: The Strategic Donation Test
1. Navigate to the **Donate** page.
2. **Fill Information**: Use a test name (e.g., "Abdulla Test"), Email, and Phone.
3. **Select Amount**: Click on **₹500** or enter a custom amount.
4. **Initiate Payment**:
   - Click **PAY & GET RECEIPT**.
   - **Observation**: A new WhatsApp tab will open (to notify the foundation), and your native UPI app (on mobile) or a link handler should trigger.
5. **The Holding Phase**:
   - You will now see the white **"Payment Pending"** screen with a spinning icon.
6. **The Verification Phase**:
   - Click **I HAVE PAID**.
   - **Observation**: The system will display "VERIFYING..." for 2 seconds (simulated security check).
7. **Final Outcome**:
   - The official **Institutional Receipt** will appear on the screen! ✅

---

### Step 5: Verification of Data (Audit)
1. Go back to your [phpMyAdmin](http://localhost/phpmyadmin).
2. Select the `donations` table.
3. **Verify**: You should see a new row with your test name, the amount (₹500), and the status **'verified'**.

---
> [!TIP]
> If you see a "Failed to connect" error, double-check that your XAMPP Apache is running and the folder name in your URL `http://localhost/Al-Noor-Foundation-main/php/verify_donation.php` matches exactly what you see in Windows Explorer.
