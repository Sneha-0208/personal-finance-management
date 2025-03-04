"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.verifyOTP = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchema_1 = require("../models/UserSchema");
const sendEmail_1 = require("../utils/sendEmail");
const asyncerror_1 = require("../middlewares/asyncerror");
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
exports.registerUser = (0, asyncerror_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const existingUser = yield UserSchema_1.User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        ;
        const otp = generateOTP();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        const newUser = new UserSchema_1.User({
            email,
            password,
            otp,
            otpExpires,
            isVerified: false,
        });
        yield newUser.save();
        yield (0, sendEmail_1.sendOTP)(email, otp);
        res.status(200).json({ message: "OTP sent to email. Please verify." });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}));
exports.verifyOTP = (0, asyncerror_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        const user = yield UserSchema_1.User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }
        ;
        if (user.otp !== otp || new Date() > user.otpExpires) {
            res.status(400).json({ message: "Invalid or expired OTP" });
            return;
        }
        ;
        const salt = yield bcryptjs_1.default.genSalt(10);
        user.Password = yield bcryptjs_1.default.hash(user.Password, salt);
        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        yield user.save();
        res.status(200).json({ message: "Email verified. You can now login." });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}));
exports.loginUser = (0, asyncerror_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield UserSchema_1.User.findOne({ email });
        if (!user || !user.isVerified) {
            res.status(400).json({ message: "User not found or not verified" });
            return;
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.Password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ _id: user.id, email: user.Email, token });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}));
