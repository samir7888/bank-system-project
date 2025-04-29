import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
import Alert from './ui/Alert';
import { TransferFormData } from '../types';
import { transferMoney } from '../services/api';
import { useMutation, useQueryClient } from 'react-query';

const TransferForm: React.FC = () => {
  const [formData, setFormData] = useState<TransferFormData>({
    to: '',
    amount: '',
  });
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const queryClient = useQueryClient();
  
  const mutation = useMutation(transferMoney, {
    onSuccess: () => {
      setAlert({ type: 'success', message: 'Transfer successful!' });
      setFormData({ to: '', amount: '' });
      
      // Invalidate queries to refresh data
      queryClient.invalidateQueries('userDetails');
      queryClient.invalidateQueries('transactionHistory');
      
      // Auto-dismiss success message
      setTimeout(() => setAlert(null), 5000);
    },
    onError: (error: any) => {
      setAlert({ 
        type: 'error', 
        message: error.response?.data?.message || 'Transfer failed. Please try again.' 
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'amount') {
      // Only allow numeric input with up to 2 decimal places
      if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.to || !formData.amount) {
      setAlert({ type: 'error', message: 'Please fill all fields' });
      return;
    }
    
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      setAlert({ type: 'error', message: 'Please enter a valid amount' });
      return;
    }
    
    // Submit transfer
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {alert && (
        <Alert 
          type={alert.type} 
          message={alert.message} 
          dismissible 
          onDismiss={() => setAlert(null)}
        />
      )}
      
      <Input
        label="Recipient Phone Number"
        name="to"
        placeholder="e.g., 1111111111"
        value={formData.to}
        onChange={handleChange}
        required
      />
      
      <Input
        label="Amount"
        name="amount"
        type="text"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      
      <Button 
        type="submit"
        fullWidth
        disabled={mutation.isLoading}
        icon={<Send size={18} />}
      >
        {mutation.isLoading ? 'Sending...' : 'Send Money'}
      </Button>
    </form>
  );
};

export default TransferForm;