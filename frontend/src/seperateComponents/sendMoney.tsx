// import ATMInterface from "../components/Atm";
import TransferForm from "../components/TransferForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { motion } from "motion/react";
const SendMoney = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto p-4 shadow-md border rounded-xl">
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
          <CardDescription>Transfer to another user securely</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
           initial={{
          opacity: 0,
          scale: 0.8,
          y: 100,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
          >
            <TransferForm />
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendMoney;
