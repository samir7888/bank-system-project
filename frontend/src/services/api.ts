import axios from 'axios';
import { LoginFormData, TransferFormData, Transaction, UserWithBalance } from '../types';
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
export const createMaintenanceAlert = async (data: AlertData) => {
  console.log(data)
  const response = await api.post('emergency-credit/maintenance-alert', data);
    toast({
    title: "Success!",
    description: "Maintenance alert created successfully.",
  })
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