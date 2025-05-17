import { useState, useEffect, useRef } from "react";
import CryptoJS from "crypto-js";
import { Card, CardContent } from "./ui/Card";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { isMaintenanceActive, settleOfflineTransfer } from "../services/api";

const OfflineTransfer = () => {
  const [message, setMessage] = useState("");
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const wasOffline = useRef(false); // track last maintenance state

  useEffect(() => {
    const checkMaintenance = async () => {
      try {
        const { isActive } = await isMaintenanceActive();

        setIsOfflineMode(isActive);

        // If system was offline but is now online, try syncing
        if (wasOffline.current && !isActive) {
          await syncOfflineTransfer();
        }

        wasOffline.current = isActive;
      } catch (err) {
        console.error("Failed to fetch maintenance status", err);
      }
    };

    checkMaintenance();
    const interval = setInterval(checkMaintenance, 10000); // poll every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleOfflineTransfer = () => {
    if (!receiver || !amount) {
      setMessage("Please enter receiver and amount.");
      return;
    }

    const numericAmount = parseFloat(amount);
    if (numericAmount > 1000) {
      setMessage("Amount must be less than or equal to 1000.");
      return;
    }

    if (localStorage.getItem("offline_transfer")) {
      setMessage("A transfer has already been saved. Please wait until it's processed.");
      return;
    }

    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify({ receiver, amount }),
      "emergency_key"
    ).toString();

    localStorage.setItem("offline_transfer", encrypted);
    setMessage("Offline transfer saved and will sync when system is back online.");
    setReceiver("");
    setAmount("");
  };

  const syncOfflineTransfer = async () => {
    const encrypted = localStorage.getItem("offline_transfer");
    if (!encrypted) return;

    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, "emergency_key");
      const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      const { receiver, amount } = decrypted;

      // Send to /settle endpoint
      await settleOfflineTransfer({receiver,amount})

      localStorage.removeItem("offline_transfer");
      setMessage("✅ Offline transfer synced successfully!");
    } catch (err) {
      console.error("Failed to sync offline transfer", err);
      setMessage("❌ Failed to sync offline transfer. Please try again later.");
    }
  };

  return (
    <div className="space-y-4">
      {isOfflineMode && (
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded text-sm text-center">
          ⚠️ System is currently under maintenance. Offline mode active.
        </div>
      )}

      <Card className="w-full max-w-md mx-auto p-4 shadow-md border rounded-xl">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-center">Offline Transfer</h2>
          <Input
            type="text"
            placeholder="Receiver Account Number"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={handleOfflineTransfer} disabled={!isOfflineMode}>
            Save Transfer
          </Button>
          {message && (
            <p className="text-sm text-green-600 mt-2 text-center">{message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OfflineTransfer;
