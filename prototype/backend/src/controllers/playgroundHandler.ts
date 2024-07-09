import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function diceHandler(req:any,res:any){
    try{
        const diceVal=Math.floor(Math.random() * 6) + 1;
        return res.status(200).json({val:diceVal,message:"Rolled the dice!"})
    }
    catch(e){
        return res.status(500).json({
            message:"An error Occured!"
        })
    }
}