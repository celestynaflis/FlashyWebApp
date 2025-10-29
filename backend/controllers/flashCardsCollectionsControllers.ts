import { Request, Response } from 'express';
import FlashCardsCollection, {IFlashCardsCollection} from "../models/FlashCardsCollection.model";
import {deleteObjectById} from "./utils";

export const createFlashCardsCollection = async (req: Request, res: Response) => {
    try {
        const newFlashCardsCollection: IFlashCardsCollection = new FlashCardsCollection(req.body);
        await newFlashCardsCollection.save();
        res.status(201).json(newFlashCardsCollection);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCollectionById = async (req: Request, res: Response) => {
    await deleteObjectById(req, res, FlashCardsCollection);
}