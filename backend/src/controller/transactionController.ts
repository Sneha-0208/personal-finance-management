import { Request, Response, NextFunction } from "express";
import { Transaction } from "../models/TransSchema";
import { catchAsyncError } from "../middlewares/asyncerror";
import { Document } from "mongoose";
interface ITransaction extends Document {
  user: string;
  amount: number;
  category: string;
  date: Date;
  type: "income" | "expense";
  name: string;
}

export const addTransaction = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {name, amount, category, date, type } = req.body;
    
    const newTransaction = new Transaction({
      user: (req as any).user.id, 
      amount,
      category,
      date,
      type,
      name
    });

    await newTransaction.save();
    res.status(201).json({
      success: true,
      message: "Transaction added successfully",
      transaction: newTransaction,
    });
  }
);


export const getTransactions = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const transactions = await Transaction.find({ user: (req as any).user.id });
    res.status(200).json({
      success: true,
      count: transactions.length,
      transactions,
    });
  }
);

export const updateTransaction = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const updatedData = req.body;

    const transaction = await Transaction.findByIdAndUpdate(id, updatedData, { new: true });
    if (!transaction) {
      res.status(404).json({ message: "Transaction not found" });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      transaction,
    });
  }
);

export const deleteTransaction = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      res.status(404).json({ message: "Transaction not found" });
      return;
    }
    await transaction.deleteOne();
    res.status(200).json({
      success: true,
      message: "Transaction deleted successfully",
    });
  }
);

export function generateSummaryChartData(transactions: ITransaction[]) {
    let totalIncome = 0;
    let totalExpense = 0;
  
    transactions.forEach((tx) => {
      if (tx.type === "income") {
        totalIncome += tx.amount;
      } else if (tx.type === "expense") {
        totalExpense += tx.amount;
      }
    });
  
    const savings = totalIncome - totalExpense;
  
    const labels = ["Total Income", "Total Expense", "Savings"];
    const data = [totalIncome, totalExpense, savings];
  
    const pieData = { labels, data };
    const barData = { labels, data };
  
    return { totalIncome, totalExpense, savings, pieData, barData };
  }
  
  export function generateCategoryWiseExpenseChartData(transactions: ITransaction[]) {
    const categoryMap: { [category: string]: number } = {};
  
    transactions.forEach((tx) => {
      if (tx.type === "expense") {
        categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
      }
    });
  
    const labels = Object.keys(categoryMap);
    const data = labels.map((label) => categoryMap[label]);
  
    return { labels, data };
  }
  