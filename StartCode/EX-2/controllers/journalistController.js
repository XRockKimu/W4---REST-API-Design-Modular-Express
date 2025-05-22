import { getAllJournalists, getJournalistById, createJournalist, updateJournalist, deleteJournalist } from '../models/journalistModel.js';

export const getJournalists = (req, res) => {
    const journalists = getAllJournalists();
    res.json(journalists);
};

export const getJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = getJournalistById(journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

export const addJournalist = (req, res) => {
    const { name, email } = req.body;
    const newJournalist = createJournalist({ name, email });
    res.status(201).json(newJournalist);
};

export const updateJournalistData = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const { name, email } = req.body;
    const updatedJournalist = updateJournalist(journalistId, { name, email });
    if (!updatedJournalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(updatedJournalist);
};

export const removeJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const success = deleteJournalist(journalistId);
    if (!success) return res.status(404).json({ error: 'Journalist not found' });
    res.status(204).send();
};