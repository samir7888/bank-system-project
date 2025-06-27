import { useSearchParams } from "react-router-dom";
import { AlertCircle, Loader2, RefreshCw, User, Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useQuery } from "react-query";
import {
  getAllUsers,
  unfreezeUser,
  freezeUser,
  deleteUser,
} from "../services/api";
import MaintenanceAlertCard from "./MaintanaceAlert";
import { cn } from "../lib/utils";
import { DialogDemo } from "../seperateComponents/createUser";
import Button from "./ui/Button";
import { useState } from "react";
import SearchUser from "./search-users";
import PaginationComponent from "./Pagination";

export default function AdminDashboard() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") as string) || 1;
  const limit = parseInt(searchParams.get("take") as string) || 5; // You can adjust this limit as needed
  const {
    data: usersDetails,
    isLoading: isUsersDetailsLoading,
    isError: isErrorDetails,
    error,
    refetch: refetchDetails,
    isRefetching: isRefetchingDetails,
  } = useQuery(["usersDetails", search, page], () => getAllUsers(search, page, limit));
  const users = usersDetails?.data || [];
  const handleRefresh = async () => {
    await refetchDetails();
  };
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteUser = async (id: number) => {
    setIsDeleting(true);
    await deleteUser(id);
    setIsDeleting(false);
    handleRefresh();
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8">
        {/* Header */}
        <header className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-500">Manage your users</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-2xl font-bold">{usersDetails?.meta.total}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <SearchUser />
              <div className="flex space-x-2">
                <DialogDemo handleRefresh={handleRefresh} />
                <button
                  onClick={handleRefresh}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw
                    className={cn("h-4 w-4", {
                      "animate-spin": isRefetchingDetails,
                    })}
                  />
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="p-6">
            {isUsersDetailsLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                <p className="ml-2 text-gray-600">Loading users...</p>
              </div>
            ) : isErrorDetails  ? (
              <div className="flex justify-center items-center py-12 text-red-600">
                <AlertCircle className="h-8 w-8 mr-2" />
                <div>
                  <p className="font-medium">Failed to load users</p>
                  <p className="text-sm">{String(error)}</p>
                </div>
              </div>
            ) : (
              <>
                <Table>
                  <TableCaption>
                    A list of all users in the system.
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone Number</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user, index: number) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {index + 1}
                        </TableCell>
                        <TableCell className="flex items-center capitalize">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-gray-500" />
                          </div>
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.number}</TableCell>

                        <TableCell>{user.Balance[0].amount}</TableCell>

                        <TableCell>
                          {user.isFrozen ? (
                            <Badge
                              variant="outline"
                              className="bg-red-100 text-red-800 border-red-200"
                            >
                              Frozen
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800 border-green-200"
                            >
                              Active
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Popover>
                            <PopoverTrigger>
                              <Button>Edit</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-fit flex flex-col gap-1  p-0">
                              <Button
                                onClick={() => {
                                  if (user.isFrozen) {
                                    unfreezeUser(user.id);
                                    handleRefresh();
                                  } else {
                                    // You need to implement freezeUser or import it if it exists
                                    freezeUser(user.id);
                                    handleRefresh();
                                  }
                                }}
                                variant="outline"
                              >
                                {user.isFrozen ? "unfreeze" : "freeze"}
                              </Button>
                              <Button
                                isLoading={isDeleting}
                                disabled={isDeleting}
                                onClick={() => {
                                  handleDeleteUser(user.id);
                                }}
                                variant="danger"
                              >
                                {isDeleting ? "Deleting..." : "Delete"}
                              </Button>
                            </PopoverContent>
                          </Popover>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              {usersDetails?.meta && <PaginationComponent meta={usersDetails.meta} />}
              </>
            )}
          </div>
        </div>
        <MaintenanceAlertCard />
      </div>
    </div>
  );
}
