import express from 'express';
import {
    getFlashCards,
    createFlashCard,
} from '../controllers/flashCardsControllers';

const flashCardsRouter = express.Router();

//GET /api/flashCards
flashCardsRouter.get('/', getFlashCards);

//POST /api/flashCards
flashCardsRouter.post('/', createFlashCard);

export default flashCardsRouter;
