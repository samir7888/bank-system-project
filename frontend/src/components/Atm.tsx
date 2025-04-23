import React, { useState } from 'react';

// Import note images
import Thousand from '../assets/Thousand.jpeg';
import FiveHundred from '../assets/fivehundred.jpeg';
import OneHundred from '../assets/Hundred.jpeg';
import Fifty from '../assets/fifty.jpeg';
import Twenty from '../assets/twenty.jpeg';
import Ten from '../assets/ten.jpeg';

const ATMInterface = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [withdrawnAmount, setWithdrawnAmount] = useState<Record<string, number> | null>(null);
  const [dispensing, setDispensing] = useState(false);
  const [success, setSuccess] = useState(false);
interface INOTE {
    [key: string]: string;
}
  const noteImages:INOTE  = {
    '1000': Thousand, 
    '500': FiveHundred,
    '100': OneHundred,
    '50': Fifty,
    '20': Twenty,
    '10': Ten,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setError('');
  };

  const handleWithdraw = async () => {
    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (Number(amount) % 10 !== 0) {
      setError('Amount must be in multiples of 10');
      return;
    }

    setDispensing(true);

    try {
      const res = await fetch('http://localhost:3000/atm/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount) }),
      });

      const data = await res.json();

      if (res.ok) {
        setWithdrawnAmount(data.notes);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setWithdrawnAmount(null);
          setAmount('');
        }, 5000);
      } else {
        setError(data.error || 'Unable to dispense');
        setWithdrawnAmount(null);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong');
    } finally {
      setDispensing(false);
    }
  };

  const totalNotes = withdrawnAmount
    ? Object.values(withdrawnAmount).reduce((sum, count) => sum + count, 0)
    : 0;

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 bg-gray-900">
          <div className="bg-gray-700 p-6 rounded-lg border-4 border-gray-600 shadow-inner">
            <div className="bg-blue-900 h-40 rounded-md p-4 mb-4 flex flex-col justify-between shadow-inner">
              <div className="flex justify-between items-center text-blue-200">
                <span>ATM WITHDRAWAL</span>
                <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow">
                {dispensing ? (
                  <div className="text-center">
                    <div className="text-yellow-300 text-2xl font-bold mb-2">Processing...</div>
                    <div className="flex justify-center space-x-1">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                  </div>
                ) : success ? (
                  <div className="text-center">
                    <div className="text-green-300 text-2xl font-bold mb-2">Success!</div>
                    <div className="text-white">Please take your cash</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-white text-lg mb-2">Enter Amount:</div>
                    <div className="text-yellow-300 text-4xl font-bold flex items-center justify-center">
                     
                      Re {amount || '0'}
                    </div>
                  </div>
                )}
              </div>
              {error && <div className="bg-red-900 text-white p-2 rounded text-center">{error}</div>}
            </div>

            {!dispensing && !success && (
              <>
                <div className="mb-4">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={amount}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="bg-gray-800 text-white p-3 text-xl rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  />
                </div>

                <button
                  onClick={handleWithdraw}
                  disabled={dispensing}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-md flex items-center justify-center transition-all"
                >
                  <span>Withdraw</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Cash Dispenser */}
        <div className="bg-gray-700 p-4 relative overflow-hidden" style={{ minHeight: Math.max(120, totalNotes * 30) + 'px' }}>
          <div className="h-4 w-full bg-gray-800 rounded-t-md"></div>
          <div className="flex justify-center">
            <div className="relative w-64 " style={{ minHeight: '100px' }}>
              <div className="absolute inset-x-0 top-0 flex items-center justify-center">
                <div className="h-2 w-40 bg-black rounded-md"></div>
              </div>

              {withdrawnAmount &&
                Object.entries(withdrawnAmount).map(([denom, count]) =>
                  Array.from({ length: count }).map((_, idx) => (
                    <div
                      key={`${denom}-${idx}`}
                      className="animate-rise"
                      style={{
                        top: `${idx * 8}px`,
                        animationDelay: `${idx * 0.2}s`,
                        zIndex: 20 - idx,
                      }}
                    >
                      <img src={noteImages[denom]} alt={`${denom} note`} className="w-40 h-12 object-cover rounded-sm shadow-md" />
                    </div>
                  ))
                )}
            </div>
          </div>
          <div className="h-4 w-full bg-gray-800 rounded-b-md mt-1"></div>
        </div>
      </div>
    </div>
  );
};

// Animate cash notes
const styles = document.createElement('style');
styles.innerHTML = `
@keyframes rise {
  0% { transform: translateY(-20px) translateX(20%); opacity: 0; }
  20% { transform: translateY(0) translateX(20%); opacity: 1; }
  80% { transform: translateY(0) translateX(20%); opacity: 1; }
  100% { transform: translateY(40px) translateX(20%); opacity: 0; }
}
.animate-rise {
  animation: rise 4s ease-in-out forwards;
}
`;
document.head.appendChild(styles);

export default ATMInterface;
