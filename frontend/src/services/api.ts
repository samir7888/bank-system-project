
import axios from 'axios';
import { LoginFormData, TransferFormData, Transaction, UserWithBalance, EmergencyCreditStatusResponse, MaintenanceStatus, EmergencyCreditClaimResponse } from '../types';
import { AlertData } from '../components/MaintanaceAlert';
import { toast } from '../hooks/use-toast';

const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Include cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (data: LoginFormData) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const getUserDetails = async () => {
  const response = await api.get<UserWithBalance>('/auth/me');
  localStorage.setItem('userName', response.data.balance.user.name);
  localStorage.setItem('id', String(response.data.user.id));
  return response.data;
};

export const getTransactionHistory = async () => {
  const response = await api.get<Transaction[]>('/transfer/history');
  return response.data;
};

export const transferMoney = async (data: TransferFormData) => {
  const response = await api.post('/transfer/send', data);

  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get('/admin/users');
  return response.data;
}
export const getEmergencyWalletStatus = async () => {
  const id = localStorage.getItem('id')
  const response = await api.get<EmergencyCreditStatusResponse>(`/emergency-credit/status/${id}`);
  return response.data;
}
export const createMaintenanceAlert = async (data: AlertData) => {
  console.log(data)
  const response = await api.post('emergency-credit/maintenance-alert', data);
  toast({
    title: "Success!",
    description: "Maintenance alert created successfully.",
  })
  return response.data;
}
export const ClaimEmergencyWallet = async () => {
  const response = await api.post<EmergencyCreditClaimResponse>("/emergency-credit/claim");
  return response.data;
}



export const checkStatusOfMaintenance = async () => {
  const response = await api.get<MaintenanceStatus>('/emergency-credit/maintenance-alert/status');
  return response.data;
}

export const settleOfflineTransfer = async ({ receiver, amount }: { receiver: string, amount: string }) => {
  const response = await api.post("/emergency-credit/settle", {
    userId: receiver,
    amountSpent: amount
  });
  return response.data;
}


interface IisMaintenanceActive {
  isActive: boolean;
}
export const isMaintenanceActive = async () => {
  const response = await api.get<IisMaintenanceActive>('/emergency-credit/maintenance/active');
  return response.data;
}

export const freezeUser = async (id: number) => {
  const response = await api.post(`/admin/users/${id}/freeze`);
  toast({
    title: "Success!",
    description: "User freeze successfully.",
  })
  return response.data;
}
export const unfreezeUser = async (id: number) => {
  const response = await api.post(`/admin/users/${id}/unfreeze`);
  toast({
    title: "Success!",
    description: "User unfreeze successfully.",
  })
  return response.data;
}





export default api;