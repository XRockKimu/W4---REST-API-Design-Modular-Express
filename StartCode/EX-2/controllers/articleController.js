import { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle, getArticlesByJournalist, getArticlesByCategory, isValidJournalist, isValidCategory } from '../models/articleModel.js';

export const getArticles = (req, res) => {
    const articles = getAllArticles();
    res.json(articles);
};

export const getArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = getArticleById(articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

export const addArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    if (!isValidJournalist(journalistId)) return res.status(400).json({ error: 'Invalid journalist ID' });
    if (!isValidCategory(categoryId)) return res.status(400).json({ error: 'Invalid category ID' });
    const newArticle = createArticle({ title, content, journalistId, categoryId });
    res.status(201).json(newArticle);
};

export const updateArticleData = (req, res) => {
    const articleId = parseInt(req.params.id);
    const { title, content, journalistId, categoryId } = req.body;
    if (journalistId && !isValidJournalist(journalistId)) return res.status(400).json({ error: 'Invalid journalist ID' });
    if (categoryId && !isValidCategory(categoryId)) return res.status(400).json({ error: 'Invalid category ID' });
    const updatedArticle = updateArticle(articleId, { title, content, journalistId, categoryId });
    if (!updatedArticle) return res.status(404).json({ error: 'Article not found' });
    res.json(updatedArticle);
};

export const removeArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const success = deleteArticle(articleId);
    if (!success) return res.status(404).json({ error: 'Article not found' });
    res.status(204).send();
};

export const getArticlesByJournalistId = (req, res) => {
    const journalistId = parseInt(req.params.id);
    if (!isValidJournalist(journalistId)) return res.status(404).json({ error: 'Journalist not found' });
    const articles = getArticlesByJournalist(journalistId);
    res.json(articles);
};

export const getArticlesByCategoryId = (req, res) => {
    const categoryId = parseInt(req.params.id);
    if (!isValidCategory(categoryId)) return res.status(404).json({ error: 'Category not found' });
    const articles = getArticlesByCategory(categoryId);
    res.json(articles);
};