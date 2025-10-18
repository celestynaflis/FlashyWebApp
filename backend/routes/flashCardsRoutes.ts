import {
    getFlashCards,
    createFlashCard,
} from '../controllers/flashCardsControllers';
import express from 'express';

const flashCardsRouter = express.Router();

flashCardsRouter.get('/api/flashCards', getFlashCards);

flashCardsRouter.post('/api/flashCards', createFlashCard);

export default flashCardsRouter;
