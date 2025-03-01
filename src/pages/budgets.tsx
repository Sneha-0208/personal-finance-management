import React, { useState } from "react";

interface Budget {
  category: string;
  limit: number;
  spent: number;
}

const initialBudgets: Budget[] = [
  { category: "Food", limit: 500, spent: 200 },
  { category: "Rent", limit: 1000, spent: 1000 },
  { category: "Entertainment", limit: 300, spent: 150 },
  { category: "Transport", limit: 200, spent: 50 },
];

const Budgets: React.FC = () => {
  const [budgets, setBudgets] = useState(initialBudgets);
  const [newCategory, setNewCategory] = useState("");
  const [newLimit, setNewLimit] = useState(0);

  const addBudget = () => {
    if (newCategory && newLimit > 0) {
      setBudgets([...budgets, { category: newCategory, limit: newLimit, spent: 0 }]);
      setNewCategory("");
      setNewLimit(0);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Budgets</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Category</th>
            <th className="border p-2">Limit</th>
            <th className="border p-2">Spent</th>
            <th className="border p-2">Remaining</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{budget.category}</td>
              <td className="border p-2">${budget.limit}</td>
              <td className="border p-2">${budget.spent}</td>
              <td className="border p-2">${budget.limit - budget.spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold">Add New Budget</h3>
        <input
          type="text"
          placeholder="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Limit"
          value={newLimit}
          onChange={(e) => setNewLimit(Number(e.target.value))}
          className="border p-2 mr-2"
        />
        <button onClick={addBudget} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
    </div>
  );
};

export default Budgets;
