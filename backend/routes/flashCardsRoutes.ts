import {
    getFlashCards,
    createFlashCard, deleteFlashCardById,
} from '../controllers/flashCardsControllers';
import {createFlashCardsCollection, deleteCollectionById} from '../controllers/flashCardsCollectionsControllers'
import {createCollectionCategory, deleteCollectionCategoryById} from '../controllers/collectionsCategoriesControllers'
import express from 'express';

const flashCardsRouter = express.Router();

flashCardsRouter.get('/api/flashCards', getFlashCards);

flashCardsRouter.post('/api/flashCards', createFlashCard);

flashCardsRouter.post('/api/flashCardsCollections', createFlashCardsCollection);

flashCardsRouter.post('/api/collectionCategories', createCollectionCategory);

flashCardsRouter.delete('/api/flashCards/:id', deleteFlashCardById);

flashCardsRouter.delete('/api/flashCardsCollections/:id', deleteCollectionById);

flashCardsRouter.delete('/api/collectionCategories/:id', deleteCollectionCategoryById);

export default flashCardsRouter;
