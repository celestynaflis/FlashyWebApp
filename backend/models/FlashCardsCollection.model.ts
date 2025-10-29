import {FlashCardsCollection} from "../../shared/types";
import mongoose, {Document, Schema} from "mongoose";

export interface IFlashCardsCollection extends FlashCardsCollection, Document {}

const flashCardsCollectionSchema = new Schema<IFlashCardsCollection>({
    collectionName: { type: String, required: true },
    flashCardsIds: [{ type: String, required: true }],
    categoryId: { type: String, required: true },
    color: { type: Number, required: true },
})

export default mongoose.model<IFlashCardsCollection>('FlashCardsCollection', flashCardsCollectionSchema);
