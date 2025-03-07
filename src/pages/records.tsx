import React, { useState } from "react";

type Transaction = {
  id: number;
  name: string;
  date: string;
  category: string;
  amount: number;
  type: "Income" | "Expense";
};

const Records: React.FC = () => {
  // State for transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // State for categories using useState
  const [categories] = useState<string[]>(["Food", "Transport", "Shopping", "Entertainment", "Rent", "Salary", "Investment"]);

  // State for new transaction
  const [newTransaction, setNewTransaction] = useState<Transaction>({
    id: 0,
    name: "",
    date: "",
    category: categories.length > 0 ? categories[0] : "", // Set default category
    amount: 0,
    type: "Expense",
  });

  // Function to add transaction
  const handleAddTransaction = () => {
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
    setNewTransaction({
      id: 0,
      name: "",
      date: "",
      category: categories.length > 0 ? categories[0] : "",
      amount: 0,
      type: "Expense",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Records</h2>

      {/* Form to Add Transactions */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <input
          type="text"
          placeholder="Transaction Name"
          value={newTransaction.name}
          onChange={(e) => setNewTransaction({ ...newTransaction, name: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        {/* Category Dropdown */}
        <select
          value={newTransaction.category}
          onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: Number(e.target.value) })}
          className="border p-2 rounded w-full mb-2"
        />
        {/* Type Dropdown */}
        <select
          value={newTransaction.type}
          onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value as "Income" | "Expense" })}
          className="border p-2 rounded w-full mb-2"
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <button
          onClick={handleAddTransaction}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Transaction
        </button>
      </div>

      {/* Transactions Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Type</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td className={`border p-2 ${tx.type === "Income" ? "text-green-600" : "text-red-600"}`}>
                {tx.type}
              </td>
              <td className="border p-2">{tx.date}</td>
              <td className="border p-2">{tx.category}</td>
              <td className="border p-2">${tx.amount}</td>
              <td className="border p-2">{tx.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
