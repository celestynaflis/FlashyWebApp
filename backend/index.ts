import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import FlashCard, { IFlashCard } from './models/FlashCard';
import flashCardsRouter from './routes/flashcards';

require('dotenv').config();
// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI ?? '');
    } catch (error) {
        console.log(error);
    }
};

// TODO - napraw routes and controllers
// app.use('api/flashCards', flashCardsRouter);

connectToDb();

app.get('/', (req: Request, res: Response) => {
    res.send('Server working');
});

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from backend with MongoDB!' });
});

// POST /api/flashCards
app.post('/api/flashCards', async (req: Request, res: Response) => {
    try {
        const flashCard = new FlashCard(req.body);
        await flashCard.save();
        res.status(201).json(flashCard);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// GET /api/flashCards
app.get('/api/flashCards', async (req: Request, res: Response) => {
    const flashCards: IFlashCard[] = await FlashCard.find();
    res.json(flashCards);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
