import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DBconnection } from "./database/DBconnection";
import transactionRoutes from "./routes/transRoutes";

// import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middlewares/errormiddleware";

import userRoutes from "./routes/userRoutes";
// import transactionRoutes from "./routes/transactionRoutes"; 

dotenv.config();

const app = express();

app.use(
    cors()
);
// app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({extended:true}));



DBconnection();

app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

// app.use(ErrorMiddleware);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
