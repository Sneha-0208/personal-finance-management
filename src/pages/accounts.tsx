import React, { useState } from "react";
import "./accounts.css";

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
    <div className="accounts-container">
      <h2 className="heading">Accounts</h2>
      <table className="account-table">
        <thead>
          <tr>
            <th>Account Type</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.type}</td>
              <td>${account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-account-form">
        <h3>Add New Account</h3>
        <input
          type="text"
          placeholder="Account Type"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Initial Balance"
          value={newBalance}
          onChange={(e) => setNewBalance(Number(e.target.value))}
        />
        <button onClick={addAccount}>Add</button>
      </div>
    </div>
  );
};

export default Accounts;
