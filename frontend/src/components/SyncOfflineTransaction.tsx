import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { Card, CardContent } from "./ui/Card";
import Button from "./ui/Button";

const SyncOfflineTransfer = () => {
  const [syncStatus, setSyncStatus] = useState("");
  const [hasOfflineData, setHasOfflineData] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSync = async () => {
    const encrypted = localStorage.getItem("offline_transfer");
    if (!encrypted) return;

    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, "emergency_key").toString(CryptoJS.enc.Utf8);
      const data = JSON.parse(decrypted);

      const response = await axios.post("/emergency-credit/settle", {
        userId: data.receiver,
        amountSpent: Number(data.amount)
      });

      if (response.status === 200) {
        localStorage.removeItem("offline_transfer");
        setSyncStatus("✅ Transfer synced successfully.");
        setShowToast(true);
        setHasOfflineData(false);
        setTimeout(() => setShowToast(false), 4000);
      }
    } catch (err) {
      console.error("Sync error:", err);
      setSyncStatus("❌ Failed to sync transfer.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  useEffect(() => {
    const encrypted = localStorage.getItem("offline_transfer");
    setHasOfflineData(!!encrypted);

    const trySyncWhenOnline = () => {
      if (navigator.onLine && encrypted) {
        handleSync();
      }
    };

    window.addEventListener("online", trySyncWhenOnline);

    return () => {
      window.removeEventListener("online", trySyncWhenOnline);
    };
  }, []);

  return (
    <>
      <Card className="w-full max-w-md mx-auto p-4 shadow-md border rounded-xl mt-4">
        <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-lg font-semibold">Sync Offline Transfer</h2>
          <p className="text-sm text-muted-foreground">
            If you saved a transfer offline, it will sync automatically when you're back online.
          </p>
          <Button onClick={handleSync} disabled={!hasOfflineData}>
            {hasOfflineData ? "Sync Now" : "No Offline Transfers"}
          </Button>
          {syncStatus && <p className="text-sm text-green-600 mt-2">{syncStatus}</p>}
        </CardContent>
      </Card>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-white border shadow-lg px-4 py-2 rounded-lg text-sm text-green-700 z-50">
          {syncStatus}
        </div>
      )}
    </>
  );
};

export default SyncOfflineTransfer;
