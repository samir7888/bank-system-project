import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { Card, CardContent } from "./ui/Card";
import Button from "./ui/Button";
import  Input  from "./ui/Input";

const EmergencyCreditCard = () => {
  const [message, setMessage] = useState("");
  const [isOffline, setIsOffline] = useState(false);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const handleOnlineStatus = () => setIsOffline(!navigator.onLine);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);
    handleOnlineStatus();

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  const handleOfflineTransfer = () => {
    if (!receiver || !amount) {
      setMessage("Please enter receiver and amount");
      return;
    }
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify({ receiver, amount }),
      "emergency_key"
    ).toString();
    localStorage.setItem("offline_transfer", encrypted);
    setMessage("Offline transfer saved and will sync when online.");
    setReceiver("");
    setAmount("");
  };

  return (
    <div className="space-y-4">
      {isOffline && (
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded text-sm text-center">
          ⚠️ You are currently offline. Some features are limited.
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
          <Button onClick={handleOfflineTransfer}>Save Transfer</Button>
          {message && <p className="text-sm text-green-600 mt-2 text-center">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyCreditCard;
