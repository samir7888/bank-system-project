import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "./Card";
import Button from "./Button";
import {
  ClaimEmergencyWallet,
  getEmergencyWalletStatus,
} from "../../services/api";
import { cn } from "../../lib/utils";

const EmergencyCreditCard = () => {
  const [isClaimed, setIsClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if emergency credit has already been claimed

    const fetchStatus = async () => {
      try {
        const response = getEmergencyWalletStatus();
        if ((await response).hasCredit) {
          setIsClaimed(true);
          setMessage("You have already claimed emergency credit.");
        }
      } catch (error) {
        console.error("Error checking credit status:", error);
      }
    };

    fetchStatus();
  }, []);

  const handleClaimCredit = async () => {
    setLoading(true);
    try {
      const response = ClaimEmergencyWallet();
      if ((await response).credit) {
        setIsClaimed(true);
        setMessage(
          "NPR 1000 emergency credit granted. You can now spend it offline."
        );
        localStorage.setItem("emergency_credit_claimed", "true");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data?.message || "Failed to claim credit.");
      } else {
        setMessage("Failed to claim credit.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-4 shadow-md border rounded-xl">
      <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl font-semibold">Emergency Credit Wallet</h2>
        <p className="text-sm text-muted-foreground">
          Use this to claim NPR 1000 credit during server maintenance. This can be
          used offline and will sync automatically later.
        </p>
        <Button
          disabled={isClaimed || loading}
          onClick={handleClaimCredit}
          className="w-full"
        >
          {loading
            ? "Processing..."
            : isClaimed
            ? "Credit Claimed"
            : "Claim ₹1000 Emergency Credit"}
        </Button>
        {message && (
          <p
            className={cn(
              "text-sm text-red-600 mt-2",
              message ===
                "NPR 1000 emergency credit granted. You can now spend it offline." &&
                "text-green-600"
            )}
          >
            {message}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default EmergencyCreditCard;
