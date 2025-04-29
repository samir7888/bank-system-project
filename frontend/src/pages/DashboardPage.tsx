import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  console.log(userName)
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
              <h1 className="text-xl font-bold text-gray-900">SecureBank</h1>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <div className="p-2 bg-blue-100 rounded-full mr-2">
                  <User size={18} className="text-blue-900" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {userName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LogOut size={16} className="mr-1" />
                Logout
              </button>
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