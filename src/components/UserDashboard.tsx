import React, { useState } from 'react';
import {
  User,
  Heart,
  Bookmark,
  History,
  Eye,
  Edit3,
  Calendar,
  Mail,
  Shield,
  Utensils,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { UserProfile, Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import { recipeService } from '../services/recipeApi';

interface UserDashboardProps {
  currentUser: UserProfile;
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  onToggleSaved: (recipeId: string) => void;
  onLogout: () => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  currentUser,
  recipes,
  onSelectRecipe,
  onToggleFavorite,
  onToggleSaved,
  onLogout
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'favorites' | 'saved' | 'history' | 'recent' | 'edit'>('favorites');

  // Edit profile state
  const [name, setName] = useState(currentUser.name);
  const [bio, setBio] = useState(currentUser.bio);
  const [dietary, setDietary] = useState(currentUser.dietaryPreferences.join(', '));
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Favorite recipes
  const favoriteRecipes = recipes.filter((r) => currentUser.favoriteRecipeIds.includes(r.id));

  // Saved recipes
  const savedRecipes = recipes.filter((r) => currentUser.savedRecipeIds.includes(r.id));

  // Recently viewed recipes
  const recentlyViewedRecipes = currentUser.recentlyViewedIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean) as Recipe[];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    recipeService.updateProfile({
      name,
      bio,
      dietaryPreferences: dietary.split(',').map((s) => s.trim()).filter(Boolean)
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card Header */}
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-display text-2xl sm:text-3xl font-bold shadow-sm shrink-0">
                {currentUser.name ? currentUser.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() : 'RK'}
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                    {currentUser.name}
                  </h1>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                    {currentUser.role === 'admin' ? 'Administrator' : 'Explorer Member'}
                  </span>
                </div>

                <p className="text-xs text-stone-500 mt-1 flex items-center justify-center sm:justify-start gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{currentUser.email}</span>
                  <span aria-hidden="true">·</span>
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Member since {currentUser.joinedDate}</span>
                </p>

                <p className="text-xs sm:text-sm text-stone-600 mt-3 max-w-xl">
                  {currentUser.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveSubTab('edit')}
                className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>

              <button
                onClick={onLogout}
                className="px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-100 text-center">
            <div className="p-2">
              <span className="text-2xl font-bold font-display text-stone-900 tabular-nums">
                {favoriteRecipes.length}
              </span>
              <span className="text-xs text-stone-500 block mt-0.5">Favourites</span>
            </div>
            <div className="p-2">
              <span className="text-2xl font-bold font-display text-stone-900 tabular-nums">
                {savedRecipes.length}
              </span>
              <span className="text-xs text-stone-500 block mt-0.5">Saved for Later</span>
            </div>
            <div className="p-2">
              <span className="text-2xl font-bold font-display text-amber-700 tabular-nums">
                {currentUser.cookingHistory.length}
              </span>
              <span className="text-xs text-stone-500 block mt-0.5">Dishes Cooked</span>
            </div>
            <div className="p-2">
              <span className="text-2xl font-bold font-display text-stone-900 tabular-nums">
                {recentlyViewedRecipes.length}
              </span>
              <span className="text-xs text-stone-500 block mt-0.5">Recently Viewed</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-stone-200 pb-px mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('favorites')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeSubTab === 'favorites'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Favourite Recipes ({favoriteRecipes.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('saved')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeSubTab === 'saved'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved for Later ({savedRecipes.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('history')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeSubTab === 'history'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Cooking History ({currentUser.cookingHistory.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('recent')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeSubTab === 'recent'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Recently Viewed ({recentlyViewedRecipes.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('edit')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeSubTab === 'edit'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeSubTab === 'favorites' && (
          <div>
            {favoriteRecipes.length === 0 ? (
              <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center max-w-md mx-auto">
                <Heart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-stone-800">No favourites saved yet</h3>
                <p className="text-xs text-stone-500 mt-1">
                  Click the heart icon on any recipe card to save your favorite dishes here for quick access.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                    isFavorite={true}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeSubTab === 'saved' && (
          <div>
            {savedRecipes.length === 0 ? (
              <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center max-w-md mx-auto">
                <Bookmark className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-stone-800">No saved recipes</h3>
                <p className="text-xs text-stone-500 mt-1">
                  Bookmark recipes you want to cook in the upcoming week.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                    isFavorite={currentUser.favoriteRecipeIds.includes(recipe.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeSubTab === 'history' && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
              Your Cooking Achievements
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Every time you complete all steps in the interactive cooking tracker, the dish is recorded here.
            </p>

            {currentUser.cookingHistory.length === 0 ? (
              <div className="text-center py-10 text-stone-400 text-xs">
                You haven't finished cooking a recipe yet. Open any recipe and follow the tracker to 100%!
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {currentUser.cookingHistory.map((item, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.countryFlag}</span>
                      <div>
                        <h4 className="font-semibold text-sm text-stone-900">
                          {item.recipeTitle}
                        </h4>
                        <span className="text-[11px] text-stone-400">
                          Completed on {item.completedAt}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const rec = recipes.find((r) => r.id === item.recipeId);
                        if (rec) onSelectRecipe(rec);
                      }}
                      className="px-3 py-1.5 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Cook Again
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSubTab === 'recent' && (
          <div>
            {recentlyViewedRecipes.length === 0 ? (
              <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center max-w-md mx-auto">
                <Eye className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-stone-800">No recently viewed recipes</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentlyViewedRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                    isFavorite={currentUser.favoriteRecipeIds.includes(recipe.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeSubTab === 'edit' && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 max-w-xl mx-auto shadow-sm">
            <h3 className="font-display text-xl font-bold text-stone-900 mb-4">
              Edit Your Culinary Profile
            </h3>

            {saveSuccess && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium">
                Profile updated successfully!
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Bio / Cooking Philosophy</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Dietary Preferences (comma-separated)
                </label>
                <input
                  type="text"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  placeholder="e.g. Vegetarian, Loves Spicy Food, Nut-Free"
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSubTab('favorites')}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-xl font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl cursor-pointer shadow-2xs"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
