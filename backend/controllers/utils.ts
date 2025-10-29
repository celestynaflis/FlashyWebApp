import { Request, Response } from 'express';
import mongoose, {Document, Model} from "mongoose";

export const deleteObjectById = async <T extends Document> (req: Request, res: Response, model: Model<T>) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Not valid ID' });
    }

    try {
        const deletedObject = await model.findByIdAndDelete(id);
        if(!deletedObject) {
            return res.status(404).json({ message: 'Object not found' });
        }
        return res.status(200).json({message: 'Deleted object: ', deletedObject});


    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}