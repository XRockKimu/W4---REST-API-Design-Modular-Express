import { articles, journalists, categories } from './data.js';

export const getAllArticles = () => articles;

export const getArticleById = (id) => articles.find(a => a.id === id);

export const createArticle = (article) => {
    const newArticle = { id: articles.length + 1, ...article };
    articles.push(newArticle);
    return newArticle;
};

export const updateArticle = (id, updates) => {
    const article = articles.find(a => a.id === id);
    if (article) {
        Object.assign(article, updates);
        return article;
    }
    return null;
};

export const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
        articles.splice(index, 1);
        return true;
    }
    return false;
};

export const getArticlesByJournalist = (journalistId) => {
    return articles.filter(a => a.journalistId === journalistId);
};

export const getArticlesByCategory = (categoryId) => {
    return articles.filter(a => a.categoryId === categoryId);
};

export const isValidJournalist = (journalistId) => {
    return journalists.some(j => j.id === journalistId);
};

export const isValidCategory = (categoryId) => {
    return categories.some(c => c.id === categoryId);
};