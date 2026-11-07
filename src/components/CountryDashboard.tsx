import React, { useState } from 'react';
import { Search, ArrowLeft, Plus, Sparkles, Utensils, MapPin } from 'lucide-react';
import { Country, Recipe } from '../types';
import { RecipeCard } from './RecipeCard';

interface CountryDashboardProps {
  country: Country;
  recipes: Recipe[];
  onBack: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  favoriteIds: string[];
  isAdmin?: boolean;
  onAddRecipeToCountry?: (country: Country) => void;
}

export const CountryDashboard: React.FC<CountryDashboardProps> = ({
  country,
  recipes,
  onBack,
  onSelectRecipe,
  onToggleFavorite,
  favoriteIds,
  isAdmin = false,
  onAddRecipeToCountry
}) => {
  const [inCountrySearch, setInCountrySearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter recipes for this country
  const countryRecipes = recipes.filter((r) => r.countryId.toLowerCase() === country.id.toLowerCase());

  const filteredRecipes = countryRecipes.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(inCountrySearch.toLowerCase()) ||
      r.description.toLowerCase().includes(inCountrySearch.toLowerCase()) ||
      r.ingredients.some((i) => i.name.toLowerCase().includes(inCountrySearch.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || r.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'Dinner', 'Lunch', 'Street Food', 'Breakfast', 'Dessert', 'Appetizer'];

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Top Banner / Hero of Country */}
      <div className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={country.imageUrl}
            alt={`${country.name} gastronomy`}
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* Breadcrumb & Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-white transition-colors cursor-pointer mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Countries</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl sm:text-5xl drop-shadow-md select-none">{country.flag}</span>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{country.region}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{countryRecipes.length} dishes curated</span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {country.name} Recipe Dashboard
                  </h1>
                </div>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">
                {country.description}
              </p>

              {/* Popular National Dishes tags */}
              {country.popularDishes && country.popularDishes.length > 0 && (
                <div className="mt-6 pt-5 border-t border-stone-800/80 flex flex-wrap items-center gap-2 text-xs text-stone-300">
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5" />
                    Popular Dishes:
                  </span>
                  {country.popularDishes.map((dish) => (
                    <button
                      key={dish}
                      onClick={() => setInCountrySearch(dish)}
                      className="px-2.5 py-1 bg-stone-800/90 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors cursor-pointer"
                    >
                      {dish}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Admin Add Recipe quick button */}
            {isAdmin && onAddRecipeToCountry && (
              <div className="shrink-0">
                <button
                  onClick={() => onAddRecipeToCountry(country)}
                  className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Recipe to {country.name}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* In-Country Filter & Search Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar inside country */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={inCountrySearch}
              onChange={(e) => setInCountrySearch(e.target.value)}
              placeholder={`Search recipes in ${country.name} (e.g. ${country.popularDishes[0] || 'Curry'})...`}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
            />
          </div>

          {/* Category Filter buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat === 'all' ? 'All Dishes' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
            <span>Recipes from {country.name}</span>
            <span className="text-xs font-normal text-stone-500 tabular-nums">
              ({filteredRecipes.length} available)
            </span>
          </h2>
          {inCountrySearch && (
            <button
              onClick={() => setInCountrySearch('')}
              className="text-xs font-semibold text-amber-700 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center max-w-lg mx-auto">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-stone-800">No matching dishes found</h3>
            <p className="text-xs text-stone-500 mt-1">
              We couldn't find any recipes matching your criteria in {country.name}.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setInCountrySearch('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
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
