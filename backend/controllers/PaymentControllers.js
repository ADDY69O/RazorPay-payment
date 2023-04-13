import { instance } from "../server.js";
 
 export const checkout=async(req,res)=>{
    try{
        console.log(req.body);
   
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
    
    res.status(200).json({message:"done"});
   
}


