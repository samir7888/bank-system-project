import React from 'react';
import { format } from 'date-fns';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Transaction } from '../types';
import { useAuth } from '../context/AuthContext';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { user } = useAuth();
  const isIncoming = transaction.toUserId === user?.id;
  
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(transaction.amount);
  
  const formattedDate = format(new Date(transaction.timestamp), 'MMM d, yyyy h:mm a');
  
  return (
    <div className="flex items-center py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <div className={`p-2.5 rounded-full mr-4 ${isIncoming ? 'bg-green-100' : 'bg-red-100'}`}>
        {isIncoming ? (
          <ArrowDownLeft className="h-5 w-5 text-green-600" />
        ) : (
          <ArrowUpRight className="h-5 w-5 text-red-600" />
        )}
      </div>
      
      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-900">
          {isIncoming 
            ? `Received from ${transaction.fromUser.number}`
            : `Sent to ${transaction.toUser.number}`
          }
        </p>
        <p className="text-xs text-gray-500">{formattedDate}</p>
      </div>
      
      <div className={`font-medium ${isIncoming ? 'text-green-600' : 'text-red-600'}`}>
        {isIncoming ? '+' : '-'}{amount}
      </div>
    </div>
  );
};

export default TransactionItem;