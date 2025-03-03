import React, { useState } from "react";
import "./records.css";

interface Transaction {
  date: string;
  category: string;
  paymentMethod: string;
  amount: number;
  type: "income" | "expense";
  icon: string;
}

const Records: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { date: "Mar 03, Monday", category: "Sport", paymentMethod: "Cash", amount: -42, type: "expense", icon: "🏸" },
    { date: "Mar 03, Monday", category: "Baby", paymentMethod: "Card", amount: -45, type: "expense", icon: "🍼" },
    { date: "Mar 01, Saturday", category: "Received from deleted", paymentMethod: "Card", amount: 1200, type: "income", icon: "🔄" },
    { date: "Mar 01, Saturday", category: "Beauty", paymentMethod: "Cash", amount: -450, type: "expense", icon: "💄" },
  ]);

  const [newTransaction, setNewTransaction] = useState<Transaction>({
    date: "",
    category: "",
    paymentMethod: "",
    amount: 0,
    type: "expense",
    icon: "💰",
  });

  const handleAddTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ date: "", category: "", paymentMethod: "", amount: 0, type: "expense", icon: "💰" });
  };

  return (
    <div className="records-container">
      {/* <header className="header">
        <button className="menu-btn">☰</button>
        <h2>MyMoney</h2>
        <button className="search-btn">🔍</button>
      </header>

      <div className="summary">
        <div className="summary-item expense">EXPENSE ₹537.00</div>
        <div className="summary-item income">INCOME ₹1,200.00</div>
        <div className="summary-item total">TOTAL ₹663.00</div>
      </div>

      <div className="transactions">
        {transactions.map((tx, index) => (
          <div key={index} className="transaction">
            <div className="transaction-date">{tx.date}</div>
            <div className="transaction-item">
              <span className="icon">{tx.icon}</span>
              <div className="details">
                <p className="category">{tx.category}</p>
                <p className="payment">{tx.paymentMethod}</p>
              </div>
              <p className={`amount ${tx.type === "expense" ? "expense-text" : "income-text"}`}>
                {tx.amount < 0 ? `-₹${Math.abs(tx.amount)}` : `₹${tx.amount}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="add-btn" onClick={handleAddTransaction}>+</button>

      <nav className="bottom-nav">
        <button className="nav-btn active">📖 Records</button>
        <button className="nav-btn">📊 Analysis</button>
        <button className="nav-btn">📝 Budgets</button>
        <button className="nav-btn">🏦 Accounts</button>
        <button className="nav-btn">🏷️ Categories</button>
      </nav> */}
      <p>cdjhdsj</p>
    </div>
  );
};

export default Records;
