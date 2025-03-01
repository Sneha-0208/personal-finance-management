import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import "./Categories.css";

interface Category {
  name: string;
  type: "Income" | "Expense";
}

const initialCategories: Category[] = [
  { name: "Salary", type: "Income" },
  { name: "Coupons", type: "Income" },
  { name: "Grants", type: "Income" },
  { name: "Refunds", type: "Income" },
  { name: "Lottery", type: "Income" },
  { name: "Freelance", type: "Income" },
  { name: "Sale", type: "Income" },
  { name: "Rental", type: "Income" },
  { name: "Awards", type: "Income" },
  { name: "Food", type: "Expense" },
  { name: "Rent", type: "Expense" },
  { name: "Baby", type: "Expense" },
  { name: "Beauty", type: "Expense" },
  { name: "Bills", type: "Expense" },
  { name: "Car", type: "Expense" },
  { name: "Clothing", type: "Expense" },
  { name: "Education", type: "Expense" },
  { name: "Electronics", type: "Expense" },
  { name: "Entertainment", type: "Expense" },
  { name: "Health", type: "Expense" },
  { name: "Home", type: "Expense" },
  { name: "Insurance", type: "Expense" },
  { name: "Shopping", type: "Expense" },
  { name: "Social", type: "Expense" },
  { name: "Sports", type: "Expense" },
  { name: "Tax", type: "Expense" },
  { name: "Telephone", type: "Expense" },
  { name: "Transportation", type: "Expense" },
];

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState<string>("");
  const [categoryType, setCategoryType] = useState<"Income" | "Expense">("Income");

  const toggleDropdown = (categoryName: string) => {
    setDropdownOpen(dropdownOpen === categoryName ? null : categoryName);
  };

  const handleDelete = (categoryName: string) => {
    setCategories(categories.filter((category) => category.name !== categoryName));
    setDropdownOpen(null);
  };

  const handleEdit = (categoryName: string) => {
    const newName = prompt("Enter new category name:", categoryName);
    if (newName) {
      setCategories(
        categories.map((category) =>
          category.name === categoryName ? { ...category, name: newName } : category
        )
      );
    }
    setDropdownOpen(null);
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim() === "") return;
    setCategories([...categories, { name: newCategory.trim(), type: categoryType }]);
    setNewCategory("");
  };

  return (
    <div className="container">
      <h2 className="heading">Income & Expense Categories</h2>

      {/* Income Categories */}
      <div className="section">
        <h3 className="section-title income-title">Income Categories</h3>
        <ul className="category-list">
          {categories
            .filter((category) => category.type === "Income")
            .map((category) => (
              <li key={category.name} className="category-item">
                <span className="category-name">{category.name}</span>
                <button onClick={() => toggleDropdown(category.name)} className="options-button">
                  <FaEllipsisV />
                </button>

                {dropdownOpen === category.name && (
                  <div className="dropdown">
                    <button onClick={() => handleEdit(category.name)} className="dropdown-button">Edit</button>
                    <button onClick={() => handleDelete(category.name)} className="dropdown-button delete-button">Delete</button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* Expense Categories */}
      <div className="section">
        <h3 className="section-title expense-title">Expense Categories</h3>
        <ul className="category-list">
          {categories
            .filter((category) => category.type === "Expense")
            .map((category) => (
              <li key={category.name} className="category-item">
                <span className="category-name">{category.name}</span>
                <button onClick={() => toggleDropdown(category.name)} className="options-button">
                  <FaEllipsisV />
                </button>

                {dropdownOpen === category.name && (
                  <div className="dropdown">
                    <button onClick={() => handleEdit(category.name)} className="dropdown-button">Edit</button>
                    <button onClick={() => handleDelete(category.name)} className="dropdown-button delete-button">Delete</button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* Add New Category Form */}
      <div className="form-container">
        <h3 className="form-title">Add New Category</h3>
        <form onSubmit={handleAddCategory} className="form">
          <input
            type="text"
            placeholder="Category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="form-input"
            required
          />
          <select value={categoryType} onChange={(e) => setCategoryType(e.target.value as "Income" | "Expense")} className="form-select">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button type="submit" className="form-button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Categories;
