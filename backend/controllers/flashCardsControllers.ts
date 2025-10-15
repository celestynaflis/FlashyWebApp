import { Request, Response } from 'express';
import FlashCard, { IFlashCard } from '../models/FlashCard';

// TODO - sprawdź czy kody błędów są prawiodłowe

export const getFlashCards = async (reg: Request, res: Response) => {
    try {
        const flashCards: IFlashCard[] = await FlashCard.find();
        res.json(flashCards);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const createFlashCard = async (req: Request, res: Response) => {
    try {
        const newFlashCard = new FlashCard(req.body);
        await newFlashCard.save();
        res.status(201).json(newFlashCard);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
