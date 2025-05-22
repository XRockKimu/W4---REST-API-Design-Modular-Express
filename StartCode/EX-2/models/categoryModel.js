import { categories } from './data.js';

export const getAllCategories = () => categories;

export const getCategoryById = (id) => categories.find(c => c.id === id);

export const createCategory = (category) => {
    const newCategory = { id: categories.length + 1, ...category };
    categories.push(newCategory);
    return newCategory;
};

export const updateCategory = (id, updates) => {
    const category = categories.find(c => c.id === id);
    if (category) {
        Object.assign(category, updates);
        return category;
    }
    return null;
};

export const deleteCategory = (id) => {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
        categories.splice(index, 1);
        return true;
    }
    return false;
};