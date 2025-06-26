export interface User {
  id: number;
  phone: string;
  name: string;
  role: Role;
  iat: number;
  exp: number;
}

 type IUser = {
    id: number;
    name: string;
    email: string;
    number: string;
    role: string;
    isFrozen: boolean;
    Balance: [{ id: number; userId: number; amount: number }];
  };
export interface UserResponse {
  data: IUser[];
   meta: {
    page: number;
    limit: number;
    total: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
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

export interface RegisterFormData {
  name: string;
  email: string;
  number: string;
  password: string;
  balance: number;
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

export interface EmergencyCredit {
  id: number;
  userId: number;
  amount: number;
  isUsed: boolean;
  createdAt: string; // or Date if you convert it
  expiresAt: string; // or Date if you convert it
}

export interface EmergencyCreditStatusResponse {
  hasCredit: boolean;
  credit?: EmergencyCredit;
}

export interface MaintenanceStatus {
  hasMaintenanceAlert: boolean;
}

export interface EmergencyCredit {
  id: number;
  userId: number;
  amount: number;
  isUsed: boolean;
  createdAt: string; // or Date if parsed
  expiresAt: string; // or Date if parsed
}

export interface EmergencyCreditClaimResponse {
  message: string;
  credit: EmergencyCredit;
}
