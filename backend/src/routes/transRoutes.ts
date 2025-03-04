import express from "express";
import { addTransaction, getTransactions, updateTransaction, deleteTransaction } from "../controller/transactionController";
// import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

// Protect all transaction routes with authentication middleware
router.post("/", addTransaction);
router.get("/", getTransactions);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
