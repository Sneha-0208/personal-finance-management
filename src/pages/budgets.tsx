import React, { useState } from "react";
import categories from "./categories";

interface Budget {
  category: string;
  limit: number;
  isSet: boolean;
}

const Budgets: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [budgetLimit, setBudgetLimit] = useState("");
  const [editingCategory, setEditingCategory] = useState<string | null>(null);

  const handleSetBudget = () => {
    if (!selectedCategory || !budgetLimit) return;
    setBudgets((prevBudgets) => {
      const updatedBudgets = prevBudgets.map((b) =>
        b.category === selectedCategory ? { ...b, limit: Number(budgetLimit), isSet: true } : b
      );
      return prevBudgets.some((b) => b.category === selectedCategory)
        ? updatedBudgets
        : [...prevBudgets, { category: selectedCategory, limit: Number(budgetLimit), isSet: true }];
    });
    setBudgetLimit("");
    setEditingCategory(null);
  };

  const handleEditBudget = (category: string, limit: number) => {
    setSelectedCategory(category);
    setBudgetLimit(limit.toString());
    setEditingCategory(category);
  };

  const handleDeleteBudget = (category: string) => {
    setBudgets((prevBudgets) => prevBudgets.filter((b) => b.category !== category));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Set Your Budget</h2>
      <div className="mb-4 flex items-center gap-2">
        <select
          className="border p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>Select Category</option>
          {categories.map((category: string) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter Budget"
          value={budgetLimit}
          onChange={(e) => setBudgetLimit(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={handleSetBudget}
          disabled={!selectedCategory || !budgetLimit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingCategory ? "Update Budget" : "Set Budget"}
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Category</th>
            <th className="border p-2">Budget Limit</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => (
            <tr key={budget.category} className="text-center">
              <td className="border p-2">{budget.category}</td>
              <td className="border p-2">${budget.limit}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEditBudget(budget.category, budget.limit)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBudget(budget.category)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budgets;
