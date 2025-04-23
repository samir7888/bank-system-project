import './App.css'
import ATMInterface from './components/Atm'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <h1 className="text-3xl font-bold text-white mb-8">
        Bank<span className="text-blue-400">Express</span> ATM
      </h1>
      
      <ATMInterface />
      
      <div className="mt-8 text-gray-400 text-center">
        <p>Please insert your card and enter your PIN to begin</p>
        <p className="text-sm mt-2">© 2025 BankExpress. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App