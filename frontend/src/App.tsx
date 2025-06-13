import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Pages
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import { ProtectedRoutes } from "./services/ProtectedRoutes";
import { Toaster } from "./components/ui/toaster";
import SendMoney from "./sperateComponets/sendMoney";
import ATMInterface from "./components/Atm";
// import Dashboard from './components/Dashboard';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Protected route component
const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/"
              element={
                <AuthRoute>
                  <ProtectedRoutes allowedRoutes={["USER"]}>
                    <DashboardPage />
                  </ProtectedRoutes>
                </AuthRoute>
              }
            >
              <Route
                index
                element={<Navigate to="/user-dashboard" replace />}
              />
              <Route path="user-dashboard" element={<UserDashboard />} />
              <Route path="send-money" element={<SendMoney />} />
              <Route path="withdraw-money" element={<ATMInterface />} />
            </Route>
            <Route
              path="/"
              element={
                <AuthRoute>
                  <ProtectedRoutes allowedRoutes={["ADMIN"]}>
                    <DashboardPage />
                  </ProtectedRoutes>
                </AuthRoute>
              }
            >
              <Route
                index
                element={<Navigate to="/admin-dashboard" replace />}
              />
              <Route path="admin-dashboard" element={<AdminDashboard />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
