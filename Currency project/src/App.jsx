import { useState } from 'react';
import InputBox from './InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");

  const currencyOptions = ["usd", "inr", "eur", "gbp"];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md p-5 bg-white rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Simple Currency Input</h1>
        <InputBox
          label="Enter Amount"
          amount={amount}
          onAmountChange={(val) => setAmount(val)}
          onCurrencyChange={(cur) => setCurrency(cur)}
          currencyOptions={currencyOptions}
          selectCurrency={currency}
        />
        <p className="mt-4 text-center text-gray-700">
          You entered: <strong>{amount}</strong> {currency.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default App;
