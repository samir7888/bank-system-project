export interface User {
  id: number;
  phone: string;
  iat: number;
  exp: number;
}

export interface UserWithBalance {
  user: User;
  balance: {
    id: number;
    userId: number;
    amount: number;
    user: {
      id: number;
      email: string;
      name: string;
      number: string;
      password: string;
    };
  };
}



export interface Transaction {
  id: number;
  amount: number;
  timestamp: string;
  fromUserId: number;
  toUserId: number;
  fromUser: {
    number: string;
  };
  toUser: {
    number: string;
  };
}

export interface TransferFormData {
  to: string;
  amount: string;
}

export interface LoginFormData {
  phone: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
}

export interface BalancePoint {
  date: string;
  amount: number;
}