import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  Globe,
  Sparkles,
  Clock,
  Flame,
  Utensils
} from 'lucide-react';
import { Recipe, Country, Difficulty, DietaryType, MealCategory } from '../types';
import { RecipeCard } from './RecipeCard';
import { recipeService } from '../services/recipeApi';

interface ExploreRecipesPageProps {
  recipes: Recipe[];
  countries: Country[];
  onSelectRecipe: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  favoriteIds: string[];
  initialSearchQuery?: string;
  initialCountryId?: string;
  initialCategory?: string;
}

export const ExploreRecipesPage: React.FC<ExploreRecipesPageProps> = ({
  recipes,
  countries,
  onSelectRecipe,
  onToggleFavorite,
  favoriteIds,
  initialSearchQuery = '',
  initialCountryId = 'all',
  initialCategory = 'all'
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountryId);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [maxCookingTime, setMaxCookingTime] = useState<number>(0); // 0 = no limit
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'quickest' | 'title' | 'newest'>('featured');

  // External TheMealDB search integration toggle
  const [isSearchingMealDB, setIsSearchingMealDB] = useState<boolean>(false);
  const [mealDbResults, setMealDbResults] = useState<Recipe[]>([]);
  const [isMealDbLoading, setIsMealDbLoading] = useState<boolean>(false);

  const categories: string[] = ['all', 'Dinner', 'Lunch', 'Street Food', 'Breakfast', 'Dessert', 'Appetizer'];
  const dietaryOptions: string[] = ['all', 'Vegetarian', 'Non-vegetarian', 'Vegan', 'Gluten-free'];
  const difficultyOptions: string[] = ['all', 'Easy', 'Medium', 'Hard'];

  // Trigger search on TheMealDB if requested
  const handleMealDbSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsMealDbLoading(true);
    setIsSearchingMealDB(true);
    try {
      const liveResults = await recipeService.searchTheMealDB(searchQuery.trim());
      setMealDbResults(liveResults);
    } catch (e) {
      console.warn('TheMealDB search error', e);
    } finally {
      setIsMealDbLoading(false);
    }
  };

  const clearMealDb = () => {
    setIsSearchingMealDB(false);
    setMealDbResults([]);
  };

  // Filter recipes
  const filteredRecipes = useMemo(() => {
    // If user is currently inspecting TheMealDB results
    if (isSearchingMealDB) {
      return mealDbResults;
    }

    return recipes
      .filter((r) => {
        // Query match
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = r.title.toLowerCase().includes(q);
          const matchCountry = r.countryName.toLowerCase().includes(q);
          const matchCuisine = r.cuisineType.toLowerCase().includes(q);
          const matchIngredients = r.ingredients.some((ing) => ing.name.toLowerCase().includes(q));
          if (!matchTitle && !matchCountry && !matchCuisine && !matchIngredients) return false;
        }

        // Country match
        if (selectedCountry !== 'all' && r.countryId.toLowerCase() !== selectedCountry.toLowerCase()) {
          return false;
        }

        // Category match
        if (selectedCategory !== 'all' && r.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }

        // Dietary match
        if (selectedDietary !== 'all' && r.dietary.toLowerCase() !== selectedDietary.toLowerCase()) {
          return false;
        }

        // Difficulty match
        if (selectedDifficulty !== 'all' && r.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) {
          return false;
        }

        // Max cooking time
        if (maxCookingTime > 0 && r.totalTimeMinutes > maxCookingTime) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'quickest') return a.totalTimeMinutes - b.totalTimeMinutes;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'newest') return (b.createdAt || '').localeCompare(a.createdAt || '');
        // default featured
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return b.rating - a.rating;
      });
  }, [
    recipes,
    searchQuery,
    selectedCountry,
    selectedCategory,
    selectedDietary,
    selectedDifficulty,
    maxCookingTime,
    sortBy,
    isSearchingMealDB,
    mealDbResults
  ]);

  const activeFiltersCount =
    (selectedCountry !== 'all' ? 1 : 0) +
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedDietary !== 'all' ? 1 : 0) +
    (selectedDifficulty !== 'all' ? 1 : 0) +
    (maxCookingTime > 0 ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCountry('all');
    setSelectedCategory('all');
    setSelectedDietary('all');
    setSelectedDifficulty('all');
    setMaxCookingTime(0);
    clearMealDb();
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1.5">
            <Utensils className="w-3.5 h-3.5" />
            <span>Recipe Catalog</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Explore International Recipes
          </h1>
          <p className="mt-1.5 text-stone-600 text-sm max-w-2xl">
            Search across global cuisines, filter by ingredients, cooking time, and dietary requirements.
          </p>
        </div>

        {/* Search & Main Filter Controls */}
        <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-6 shadow-sm mb-8 space-y-5">
          {/* Main search bar with live autocomplete and TheMealDB query trigger */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (isSearchingMealDB) clearMealDb();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleMealDbSearch();
                }}
                placeholder="Search by recipe name, country, or ingredients (e.g., Dum Biryani, Prawns, Tacos, Basil)..."
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* TheMealDB live search button */}
            <button
              onClick={handleMealDbSearch}
              disabled={isMealDbLoading || !searchQuery.trim()}
              className="px-5 py-3 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-2"
              title="Search TheMealDB open recipe repository"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{isMealDbLoading ? 'Searching Global API...' : 'Search TheMealDB'}</span>
            </button>
          </div>

          {/* Facet Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-stone-100 text-xs">
            {/* Country Selector */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Country / Origin</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-600 transition-colors"
              >
                <option value="all">All Countries ({countries.length})</option>
                {countries.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Meal Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-600 transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Dietary Type */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Dietary</label>
              <select
                value={selectedDietary}
                onChange={(e) => setSelectedDietary(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-600 transition-colors"
              >
                {dietaryOptions.map((d) => (
                  <option key={d} value={d}>
                    {d === 'all' ? 'All Diets' : d}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-600 transition-colors"
              >
                {difficultyOptions.map((d) => (
                  <option key={d} value={d}>
                    {d === 'all' ? 'All Levels' : d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cooking Time Slider & Sort By */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-stone-100 text-xs">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="font-semibold text-stone-700 whitespace-nowrap">
                Max Total Time:
              </span>
              <input
                type="range"
                min="0"
                max="150"
                step="15"
                value={maxCookingTime}
                onChange={(e) => setMaxCookingTime(Number(e.target.value))}
                className="w-32 accent-amber-600 cursor-pointer"
              />
              <span className="text-stone-600 font-bold tabular-nums min-w-[70px]">
                {maxCookingTime === 0 ? 'Any Time' : `≤ ${maxCookingTime} mins`}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="font-semibold text-stone-700 whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="p-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:border-amber-600 transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="rating">Highest Rated</option>
                <option value="quickest">Quickest Cook Time</option>
                <option value="title">Name A-Z</option>
                <option value="newest">Recently Added</option>
              </select>

              {activeFiltersCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="px-3 py-2 text-stone-600 hover:text-stone-900 border border-stone-200 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer font-medium"
                >
                  Clear ({activeFiltersCount})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Global TheMealDB indicator notification if active */}
        {isSearchingMealDB && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-900">
              <Globe className="w-4 h-4 text-amber-600" />
              <span>
                Showing <strong>{mealDbResults.length} live recipes</strong> from TheMealDB API for "
                {searchQuery}".
              </span>
            </div>
            <button
              onClick={clearMealDb}
              className="text-amber-800 font-semibold hover:underline cursor-pointer"
            >
              Back to Catalog
            </button>
          </div>
        )}

        {/* Results Header & Grid */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-semibold text-stone-600">
            Showing <span className="text-stone-900 tabular-nums">{filteredRecipes.length}</span>{' '}
            {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
          </p>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center max-w-md mx-auto my-12">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-stone-800">No matching recipes found</h3>
            <p className="text-xs text-stone-500 mt-1">
              Try adjusting your search terms, changing the country filter, or clearing active filters.
            </p>
            <button
              onClick={resetAllFilters}
              className="mt-5 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={onSelectRecipe}
                isFavorite={favoriteIds.includes(recipe.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
