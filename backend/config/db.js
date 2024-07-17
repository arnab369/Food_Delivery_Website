import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arnabmajumder:2398@cluster0.s2kqog1.mongodb.net/Food_Delivery_Website').then(()=>console.log("DB Connected"));
}