import mongoose, { mongo } from "mongoose";

const gameSchema=new mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Room"
    },
    players:[{
        playerId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        attack:{
            type:Number,
            required:true,
        },
        strength:{
            type:Number,
            required:true,
        },
        health:{
            type:Number,
            required:true,
        }
    }]
    
})

export default mongoose.model("Games",gameSchema);