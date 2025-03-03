import React, { useState, useEffect } from "react";
import "./budgets.css";

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface Budget {
  limit: number;
  spent: number;
}

const categories: Category[] = [
  { id: 1, name: "Shopping", icon: "🛍️" },
  { id: 2, name: "Baby", icon: "🍼" },
  { id: 3, name: "Beauty", icon: "💄" },
  { id: 4, name: "Bills", icon: "🧾" },
  { id: 5, name: "Car", icon: "🚗" },
];

const BudgetPage: React.FC = () => {
  const [budgets, setBudgets] = useState<{ [key: number]: Budget }>({});

  // Load budgets from local storage
  useEffect(() => {
    const storedBudgets = localStorage.getItem("budgets");
    if (storedBudgets) {
      setBudgets(JSON.parse(storedBudgets));
    }
  }, []);

  // Save budgets to local storage
  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  const handleSetBudget = (categoryId: number) => {
    const limit = parseFloat(prompt("Enter Budget Limit:") || "0");
    if (limit > 0) {
      setBudgets((prev) => ({
        ...prev,
        [categoryId]: { limit, spent: 0 },
      }));
    }
  };

  const handleAddExpense = (categoryId: number) => {
    const expense = parseFloat(prompt("Enter Expense Amount:") || "0");
    if (expense > 0 && budgets[categoryId]) {
      setBudgets((prev) => ({
        ...prev,
        [categoryId]: {
          ...prev[categoryId],
          spent: prev[categoryId].spent + expense,
        },
      }));
    }
  };

  return (
    <div className="budget-container">
      <h2>Budget Management</h2>
      <div className="budget-list">
        {categories.map((category) => {
          const budget = budgets[category.id];
          return (
            <div key={category.id} className="budget-card">
              <div className="category-header">
                <span className="icon">{category.icon}</span>
                <span className="name">{category.name}</span>
              </div>

              {budget ? (
                <>
                  <p>Limit: ₹{budget.limit.toFixed(2)}</p>
                  <p>Spent: ₹{budget.spent.toFixed(2)}</p>
                  <p>Remaining: ₹{(budget.limit - budget.spent).toFixed(2)}</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${(budget.spent / budget.limit) * 100}%`,
                        backgroundColor:
                          budget.spent > budget.limit ? "red" : "green",
                      }}
                    ></div>
                  </div>
                  <button onClick={() => handleAddExpense(category.id)}>
                    Add Expense
                  </button>
                </>
              ) : (
                <button onClick={() => handleSetBudget(category.id)}>
                  Set Budget
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetPage;
