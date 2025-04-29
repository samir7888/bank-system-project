import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getUserDetails } from '../services/api';

interface User {
  id: number;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  login: (phone: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('bankToken');
      if (token) {
        try {
          const response = await getUserDetails();
          setUser(response.user);
        } catch (error) {
          console.log(error)
          localStorage.removeItem('bankToken');
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (phone: string, password: string, rememberMe: boolean) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        phone,
        password
      }, {
        withCredentials: true
      });

      if (rememberMe) {
        localStorage.setItem('bankToken', 'true');
      }

      setUser(response.data.user);
    } catch (error) {
      console.log(error)
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('bankToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};