'use server'
import prisma from "@repo/db/client";
export  default async function validate(roomId:Number){
    try{
        const room=await prisma.rooms.findFirst({where:{
            roomId: Number(roomId)
        }})
        if(!room){
            return false;
        }
        return true;
    }
    catch(e){
        console.log(e);
        return false;

    }
}