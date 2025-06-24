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
  login: (
    phone: string,
    password: string,
  ) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
    await localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, isAuthenticated: !!user }}
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
