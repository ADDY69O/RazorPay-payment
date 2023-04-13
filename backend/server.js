import {app} from "./app.js";
import Razorpay from "razorpay"


const PORT = process.env.PORT;



export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.listen(PORT,(req,res)=>{
    console.log(`Listening on PORT ${PORT}`)
})