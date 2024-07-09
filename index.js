import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import RazorPay from "razorpay";
import cors from "cors";
dotenv.config();
// payment
export const instance =new RazorPay({
    key_id:process.env.RazorPay_key,
    key_secret:process.env.RazorPay_Secret,
})
const app=express();
app.use(express.json());
app.use(cors());
const port =process.env.PORT;;
app.get('/',(req,res)=>{
    res.send("Server is working");
});
app.use("/uploads",express.static("uploads"))
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';
app.use("/api",userRoutes);
app.use("/api",courseRoutes);
app.use("/api",adminRoutes);
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDb()
});