import { journalists } from './data.js';

export const getAllJournalists = () => journalists;

export const getJournalistById = (id) => journalists.find(j => j.id === id);

export const createJournalist = (journalist) => {
    const newJournalist = { id: journalists.length + 1, ...journalist };
    journalists.push(newJournalist);
    return newJournalist;
};

export const updateJournalist = (id, updates) => {
    const journalist = journalists.find(j => j.id === id);
    if (journalist) {
        Object.assign(journalist, updates);
        return journalist;
    }
    return null;
};

export const deleteJournalist = (id) => {
    const index = journalists.findIndex(j => j.id === id);
    if (index !== -1) {
        journalists.splice(index, 1);
        return true;
    }
    return false;
};