import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { Role } from "../types";
import { BASEURL } from "../lib/constant";

interface User {
  id: number;
  name: string;
  phone: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;

  setUser: (user: User | null) => void;
  error: string;
  login: (phone: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  const login = async (phone: string, password: string) => {
    try {
      const response = await axios.post(
        `${BASEURL}/auth/login`,
        {
          phone,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setUser(response.data.user);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || "Login failed");
      } else {
        setError("An unknown error occurred during login.");
      }
      throw new Error("Login failed");
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${BASEURL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.error || "Logout failed");
      } else {
        console.log("An unknown error occurred during logout.");
      }
    }
    await localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, error, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};