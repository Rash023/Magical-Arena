import Room from "../models/room";
import games from "../models/games";
import user from "../models/user";

async function generateStats(playerId:any){
    const attack= Math.floor(Math.random() * 91) + 10;
    const strength= Math.floor(Math.random() * 91) + 10;
    const health = Math.floor(Math.random() * 91) + 10;
    return {playerId,attack,strength,health};
}
export async function startGame(req:any,res:any){
    const {roomId}=req.body;
    try{
        const room =await Room.findOne({roomId:roomId});
      
        if(!room){
            return res.status(411).json({message:"Invalid room"});
        }
        if(room.players.length<2){
            return res.status(411).json({message:"Cannot start the game!"})
        }
       
        const p1=room.players[0]._id;
        const p2=room.players[1]._id;
        const stats=[];
        stats.push(generateStats(p1));
        stats.push(generateStats(p2));
        console.log(stats);
        const newgame=await games.create({roomId:room._id,players:stats});
        return res.status(200).json({data:newgame,message:"New game started!"});
    }
    catch(e){
        console.log(e);
        return res.status(500).json({

            message:"Internal server error!"
        })
    }
}

export async function updateStats(req:any,res:any){
    const {damage,roomId,flag}=req.body;
    try{
        const game=await games.findOne({roomId:roomId});
        if(!game){
            return res.status(411).json({message:"Room not found!"});
        }
        if(flag){
            game.players[0].health-=damage;
            if(game.players[0].health<=0){
                return res.status(200).json({data:{flag:2},message:``})
            }
        }
        
    }
    catch(e){
        return res.status(500).json({

            message:"Internal server error!"
        })
    }
}