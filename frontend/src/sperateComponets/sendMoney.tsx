// import ATMInterface from "../components/Atm";
import TransferForm from "../components/TransferForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

const SendMoney = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto p-4 shadow-md border rounded-xl">
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
          <CardDescription>Transfer to another user securely</CardDescription>
        </CardHeader>
        <CardContent >
          <TransferForm />
        </CardContent>
      </Card>   
    </div>
  );
};

export default SendMoney;
