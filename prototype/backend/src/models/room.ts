import mongoose from "mongoose";

const roomSchema=new mongoose.Schema({
    roomId:{
        type:Number,
        required:true,

    },
    players:[{type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }],

})

export default mongoose.model("Room",roomSchema);