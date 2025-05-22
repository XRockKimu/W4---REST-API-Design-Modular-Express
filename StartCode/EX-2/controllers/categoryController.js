import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../models/categoryModel.js';

export const getCategories = (req, res) => {
    const categories = getAllCategories();
    res.json(categories);
};

export const getCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = getCategoryById(categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};

export const addCategory = (req, res) => {
    const { name } = req.body;
    const newCategory = createCategory({ name });
    res.status(201).json(newCategory);
};

export const updateCategoryData = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    const updatedCategory = updateCategory(categoryId, { name });
    if (!updatedCategory) return res.status(404).json({ error: 'Category not found' });
    res.json(updatedCategory);
};

export const removeCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const success = deleteCategory(categoryId);
    if (!success) return res.status(404).json({ error: 'Category not found' });
    res.status(204).send();
};