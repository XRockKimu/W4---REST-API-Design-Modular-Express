import express from 'express';
   import userRoutes from './routes/userRoutes.js';
   import logger from './middleware/logger.js';
   import validateUser from './middleware/validateUser.js';

   const app = express();

   app.use(express.json());
   app.use(logger);

   // Add root route to handle GET /
   app.get('/', (req, res) => {
       res.json({ message: 'Welcome to the User Management API' });
   });

   app.use('/users', validateUser, userRoutes);

   const PORT = 3000;
   app.listen(PORT, () => {
       console.log(`🚀 Server is running on http://localhost:${PORT}`);
   });