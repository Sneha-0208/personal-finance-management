import React, { useState } from "react";
import "./accounts.css";

interface Account {
  type: string;
  balance: number;
}

const initialAccounts: Account[] = [
  { type: "Card", balance: 1200 },
  { type: "Cash", balance: -450 },
  { type: "Savings", balance: -1200 },
];

const Accounts: React.FC = () => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [newType, setNewType] = useState("");
  const [newBalance, setNewBalance] = useState("");

  const addAccount = () => {
    if (newType.trim() !== "" && newBalance !== "") {
      setAccounts([...accounts, { type: newType, balance: parseFloat(newBalance) }]);
      setNewType("");
      setNewBalance("");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Accounts</h2>

      {/* Account List Section */}
      <div className="account-list">
        {accounts.map((account, index) => (
          <div key={index} className="account-box">
            <div className="icon">📌</div>
            <div className="account-info">
              <h3>{account.type}</h3>
              <p className={account.balance < 0 ? "negative" : "positive"}>
                ₹{account.balance.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Account Table Section */}
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
              <td className={account.balance < 0 ? "negative" : "positive"}>
                ₹{account.balance.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Account Form */}
      <div className="form-container">
        <h3>Add New Account</h3>
        <input
          type="text"
          placeholder="Account Type"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Initial Balance"
          value={newBalance}
          onChange={(e) => setNewBalance(e.target.value)}
          className="input"
        />
        <button onClick={addAccount} className="button">+ Add Account</button>
      </div>
    </div>
  );
};

export default Accounts;
