import mongoose, { Schema, Document } from 'mongoose';
import {FlashCard} from '../../shared/types';

export interface IFlashCard extends FlashCard, Document {}

const FlashCardSchema: Schema = new Schema<IFlashCard>({
    front: { type: String, required: true },
    back: { type: String, required: true },
    isLearned: { type: Boolean, required: true },
});

export default mongoose.model<IFlashCard>('FlashCard', FlashCardSchema);

