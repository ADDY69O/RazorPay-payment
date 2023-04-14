import { instance } from "../server.js";
import crypto from 'crypto'
import recipt from "../models/paymentSchema.js";
 
 export const checkout=async(req,res)=>{
    try{
       
   
    const options = {
        amount: Number(req.body.amount*100) ,
        currency: "INR",
      
      };
     const order=await instance.orders.create(options);
        // console.log(orders);
    res.status(200).json({message:"done",order});
    }catch(err){
        res.status(400).json(err);
    }
}
 export const checkVerification=async(req,res)=>{
  
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;

    let body=razorpay_order_id + "|" +razorpay_payment_id;


    var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
                                    .update(body.toString())
                                    .digest('hex');
                                
    if(razorpay_signature===expectedSignature){
        const data = await recipt.create({razorpay_order_id,razorpay_payment_id,razorpay_signature});
        if(!data){
            res.send(400).json({error:"Internal Server Error"})
        }
        
     
        res.redirect(`https://paymentinte.netlify.app`)

    }
    else{

        res.status(400).json({sucess:false});
    }
       
   
}


