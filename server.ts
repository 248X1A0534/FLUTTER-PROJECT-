import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_RECIPES, INITIAL_COUNTRIES, INITIAL_REVIEWS, DEFAULT_USERS } from './src/data/seedData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory backend store seeded with rich authentic global culinary data
let recipes = [...INITIAL_RECIPES];
let countries = [...INITIAL_COUNTRIES];
let reviews = [...INITIAL_REVIEWS];
let users = [...DEFAULT_USERS];

// --- REST API Endpoints ---

// Health & System Info
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    platform: 'RRC Recipe – World Recipe Explorer Full-Stack Server',
    totalRecipes: recipes.length,
    totalCountries: countries.length
  });
});

// Stats for Admin Overview
app.get('/api/admin/stats', (_req: Request, res: Response) => {
  res.json({
    totalUsers: users.length,
    totalRecipes: recipes.length,
    totalCountries: countries.length,
    totalCategories: 6,
    totalReviews: reviews.length,
    publishedRecipes: recipes.filter((r) => r.isPublished).length
  });
});

// Recipes API
app.get('/api/recipes', (req: Request, res: Response) => {
  const { country, category, search, dietary, difficulty } = req.query;
  let results = [...recipes];

  if (country && typeof country === 'string') {
    results = results.filter((r) => r.countryId.toLowerCase() === country.toLowerCase());
  }
  if (category && typeof category === 'string') {
    results = results.filter((r) => r.category.toLowerCase() === category.toLowerCase());
  }
  if (dietary && typeof dietary === 'string') {
    results = results.filter((r) => r.dietary.toLowerCase() === dietary.toLowerCase());
  }
  if (difficulty && typeof difficulty === 'string') {
    results = results.filter((r) => r.difficulty.toLowerCase() === difficulty.toLowerCase());
  }
  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    results = results.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.countryName.toLowerCase().includes(q) ||
        r.cuisineType.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(q))
    );
  }

  res.json(results);
});

app.get('/api/recipes/:id', (req: Request, res: Response) => {
  const recipe = recipes.find((r) => r.id === req.params.id);
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  res.json(recipe);
});

app.post('/api/recipes', (req: Request, res: Response) => {
  const data = req.body;
  if (!data.title || !data.countryId) {
    return res.status(400).json({ error: 'Title and Country are required.' });
  }
  const newRecipe = {
    ...data,
    id: `rec-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0],
    rating: 5.0,
    reviewCount: 0,
    isPublished: data.isPublished !== undefined ? data.isPublished : true
  };
  recipes.unshift(newRecipe);
  res.status(201).json(newRecipe);
});

app.put('/api/recipes/:id', (req: Request, res: Response) => {
  const index = recipes.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  recipes[index] = { ...recipes[index], ...req.body };
  res.json(recipes[index]);
});

app.delete('/api/recipes/:id', (req: Request, res: Response) => {
  const index = recipes.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  const deleted = recipes.splice(index, 1)[0];
  res.json(deleted);
});

// Countries API
app.get('/api/countries', (_req: Request, res: Response) => {
  res.json(countries);
});

app.post('/api/countries', (req: Request, res: Response) => {
  const data = req.body;
  const newCountry = {
    ...data,
    id: data.id || data.name.toLowerCase().replace(/\s+/g, '-'),
    recipeCount: 0
  };
  countries.push(newCountry);
  res.status(201).json(newCountry);
});

app.put('/api/countries/:id', (req: Request, res: Response) => {
  const index = countries.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Country not found' });
  }
  countries[index] = { ...countries[index], ...req.body };
  res.json(countries[index]);
});

app.delete('/api/countries/:id', (req: Request, res: Response) => {
  countries = countries.filter((c) => c.id !== req.params.id);
  res.json({ success: true });
});

// Reviews API
app.get('/api/reviews/:recipeId', (req: Request, res: Response) => {
  const list = reviews.filter((r) => r.recipeId === req.params.recipeId);
  res.json(list);
});

app.post('/api/reviews', (req: Request, res: Response) => {
  const { recipeId, userId, userName, rating, comment } = req.body;
  if (!recipeId || !rating || !comment) {
    return res.status(400).json({ error: 'Recipe ID, rating, and comment are required.' });
  }
  const newReview = {
    id: `rev-${Date.now()}`,
    recipeId,
    userId: userId || 'u-guest',
    userName: userName || 'Fellow Foodie',
    rating: Number(rating),
    comment,
    createdAt: new Date().toISOString().split('T')[0]
  };
  reviews.unshift(newReview);
  res.status(201).json(newReview);
});

app.delete('/api/reviews/:id', (req: Request, res: Response) => {
  reviews = reviews.filter((r) => r.id !== req.params.id);
  res.json({ success: true });
});

// Auth API
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email } = req.body;
  const user = users.find((u) => u.email.toLowerCase() === (email || '').toLowerCase());
  if (user) {
    return res.json(user);
  }
  return res.status(401).json({ error: 'Invalid user credentials.' });
});

// Static / Vite Middleware Setup
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
