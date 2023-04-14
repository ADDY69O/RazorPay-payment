import mongoose from "mongoose";


const connectDb=async()=>{

    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected")).catch((err)=>console.log(err));

}



export default connectDb;