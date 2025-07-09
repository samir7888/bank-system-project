import React from "react";
import { Link, Outlet } from "react-router-dom";
import PopoverUser from "../seperateComponents/popoverUser";
import {  useAuth } from "../context/AuthContext";
import { Greeting } from "../components/Greeting";

const DashboardPage: React.FC = () => {
  const { user } = useAuth() ;

  const name = localStorage.getItem("name");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to={`/${user?.role.toLowerCase()}`} className="flex items-center">
              <div className="flex items-center">
                <img
                  src="/faviconn.png"
                  alt="logo"
                  className="h-14 mr-4 bg-transparent"
                />
              </div>
            </Link>
            <div className="hidden  p-2 md:flex items-center justify-between text-2xl font-bold capitalize rounded-full mr-2">
              <Greeting />
              <span className="text-blue-500 text-3xl ml-1"> {name}</span>
            </div>
            <PopoverUser />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8">
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
