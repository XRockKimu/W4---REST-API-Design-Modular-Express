export default (req, res, next) => {
      if (['POST', 'PUT'].includes(req.method)) {
          const { name, email, title, content, journalistId, categoryId } = req.body;
          if (req.path.includes('/articles') && (!title || !content || !journalistId || !categoryId)) {
              return res.status(400).json({ error: 'Title, content, journalistId, and categoryId are required' });
          }
          if (req.path.includes('/journalists') && (!name || !email)) {
              return res.status(400).json({ error: 'Name and email are required' });
          }
          if (req.path.includes('/categories') && !name) {
              return res.status(400).json({ error: 'Name is required' });
          }
      }
      next();
  };