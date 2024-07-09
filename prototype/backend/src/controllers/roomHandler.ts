import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Room  from '../models/room';

const JWT_SECRET = process.env.JWT_SECRET || "";

// Handler to create rooms
export async function createRoomController(req: Request, res: Response) {
    try {
        const token = req.cookies.token;

        // Generating a 4 digit room code
        const roomId = Math.floor(Math.random() * 9000) + 1000;

        // Checking if the room already exists
        const check = await Room.findOne({ roomId });
        if (check) {
            return res.status(411).json({ message: "Room already exists!" });
        }

        const decoded: any = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;

        // Creating a new room with the current user present initially
        const newRoom = await Room.create({
            roomId,
            players: [userId]  // Initial player in the room
        });
        console.log(newRoom.players);

        return res.status(200).json({ data: newRoom, message: "Room created successfully" });
    } catch (error) {
        console.error("Error during room creation:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// Handler to join rooms
export async function joinRoomController(req: Request, res: Response) {
    const { roomId } = req.body;

    try {
        // Checking if the room exists
        const room = await Room.findOne({ roomId });
        const token = req.cookies.token;

        if (!room) {
            return res.status(404).json({ message: "Room not found!" });
        }

        // Checking if the room is vacant
        if (room.players.length >= 2) {
            return res.status(400).json({ message: "Room is full!" });
        }

        const decoded: any = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;

        // Adding the current user to the room
        const updatedPlayers = [...room.players, userId];

        // Updating the room with the new player
        const updatedRoom = await Room.findOneAndUpdate(
            { roomId },
            { $set: { players: updatedPlayers } },
            { new: true }
        );

        return res.status(200).json({ message: "Joined room successfully", data: updatedRoom });
    } catch (error) {
        console.error("Error during room join:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
