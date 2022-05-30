import { Request, Response } from "express";

import { UserModel } from "../models";

export const signUpUser = async (req: Request, res: Response) => {
    try {
        const { uid, email, providerId, creationTime } = req.body;
        
        const newUser = await UserModel.create({ 
            uid,
            email,
            providerId,
            creationTime
        });

        return res.status(201).json({
            userUid: newUser.uid,
            location: `${req.path}/${newUser.uid}`,
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}

export const getUserByUID = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.uid);

        if (user) {
            return res.status(200).json({
                data: user
            });
        } else {
            return res.status(404).json({
                error: "No existe un usuario con el UID especificado."
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
}