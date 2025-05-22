import express from 'express';
import { getArticles, getArticle, addArticle, updateArticleData, removeArticle, getArticlesByJournalistId, getArticlesByCategoryId } from '../controllers/articleController.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', addArticle);
router.put('/:id', updateArticleData);
router.delete('/:id', removeArticle);
router.get('/journalist/:id', getArticlesByJournalistId);
router.get('/category/:id', getArticlesByCategoryId);

export default router;