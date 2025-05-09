import React from 'react';
import { useQuery } from 'react-query';
import { getUserDetails, getTransactionHistory } from '../services/api';
import Card from './ui/Card';
import TransferForm from './TransferForm';
import TransactionItem from './TransactionItem';
import BalanceChart from './BalanceChart';
import { CreditCard, RefreshCw } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { 
    data: userDetails,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
    refetch: refetchDetails
  } = useQuery('userDetails', getUserDetails, {
    refetchInterval: 5000, // every 5 seconds
  });

  const {
    data: transactions,
    isLoading: isLoadingTransactions,
    isError: isErrorTransactions,
    refetch: refetchTransactions
  } = useQuery('transactionHistory', getTransactionHistory, {
    refetchInterval: 5000, // every 5 seconds
  });

  const handleRefresh = () => {
    refetchDetails();
    refetchTransactions();
  };

  if (isLoadingDetails || isLoadingTransactions) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (isErrorDetails || isErrorTransactions) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-red-600 mb-2">Error loading data</h3>
        <p className="text-gray-600 mb-4">We couldn't load your account information.</p>
        <button 
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const balance = userDetails?.balance?.amount || 0;
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(balance);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Balance Card */}
      <Card 
        className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        headerRight={
          <button 
            onClick={handleRefresh} 
            className="p-1 hover:bg-blue-700 rounded-full transition-colors"
            aria-label="Refresh"
          >
            <RefreshCw size={18} />
          </button>
        }
      >
        <div className="flex items-center mb-6">
          <div className="p-3 bg-blue-700 rounded-full mr-4">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-blue-100">Current Balance</p>
            <h2 className="text-3xl font-bold">{formattedBalance}</h2>
          </div>
        </div>
        
        <div className="bg-blue-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-100 mb-2">Balance History</h3>
          {transactions && transactions.length > 0 ? (
            <BalanceChart 
              transactions={transactions} 
              currentBalance={balance} 
            />
          ) : (
            <p className="text-blue-200 text-sm">No transaction history available</p>
          )}
        </div>
      </Card>

      {/* Transfer Form */}
      <Card title="Send Money" className="lg:row-span-2">
        <TransferForm />
      </Card>

      {/* Transaction History */}
      <Card 
        title="Recent Transactions" 
        subtitle="Your latest activity"
        className="lg:col-span-2"
      >
        <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
          {transactions && transactions.length > 0 ? (
            transactions.map(transaction => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          ) : (
            <p className="py-4 text-gray-500 text-center">No transactions yet</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;