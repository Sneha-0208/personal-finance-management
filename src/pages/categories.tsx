import React, { useState } from "react";

interface Category {
  name: string;
  type: "Income" | "Expense";
}

const initialCategories: Category[] = [
  { name: "Salary", type: "Income" },
  { name: "Freelance", type: "Income" },
  { name: "Food", type: "Expense" },
  { name: "Rent", type: "Expense" },
];

const Categories: React.FC = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [categoryType, setCategoryType] = useState<"Income" | "Expense">("Expense");

  const addCategory = () => {
    if (newCategory) {
      setCategories([...categories, { name: newCategory, type: categoryType }]);
      setNewCategory("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Income & Expense Categories</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Category</th>
            <th className="border p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{category.name}</td>
              <td className={`border p-2 ${category.type === "Income" ? "text-green-500" : "text-red-500"}`}>
                {category.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold">Add New Category</h3>
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={categoryType}
          onChange={(e) => setCategoryType(e.target.value as "Income" | "Expense")}
          className="border p-2 mr-2"
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button onClick={addCategory} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
    </div>
  );
};

export default Categories;
