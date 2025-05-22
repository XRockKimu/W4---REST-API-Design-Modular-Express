import express from 'express';
import { getCategories, getCategory, addCategory, updateCategoryData, removeCategory } from '../controllers/categoryController.js';
import { getArticlesByCategoryId } from '../controllers/articleController.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', addCategory);
router.put('/:id', updateCategoryData);
router.delete('/:id', removeCategory);
router.get('/:id/articles', getArticlesByCategoryId);

export default router;