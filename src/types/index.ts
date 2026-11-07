export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type DietaryType = 'Vegetarian' | 'Non-vegetarian' | 'Vegan' | 'Gluten-free';

export type MealCategory = 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert' | 'Appetizer' | 'Street Food' | 'Soup';

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
}

export interface InstructionStep {
  stepNumber: number;
  title: string;
  description: string;
  durationMinutes?: number;
  tip?: string;
}

export interface Review {
  id: string;
  recipeId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: string;
}

export interface Recipe {
  id: string;
  title: string;
  countryId: string;
  countryName: string;
  countryFlag: string;
  category: MealCategory;
  cuisineType: string;
  dietary: DietaryType;
  difficulty: Difficulty;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  rating: number;
  reviewCount: number;
  isPublished: boolean;
  createdAt: string;
  authorName: string;
  isFeatured?: boolean;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  imageUrl: string;
  description: string;
  popularDishes: string[];
  recipeCount: number;
  region: string;
}

export interface CategoryInfo {
  id: string;
  name: MealCategory;
  description: string;
  imageUrl: string;
  recipeCount: number;
}

export interface UserCookingLog {
  recipeId: string;
  recipeTitle: string;
  countryFlag: string;
  completedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
  bio: string;
  dietaryPreferences: string[];
  favoriteRecipeIds: string[];
  savedRecipeIds: string[];
  recentlyViewedIds: string[];
  cookingHistory: UserCookingLog[];
  status: 'active' | 'suspended';
  joinedDate: string;
}

export interface RecipeFilterState {
  searchQuery: string;
  countryId: string;
  category: string;
  dietary: string;
  difficulty: string;
  maxCookingTime: number; // 0 means no limit
  sortBy: 'featured' | 'rating' | 'quickest' | 'newest' | 'title';
}
