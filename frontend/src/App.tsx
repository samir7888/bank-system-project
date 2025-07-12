import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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
import ATMInterface from "./components/AtmWithdraw";
import LandingPage from "./pages/LandingPage";
import SendMoney from "./seperateComponents/sendMoney";
import PersistentRefreshToken from "./components/persistant";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* User Routes */}
            <Route
              path="/user/*"
              element={
                <PersistentRefreshToken>
                  <AuthRoute>
                    <ProtectedRoutes allowedRoutes={["USER"]}>
                      <DashboardPage />
                    </ProtectedRoutes>
                  </AuthRoute>
                </PersistentRefreshToken>
              }
            >
              <Route index element={<UserDashboard />} />
              <Route path="send-money" element={<SendMoney />} />
              <Route path="withdraw-money" element={<ATMInterface />} />
            </Route>

            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <PersistentRefreshToken>
                  <AuthRoute>
                    <ProtectedRoutes allowedRoutes={["ADMIN"]}>
                      <DashboardPage />
                    </ProtectedRoutes>
                  </AuthRoute>
                </PersistentRefreshToken>
              }
            >
              <Route index element={<AdminDashboard />} />
              {/* Add more admin routes here if needed */}
            </Route>

            {/* Redirect based on role after login */}
            <Route path="/dashboard" element={<RoleBasedRedirect />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// Add this component for role-based redirection
function RoleBasedRedirect() {
  const { user } = useAuth();

  if (user?.role === "ADMIN") {
    return <Navigate to="/admin" replace />;
  } else if (user?.role === "USER") {
    return <Navigate to="/user" replace />;
  }

  // If no user or role, redirect to login
  return <Navigate to="/login" replace />;
}

export default App;
