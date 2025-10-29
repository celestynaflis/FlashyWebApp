import { Request, Response } from 'express';
import CollectionCategory, { ICollectionCategory } from '../models/CollectionCategory.model';
import {deleteObjectById} from "./utils";

export const createCollectionCategory  = async (req: Request, res: Response) => {
    try {
        const newCollectionCategory: ICollectionCategory = new CollectionCategory(req.body)
        await  newCollectionCategory.save();
        res.status(201).json(newCollectionCategory);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCollectionCategoryById = async (req: Request, res: Response) => {
    await deleteObjectById(req, res, CollectionCategory);
}