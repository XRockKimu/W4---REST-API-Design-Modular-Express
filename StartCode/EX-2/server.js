import express from 'express';
import logger from './middleware/logger.js';
import validateRequest from './middleware/validateRequest.js';
import articleRoutes from './routes/articleRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

app.use(express.json());
app.use(logger);

// Add root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the News API' });
});

app.use('/articles', validateRequest, articleRoutes);
app.use('/journalists', validateRequest, journalistRoutes);
app.use('/categories', validateRequest, categoryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});