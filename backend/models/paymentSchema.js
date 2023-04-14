import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema({
    razorpay_order_id:{
        type:String,
        require:true
    },
    razorpay_payment_id:{
        type:String,
        require:true
    },
    razorpay_signature:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    }

})

const recipt = mongoose.model('recipt',paymentSchema);

export default recipt;