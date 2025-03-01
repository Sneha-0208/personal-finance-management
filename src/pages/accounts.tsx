import React, { useState } from "react";

interface Account {
  type: string;
  balance: number;
}

const initialAccounts: Account[] = [
  { type: "Cash", balance: 500 },
  { type: "Bank Account", balance: 2000 },
  { type: "Savings", balance: 3000 },
];

const Accounts: React.FC = () => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [newType, setNewType] = useState("");
  const [newBalance, setNewBalance] = useState(0);

  const addAccount = () => {
    if (newType && newBalance >= 0) {
      setAccounts([...accounts, { type: newType, balance: newBalance }]);
      setNewType("");
      setNewBalance(0);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Accounts</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Account Type</th>
            <th className="border p-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{account.type}</td>
              <td className="border p-2">${account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Add New Account</h3>
        <input
          type="text"
          placeholder="Account Type"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Initial Balance"
          value={newBalance}
          onChange={(e) => setNewBalance(Number(e.target.value))}
          className="border p-2 mr-2"
        />
        <button onClick={addAccount} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
    </div>
  );
};

export default Accounts;
