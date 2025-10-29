import {CollectionCategory} from "../../shared/types";
import mongoose, { Schema, Document } from 'mongoose';

export interface ICollectionCategory extends CollectionCategory, Document {}

const CollectionCategorySchema = new Schema<ICollectionCategory>({
    categoryName: { type: String, required: true },
})

export default mongoose.model<ICollectionCategory>('CollectionCategory',  CollectionCategorySchema);