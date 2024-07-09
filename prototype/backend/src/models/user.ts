import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true
    },
    wins:{
        type:Number,
    },
    loss:{
        type:Number
    }
})

export default mongoose.model("User",userSchema);