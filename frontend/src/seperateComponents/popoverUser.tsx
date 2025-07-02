import { LogOut, User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Role } from "../types";

const PopoverUser = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
  };
  if (!user || !user.role) {
    return;
  }
  return (
    <Popover>
      <PopoverTrigger>
        <User size={28} className="ml-4 rounded-full bg-gray-300" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogOut size={16} className="mr-1" />
            Logout
          </button>
          {user?.role === Role.USER && (
            <>
              <button
                onClick={() => navigate("/user/send-money")}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Send Money
              </button>
              <button
                onClick={() => navigate("/user/withdraw-money")}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Withdraw Money
              </button>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default PopoverUser;
