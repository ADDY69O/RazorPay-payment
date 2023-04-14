import express from 'express'
import { config } from 'dotenv';
import cors from "cors";
import route from './routes/Paymentrouter.js'
import connectDb from './config/db.js'

config({path:"./config/config.env"})
export const app = express ();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDb();
app.get('/',(req,res)=>{
    res.send("backend ")
})
app.use("/api",route);

app.get("/api/getKey",(req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
})









