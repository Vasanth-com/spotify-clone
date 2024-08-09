import mongoose from "mongoose";

const connectDB = async() =>{
    mongoose.connection.on("connected ",()=>{
        console.log("connection established");
        
    })
    await mongoose.connect(`mongodb+srv://vasanth:vasanth2519@cluster0.zkxkka3.mongodb.net/spotify`)
}

export default connectDB