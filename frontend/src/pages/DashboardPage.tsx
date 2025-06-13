import React from "react";
import { Link, Outlet } from "react-router-dom";
import PopoverUser from "../sperateComponets/popoverUser";
import { useAuth } from "../context/AuthContext";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center mr-2">
                <span className="text-white font-bold">S</span>
              </div>
              <Link to="/user-dashboard">
                <h1 className="text-xl font-bold text-gray-900">SecureBank</h1>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-start mr-4">
                <div className="p-2 flex items-center justify-between text-2xl font-bold capitalize rounded-full mr-2">
                  Welcome back, {user?.name}
                  <span className="text-sm text-gray-500">
                    <PopoverUser />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SecureBank. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
