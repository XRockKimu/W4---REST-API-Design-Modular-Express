export default (req, res, next) => {
    if (['POST', 'PUT'].includes(req.method)) {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
    }
    next();
};