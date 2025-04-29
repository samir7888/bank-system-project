import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Transaction } from '../types';
import { useAuth } from '../context/AuthContext';
import { format, parseISO } from 'date-fns';

interface BalanceChartProps {
  transactions: Transaction[];
  currentBalance: number;
}

const BalanceChart: React.FC<BalanceChartProps> = ({ transactions, currentBalance }) => {
  const { user } = useAuth();

  const data = useMemo(() => {
    if (!transactions.length || !user) return [];

    const sortedTransactions = [...transactions].sort((a, b) => 
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    let runningBalance = currentBalance;
    const balancePoints = [];

    // Add current balance point first
    balancePoints.push({
      date: format(new Date(), 'MMM dd'),
      amount: currentBalance,
    });

    // Calculate previous balance points from transactions
    for (let i = sortedTransactions.length - 1; i >= 0; i--) {
      const tx = sortedTransactions[i];
      
      if (tx.fromUserId === user.id) {
        runningBalance += tx.amount; // Add back the amount that was sent
      } else if (tx.toUserId === user.id) {
        runningBalance -= tx.amount; // Subtract the amount that was received
      }
      
      balancePoints.unshift({
        date: format(parseISO(tx.timestamp), 'MMM dd'),
        amount: runningBalance,
      });
    }

    return balancePoints;
  }, [transactions, currentBalance, user]);

  if (data.length <= 1) {
    return (
      <div className="flex justify-center items-center h-40 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Not enough data to display chart</p>
      </div>
    );
  }

  const formatter = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="h-64 w-full bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickLine={false}
          />
          <YAxis 
            tickFormatter={formatter} 
            tick={{ fontSize: 12 }}
            tickLine={false}
            width={80}
          />
          <Tooltip 
            formatter={(value) => [formatter(value as number), 'Balance']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#1E3A8A" 
            strokeWidth={2} 
            dot={{ r: 4, strokeWidth: 2 }} 
            activeDot={{ r: 6, stroke: '#1E3A8A', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;