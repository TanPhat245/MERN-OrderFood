import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://phatt4071:phatt4071@cluster0.2hnfb.mongodb.net/mern-orderfood').then(()=>console.log("DB Connected"));
}