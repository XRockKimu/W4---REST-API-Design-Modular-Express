import express from 'express';
import { getJournalists, getJournalist, addJournalist, updateJournalistData, removeJournalist } from '../controllers/journalistController.js';
import { getArticlesByJournalistId } from '../controllers/articleController.js';

const router = express.Router();

router.get('/', getJournalists);
router.get('/:id', getJournalist);
router.post('/', addJournalist);
router.put('/:id', updateJournalistData);
router.delete('/:id', removeJournalist);
router.get('/:id/articles', getArticlesByJournalistId);

export default router;