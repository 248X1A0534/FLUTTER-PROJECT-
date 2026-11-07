import { Recipe, Country, Review, UserProfile, CategoryInfo } from '../types';
import { INITIAL_RECIPES, INITIAL_COUNTRIES, INITIAL_CATEGORIES, INITIAL_REVIEWS, DEFAULT_USERS } from '../data/seedData';

const RECIPES_STORAGE_KEY = 'recipe_app_recipes_v9';
const COUNTRIES_STORAGE_KEY = 'recipe_app_countries_v9';
const REVIEWS_STORAGE_KEY = 'recipe_app_reviews_v9';
const USERS_STORAGE_KEY = 'recipe_app_users_v9';
const CURRENT_USER_ID_KEY = 'recipe_app_current_user_id_v9';

class RecipeService {
  private recipes: Recipe[] = [];
  private countries: Country[] = [];
  private reviews: Review[] = [];
  private users: UserProfile[] = [];
  private currentUserId: string = 'u-ravi';
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadState();
  }

  private loadState() {
    try {
      const storedRecipes = localStorage.getItem(RECIPES_STORAGE_KEY);
      this.recipes = storedRecipes ? JSON.parse(storedRecipes) : INITIAL_RECIPES;

      const storedCountries = localStorage.getItem(COUNTRIES_STORAGE_KEY);
      this.countries = storedCountries ? JSON.parse(storedCountries) : INITIAL_COUNTRIES;

      const storedReviews = localStorage.getItem(REVIEWS_STORAGE_KEY);
      this.reviews = storedReviews ? JSON.parse(storedReviews) : INITIAL_REVIEWS;

      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      this.users = storedUsers ? JSON.parse(storedUsers) : DEFAULT_USERS;

      const storedUserId = localStorage.getItem(CURRENT_USER_ID_KEY);
      this.currentUserId = storedUserId || 'u-ravi';
    } catch {
      this.recipes = INITIAL_RECIPES;
      this.countries = INITIAL_COUNTRIES;
      this.reviews = INITIAL_REVIEWS;
      this.users = DEFAULT_USERS;
      this.currentUserId = 'u-ravi';
    }
  }

  private persist() {
    try {
      localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(this.recipes));
      localStorage.setItem(COUNTRIES_STORAGE_KEY, JSON.stringify(this.countries));
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(this.reviews));
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(this.users));
      localStorage.setItem(CURRENT_USER_ID_KEY, this.currentUserId);
    } catch (e) {
      console.warn('Storage persistence failed', e);
    }
    this.notify();
  }

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  // --- Auth & User ---
  public getCurrentUser(): UserProfile | null {
    return this.users.find((u) => u.id === this.currentUserId) || this.users[0] || null;
  }

  public setCurrentUser(userId: string) {
    this.currentUserId = userId;
    this.persist();
  }

  public loginUser(email: string): UserProfile {
    const existing = this.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      this.currentUserId = existing.id;
      this.persist();
      return existing;
    }
    // Auto register if not found
    const newUser: UserProfile = {
      id: `u-${Date.now()}`,
      name: email.split('@')[0],
      email: email,
      avatar: '',
      role: email.toLowerCase().includes('admin') ? 'admin' : 'user',
      bio: 'Culinary enthusiast exploring world cuisines.',
      dietaryPreferences: [],
      favoriteRecipeIds: [],
      savedRecipeIds: [],
      recentlyViewedIds: [],
      cookingHistory: [],
      status: 'active',
      joinedDate: new Date().toISOString().split('T')[0]
    };
    this.users.push(newUser);
    this.currentUserId = newUser.id;
    this.persist();
    return newUser;
  }

  public registerUser(name: string, email: string, role: 'user' | 'admin' = 'user'): UserProfile {
    const newUser: UserProfile = {
      id: `u-${Date.now()}`,
      name,
      email,
      avatar: '',
      role,
      bio: 'Enthusiastic food explorer and home cook.',
      dietaryPreferences: [],
      favoriteRecipeIds: [],
      savedRecipeIds: [],
      recentlyViewedIds: [],
      cookingHistory: [],
      status: 'active',
      joinedDate: new Date().toISOString().split('T')[0]
    };
    this.users.push(newUser);
    this.currentUserId = newUser.id;
    this.persist();
    return newUser;
  }

  public updateProfile(updated: Partial<UserProfile>) {
    const user = this.getCurrentUser();
    if (!user) return;
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updated };
      this.persist();
    }
  }

  public toggleFavorite(recipeId: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    const isFav = user.favoriteRecipeIds.includes(recipeId);
    const newFavs = isFav
      ? user.favoriteRecipeIds.filter((id) => id !== recipeId)
      : [...user.favoriteRecipeIds, recipeId];
    this.updateProfile({ favoriteRecipeIds: newFavs });
    return !isFav;
  }

  public isFavorite(recipeId: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.favoriteRecipeIds.includes(recipeId) : false;
  }

  public toggleSaved(recipeId: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    const isSaved = user.savedRecipeIds.includes(recipeId);
    const newSaved = isSaved
      ? user.savedRecipeIds.filter((id) => id !== recipeId)
      : [...user.savedRecipeIds, recipeId];
    this.updateProfile({ savedRecipeIds: newSaved });
    return !isSaved;
  }

  public isSaved(recipeId: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.savedRecipeIds.includes(recipeId) : false;
  }

  public recordRecentlyViewed(recipeId: string) {
    const user = this.getCurrentUser();
    if (!user) return;
    const filtered = user.recentlyViewedIds.filter((id) => id !== recipeId);
    this.updateProfile({
      recentlyViewedIds: [recipeId, ...filtered].slice(0, 10)
    });
  }

  public recordCookingCompleted(recipe: Recipe) {
    const user = this.getCurrentUser();
    if (!user) return;
    const now = new Date();
    const dateStr = `${now.toLocaleDateString()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const newLog = {
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      countryFlag: recipe.countryFlag,
      completedAt: dateStr
    };
    this.updateProfile({
      cookingHistory: [newLog, ...user.cookingHistory]
    });
  }

  // --- Recipes ---
  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getPublishedRecipes(): Recipe[] {
    return this.recipes.filter((r) => r.isPublished);
  }

  public getRecipeById(id: string): Recipe | undefined {
    return this.recipes.find((r) => r.id === id);
  }

  public getRecipesByCountry(countryId: string): Recipe[] {
    return this.recipes.filter((r) => r.countryId.toLowerCase() === countryId.toLowerCase() && r.isPublished);
  }

  public getRecipesByCategory(categoryName: string): Recipe[] {
    return this.recipes.filter(
      (r) => r.category.toLowerCase() === categoryName.toLowerCase() && r.isPublished
    );
  }

  public addRecipe(recipe: Omit<Recipe, 'id' | 'createdAt' | 'rating' | 'reviewCount'>): Recipe {
    const newRecipe: Recipe = {
      ...recipe,
      id: `rec-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      rating: 5.0,
      reviewCount: 0
    };
    this.recipes.unshift(newRecipe);
    // update country count
    this.recalculateCountryCounts();
    this.persist();
    return newRecipe;
  }

  public updateRecipe(id: string, updates: Partial<Recipe>) {
    const index = this.recipes.findIndex((r) => r.id === id);
    if (index !== -1) {
      this.recipes[index] = { ...this.recipes[index], ...updates };
      this.recalculateCountryCounts();
      this.persist();
    }
  }

  public deleteRecipe(id: string) {
    this.recipes = this.recipes.filter((r) => r.id !== id);
    this.recalculateCountryCounts();
    this.persist();
  }

  // --- Countries ---
  public getCountries(): Country[] {
    return this.countries;
  }

  public getCountryById(id: string): Country | undefined {
    return this.countries.find((c) => c.id.toLowerCase() === id.toLowerCase());
  }

  public addCountry(country: Omit<Country, 'recipeCount'>): Country {
    const newCountry: Country = {
      ...country,
      recipeCount: this.recipes.filter((r) => r.countryId === country.id).length
    };
    this.countries.push(newCountry);
    this.persist();
    return newCountry;
  }

  public updateCountry(id: string, updates: Partial<Country>) {
    const index = this.countries.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.countries[index] = { ...this.countries[index], ...updates };
      this.persist();
    }
  }

  public deleteCountry(id: string) {
    this.countries = this.countries.filter((c) => c.id !== id);
    this.persist();
  }

  private recalculateCountryCounts() {
    this.countries = this.countries.map((c) => ({
      ...c,
      recipeCount: this.recipes.filter((r) => r.countryId.toLowerCase() === c.id.toLowerCase()).length
    }));
  }

  // --- Reviews ---
  public getReviewsForRecipe(recipeId: string): Review[] {
    return this.reviews.filter((r) => r.recipeId === recipeId);
  }

  public getAllReviews(): Review[] {
    return this.reviews;
  }

  public addReview(recipeId: string, rating: number, comment: string): Review {
    const user = this.getCurrentUser();
    const newReview: Review = {
      id: `rev-${Date.now()}`,
      recipeId,
      userId: user?.id || 'u-guest',
      userName: user?.name || 'Fellow Foodie',
      userAvatar: user?.avatar,
      rating,
      comment,
      createdAt: new Date().toISOString().split('T')[0]
    };
    this.reviews.unshift(newReview);

    // update recipe aggregate rating
    const recipeReviews = this.reviews.filter((r) => r.recipeId === recipeId);
    const avgRating =
      recipeReviews.reduce((sum, r) => sum + r.rating, 0) / recipeReviews.length;
    this.updateRecipe(recipeId, {
      rating: parseFloat(avgRating.toFixed(2)),
      reviewCount: recipeReviews.length
    });

    this.persist();
    return newReview;
  }

  public deleteReview(reviewId: string) {
    const rev = this.reviews.find((r) => r.id === reviewId);
    this.reviews = this.reviews.filter((r) => r.id !== reviewId);
    if (rev) {
      const recipeReviews = this.reviews.filter((r) => r.recipeId === rev.recipeId);
      const avg = recipeReviews.length
        ? recipeReviews.reduce((sum, r) => sum + r.rating, 0) / recipeReviews.length
        : 5.0;
      this.updateRecipe(rev.recipeId, {
        rating: parseFloat(avg.toFixed(2)),
        reviewCount: recipeReviews.length
      });
    }
    this.persist();
  }

  // --- Users management for Admin ---
  public getAllUsers(): UserProfile[] {
    return this.users;
  }

  public toggleUserStatus(userId: string) {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      user.status = user.status === 'active' ? 'suspended' : 'active';
      this.persist();
    }
  }

  // --- Categories ---
  public getCategories(): CategoryInfo[] {
    return INITIAL_CATEGORIES.map((cat) => ({
      ...cat,
      recipeCount: this.recipes.filter(
        (r) => r.category.toLowerCase() === cat.name.toLowerCase()
      ).length
    }));
  }

  // --- Live TheMealDB API Integration ---
  public async fetchTheMealDBRandom(): Promise<Recipe | null> {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      if (!res.ok) return null;
      const data = await res.json();
      if (!data.meals || !data.meals[0]) return null;
      return this.convertMealDBToRecipe(data.meals[0]);
    } catch {
      return null;
    }
  }

  public async searchTheMealDB(query: string): Promise<Recipe[]> {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
      if (!res.ok) return [];
      const data = await res.json();
      if (!data.meals) return [];
      return data.meals.map((m: any) => this.convertMealDBToRecipe(m));
    } catch {
      return [];
    }
  }

  private convertMealDBToRecipe(meal: any): Recipe {
    const areaToCountry: Record<string, { id: string; name: string; flag: string }> = {
      Indian: { id: 'india', name: 'India', flag: '🇮🇳' },
      Italian: { id: 'italy', name: 'Italy', flag: '🇮🇹' },
      Mexican: { id: 'mexico', name: 'Mexico', flag: '🇲🇽' },
      Japanese: { id: 'japan', name: 'Japan', flag: '🇯🇵' },
      French: { id: 'france', name: 'France', flag: '🇫🇷' },
      Thai: { id: 'thailand', name: 'Thailand', flag: '🇹🇭' },
      American: { id: 'united-states', name: 'United States', flag: '🇺🇸' },
      Turkish: { id: 'turkey', name: 'Turkey', flag: '🇹🇷' },
      Spanish: { id: 'spain', name: 'Spain', flag: '🇪🇸' },
      Greek: { id: 'greece', name: 'Greece', flag: '🇬🇷' },
      Chinese: { id: 'china', name: 'China', flag: '🇨🇳' },
      British: { id: 'united-kingdom', name: 'United Kingdom', flag: '🇬🇧' },
      Moroccan: { id: 'morocco', name: 'Morocco', flag: '🇲🇦' }
    };

    const c = areaToCountry[meal.strArea] || {
      id: (meal.strArea || 'international').toLowerCase().replace(/\s+/g, '-'),
      name: meal.strArea || 'International',
      flag: '🌍'
    };

    const ingredients: any[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredients.push({
          id: `db-ing-${i}`,
          name: ing.trim(),
          amount: measure ? measure.trim() : 'As required',
          unit: ''
        });
      }
    }

    // Split instructions by period or newline into structured steps
    const rawSteps = (meal.strInstructions || '')
      .split(/\r?\n+|\.\s+/)
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 15);

    const instructions = rawSteps.length > 0
      ? rawSteps.map((step: string, idx: number) => ({
          stepNumber: idx + 1,
          title: `Step ${idx + 1}`,
          description: step.endsWith('.') ? step : `${step}.`,
          durationMinutes: 5 + idx * 3
        }))
      : [
          {
            stepNumber: 1,
            title: 'Preparation & Cooking',
            description: meal.strInstructions || 'Prepare and cook according to recipe guidelines.',
            durationMinutes: 30
          }
        ];

    return {
      id: `mealdb-${meal.idMeal}`,
      title: meal.strMeal,
      countryId: c.id,
      countryName: c.name,
      countryFlag: c.flag,
      category: 'Dinner',
      cuisineType: meal.strArea || 'International',
      dietary: 'Non-vegetarian',
      difficulty: 'Medium',
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      totalTimeMinutes: 50,
      servings: 4,
      description: `Authentic ${meal.strMeal} prepared according to classical ${meal.strArea || 'traditional'} culinary techniques.`,
      imageUrl: meal.strMealThumb || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      ingredients,
      instructions,
      rating: 4.85,
      reviewCount: 15,
      isPublished: true,
      createdAt: '2026-01-01',
      authorName: 'TheMealDB Global Chef'
    };
  }
}

export const recipeService = new RecipeService();
