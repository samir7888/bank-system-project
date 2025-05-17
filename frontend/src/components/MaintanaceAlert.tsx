import { useState } from "react";
import { useMutation } from "react-query";
import { AlertCircle, Clock, ServerIcon, ShieldAlert } from "lucide-react";
import Button from "../components/ui/Button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/ui/Card";

import Input from "../components/ui/Input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import { createMaintenanceAlert } from "../services/api";

// API service function (simulated)
export interface AlertData {
  title: string;
  description: string;
  type: string;
  startTime: string;
  endTime: string;
}

interface CreateAlertResponse {
  alert: {
    id: string;
  };
  message: string;
}

export default function MaintenanceAlertCard() {
  const [alertData, setAlertData] = useState({
    title: "Scheduled Server Downtime",
    description:
      "The online banking system will be temporarily unavailable due to scheduled maintenance.",
    type: "OnlineBanking",
    startTime: "",
    endTime: "",
  });

  const mutation = useMutation<CreateAlertResponse, Error, AlertData>(
    createMaintenanceAlert,
    {
      onSuccess: (data) => {
        toast({
          title: "Maintenance Alert Created",
          description: `Alert created with ID: ${data.alert.id}`,
          variant: "default",
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    }
  );

  // Removed redundant interface declaration

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setAlertData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(alertData);
    mutation.mutate(alertData);
  };

  return (
    <div className="container mx-auto my-8">
      <Card className="w-full">
        <CardHeader className="bg-yellow-50 border-b border-yellow-200">
          <div className="flex items-center">
            <ShieldAlert className="h-6 w-6 text-yellow-600 mr-3" />
            <CardTitle className="text-xl text-yellow-900">
              Maintenance Alert
            </CardTitle>
          </div>
          <CardDescription className="text-yellow-700">
            Create an emergency alert for system downtime
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={alertData.title}
                onChange={handleInputChange}
                placeholder="Enter alert title"
                required
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={alertData.description}
                onChange={handleInputChange}
                placeholder="Describe the maintenance"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="datetime-local"
                  value={alertData.startTime.replace("Z", "")}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  name="endTime"
                  type="datetime-local"
                  value={alertData.endTime.replace("Z", "")}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                name="type"
                value={alertData.type}
                onChange={handleInputChange}
                placeholder="Enter alert type"
                required
              />
            </div>
          </form>

          {mutation.isError && (
            <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5 mr-2" />
              <p className="text-sm">
                {(
                  mutation.error as {
                    response?: { data?: { message?: string } };
                  }
                )?.response?.data?.message || mutation.error.message}
              </p>
            </div>
          )}
          {mutation.isSuccess && (
            <div className="flex items-center text-green-600 bg-red-50 p-3 rounded-lg">
              {/* < className="h-5 w-5 mr-2" /> */}
              <p className="text-sm">
                {mutation.data?.message ||
                  "Successfully created maintenance alert"}
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex !p-4 items-center justify-between bg-gray-50 border-t">
          <div className="flex items-center text-gray-500">
            <ServerIcon className="h-4 w-4 mr-2" />
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">System Maintenance</span>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
            }}
            disabled={mutation.isLoading}
            className={
              mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
            }
          >
            {mutation.isLoading ? "Creating..." : "Create Alert"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
