import mongoose from "mongoose";

//creating a database

const connectDB =async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected successfully')
    } catch (error){
        console.log(error)
    }
}
