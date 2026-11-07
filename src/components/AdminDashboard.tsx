import React, { useState } from 'react';
import {
  Shield,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  Globe,
  Users,
  BookOpen,
  FolderTree,
  Star,
  MessageSquare,
  Search,
  AlertCircle
} from 'lucide-react';
import { Recipe, Country, UserProfile, Review, MealCategory, Difficulty, DietaryType } from '../types';
import { recipeService } from '../services/recipeApi';

interface AdminDashboardProps {
  recipes: Recipe[];
  countries: Country[];
  currentUser: UserProfile;
  onRefreshData: () => void;
  onPreviewRecipe: (recipe: Recipe) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  recipes,
  countries,
  currentUser,
  onRefreshData,
  onPreviewRecipe
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'recipes' | 'countries' | 'users' | 'reviews'>('overview');

  // Search in tabs
  const [recipeSearch, setRecipeSearch] = useState('');
  const [countrySearch, setCountrySearch] = useState('');

  // Modals state
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [editingCountry, setEditingCountry] = useState<Country | null>(null);

  // Users & reviews data
  const users = recipeService.getAllUsers();
  const reviews = recipeService.getAllReviews();

  // Recipe Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCountryId, setFormCountryId] = useState('india');
  const [formCategory, setFormCategory] = useState<MealCategory>('Dinner');
  const [formCuisine, setFormCuisine] = useState('Indian');
  const [formDietary, setFormDietary] = useState<DietaryType>('Non-vegetarian');
  const [formDifficulty, setFormDifficulty] = useState<Difficulty>('Medium');
  const [formPrepTime, setFormPrepTime] = useState(20);
  const [formCookTime, setFormCookTime] = useState(30);
  const [formServings, setFormServings] = useState(4);
  const [formDescription, setFormDescription] = useState('');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formIngredients, setFormIngredients] = useState<Array<{ name: string; amount: string; unit: string }>>([
    { name: '', amount: '', unit: '' }
  ]);
  const [formSteps, setFormSteps] = useState<Array<{ title: string; description: string; duration: number; tip: string }>>([
    { title: '', description: '', duration: 10, tip: '' }
  ]);

  // Country Form State
  const [countryName, setCountryName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [countryImageUrl, setCountryImageUrl] = useState('');
  const [countryRegion, setCountryRegion] = useState('Southern Europe');
  const [countryDescription, setCountryDescription] = useState('');
  const [countryDishes, setCountryDishes] = useState('');

  // Open recipe modal for new
  const handleOpenAddRecipe = () => {
    setEditingRecipe(null);
    setFormTitle('');
    setFormCountryId(countries[0]?.id || 'india');
    setFormCategory('Dinner');
    setFormCuisine(countries[0]?.name || 'International');
    setFormDietary('Non-vegetarian');
    setFormDifficulty('Medium');
    setFormPrepTime(20);
    setFormCookTime(30);
    setFormServings(4);
    setFormDescription('');
    setFormImageUrl('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80');
    setFormIngredients([
      { name: 'Olive Oil', amount: '2', unit: 'tbsp' },
      { name: 'Garlic cloves minced', amount: '3', unit: 'cloves' }
    ]);
    setFormSteps([
      { title: 'Prepare Ingredients', description: 'Chop and measure all fresh vegetables and seasonings.', duration: 10, tip: 'Use a sharp knife.' },
      { title: 'Cook and Simmer', description: 'Heat skillet over medium heat and sauté until fragrant.', duration: 20, tip: 'Keep heat moderate.' }
    ]);
    setIsRecipeModalOpen(true);
  };

  // Open recipe modal for edit
  const handleOpenEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setFormTitle(recipe.title);
    setFormCountryId(recipe.countryId);
    setFormCategory(recipe.category);
    setFormCuisine(recipe.cuisineType);
    setFormDietary(recipe.dietary);
    setFormDifficulty(recipe.difficulty);
    setFormPrepTime(recipe.prepTimeMinutes);
    setFormCookTime(recipe.cookTimeMinutes);
    setFormServings(recipe.servings);
    setFormDescription(recipe.description);
    setFormImageUrl(recipe.imageUrl);
    setFormIngredients(
      recipe.ingredients.map((i) => ({ name: i.name, amount: i.amount, unit: i.unit }))
    );
    setFormSteps(
      recipe.instructions.map((s) => ({
        title: s.title,
        description: s.description,
        duration: s.durationMinutes || 10,
        tip: s.tip || ''
      }))
    );
    setIsRecipeModalOpen(true);
  };

  const handleSaveRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    const c = countries.find((item) => item.id.toLowerCase() === formCountryId.toLowerCase());

    const formattedIngredients = formIngredients
      .filter((i) => i.name.trim())
      .map((i, idx) => ({
        id: `ing-${Date.now()}-${idx}`,
        name: i.name.trim(),
        amount: i.amount.trim() || '1',
        unit: i.unit.trim()
      }));

    const formattedSteps = formSteps
      .filter((s) => s.description.trim())
      .map((s, idx) => ({
        stepNumber: idx + 1,
        title: s.title.trim() || `Step ${idx + 1}`,
        description: s.description.trim(),
        durationMinutes: Number(s.duration) || 10,
        tip: s.tip.trim() || undefined
      }));

    if (editingRecipe) {
      recipeService.updateRecipe(editingRecipe.id, {
        title: formTitle,
        countryId: formCountryId,
        countryName: c?.name || formCountryId,
        countryFlag: c?.flag || '🌍',
        category: formCategory,
        cuisineType: formCuisine,
        dietary: formDietary,
        difficulty: formDifficulty,
        prepTimeMinutes: Number(formPrepTime),
        cookTimeMinutes: Number(formCookTime),
        totalTimeMinutes: Number(formPrepTime) + Number(formCookTime),
        servings: Number(formServings),
        description: formDescription,
        imageUrl: formImageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        ingredients: formattedIngredients,
        instructions: formattedSteps
      });
    } else {
      recipeService.addRecipe({
        title: formTitle,
        countryId: formCountryId,
        countryName: c?.name || formCountryId,
        countryFlag: c?.flag || '🌍',
        category: formCategory,
        cuisineType: formCuisine,
        dietary: formDietary,
        difficulty: formDifficulty,
        prepTimeMinutes: Number(formPrepTime),
        cookTimeMinutes: Number(formCookTime),
        totalTimeMinutes: Number(formPrepTime) + Number(formCookTime),
        servings: Number(formServings),
        description: formDescription,
        imageUrl: formImageUrl || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        ingredients: formattedIngredients,
        instructions: formattedSteps,
        isPublished: true,
        authorName: currentUser.name
      });
    }

    setIsRecipeModalOpen(false);
    onRefreshData();
  };

  const handleDeleteRecipe = (id: string, title: string) => {
    if (confirm(`Are you sure you want to permanently delete the recipe "${title}"?`)) {
      recipeService.deleteRecipe(id);
      onRefreshData();
    }
  };

  const handleTogglePublish = (recipe: Recipe) => {
    recipeService.updateRecipe(recipe.id, { isPublished: !recipe.isPublished });
    onRefreshData();
  };

  // Country actions
  const handleOpenAddCountry = () => {
    setEditingCountry(null);
    setCountryName('');
    setCountryCode('');
    setCountryFlag('🌍');
    setCountryImageUrl('https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80');
    setCountryRegion('Southern Europe');
    setCountryDescription('');
    setCountryDishes('');
    setIsCountryModalOpen(true);
  };

  const handleOpenEditCountry = (c: Country) => {
    setEditingCountry(c);
    setCountryName(c.name);
    setCountryCode(c.code);
    setCountryFlag(c.flag);
    setCountryImageUrl(c.imageUrl);
    setCountryRegion(c.region);
    setCountryDescription(c.description);
    setCountryDishes(c.popularDishes.join(', '));
    setIsCountryModalOpen(true);
  };

  const handleSaveCountry = (e: React.FormEvent) => {
    e.preventDefault();
    const dishes = countryDishes.split(',').map((s) => s.trim()).filter(Boolean);

    if (editingCountry) {
      recipeService.updateCountry(editingCountry.id, {
        name: countryName,
        code: countryCode.toUpperCase(),
        flag: countryFlag,
        imageUrl: countryImageUrl,
        region: countryRegion,
        description: countryDescription,
        popularDishes: dishes
      });
    } else {
      const id = countryName.toLowerCase().replace(/\s+/g, '-');
      recipeService.addCountry({
        id,
        name: countryName,
        code: countryCode.toUpperCase() || 'XX',
        flag: countryFlag,
        imageUrl: countryImageUrl,
        region: countryRegion,
        description: countryDescription,
        popularDishes: dishes
      });
    }
    setIsCountryModalOpen(false);
    onRefreshData();
  };

  const handleDeleteCountry = (c: Country) => {
    if (confirm(`Delete country "${c.name}"? Recipes linked will remain.`)) {
      recipeService.deleteCountry(c.id);
      onRefreshData();
    }
  };

  // User status toggle
  const handleToggleUserStatus = (userId: string) => {
    recipeService.toggleUserStatus(userId);
    onRefreshData();
  };

  // Review delete
  const handleDeleteReview = (reviewId: string) => {
    if (confirm('Are you sure you want to remove this review?')) {
      recipeService.deleteReview(reviewId);
      onRefreshData();
    }
  };

  const filteredRecipes = recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(recipeSearch.toLowerCase()) ||
      r.countryName.toLowerCase().includes(recipeSearch.toLowerCase()) ||
      r.category.toLowerCase().includes(recipeSearch.toLowerCase())
  );

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.region.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center text-white">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Platform Administration Console
                </span>
                <h1 className="font-display text-2xl sm:text-3xl font-bold">
                  Admin Management Dashboard
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenAddRecipe}
                className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Recipe</span>
              </button>

              <button
                onClick={handleOpenAddCountry}
                className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Add Country</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-stone-200 pb-px mb-8 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveAdminTab('overview')}
            className={`px-4 py-3 rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeAdminTab === 'overview'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <FolderTree className="w-4 h-4" />
            <span>Overview & Metrics</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('recipes')}
            className={`px-4 py-3 rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeAdminTab === 'recipes'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Recipe Management ({recipes.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('countries')}
            className={`px-4 py-3 rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeAdminTab === 'countries'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Country Management ({countries.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('users')}
            className={`px-4 py-3 rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeAdminTab === 'users'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>User Accounts ({users.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('reviews')}
            className={`px-4 py-3 rounded-t-xl transition-colors cursor-pointer flex items-center gap-2 border-b-2 whitespace-nowrap ${
              activeAdminTab === 'reviews'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Review Moderation ({reviews.length})</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeAdminTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Total Recipes
                </span>
                <span className="text-3xl font-display font-bold text-stone-900 mt-1 block tabular-nums">
                  {recipes.length}
                </span>
                <span className="text-[11px] text-emerald-600 font-medium block mt-1">
                  {recipes.filter((r) => r.isPublished).length} published
                </span>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Total Countries
                </span>
                <span className="text-3xl font-display font-bold text-stone-900 mt-1 block tabular-nums">
                  {countries.length}
                </span>
                <span className="text-[11px] text-amber-600 font-medium block mt-1">
                  17 global culinary hubs
                </span>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Registered Users
                </span>
                <span className="text-3xl font-display font-bold text-stone-900 mt-1 block tabular-nums">
                  {users.length}
                </span>
                <span className="text-[11px] text-stone-500 font-medium block mt-1">
                  Active explorer accounts
                </span>
              </div>

              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  Total Reviews
                </span>
                <span className="text-3xl font-display font-bold text-stone-900 mt-1 block tabular-nums">
                  {reviews.length}
                </span>
                <span className="text-[11px] text-amber-600 font-medium block mt-1">
                  Community feedback
                </span>
              </div>
            </div>

            {/* Recent recipes table */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-stone-900">
                  Recently Added Recipes
                </h3>
                <button
                  onClick={() => setActiveAdminTab('recipes')}
                  className="text-xs font-semibold text-amber-700 hover:underline cursor-pointer"
                >
                  Manage all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-semibold uppercase">
                      <th className="py-2.5">Recipe</th>
                      <th className="py-2.5">Country</th>
                      <th className="py-2.5">Category</th>
                      <th className="py-2.5">Difficulty</th>
                      <th className="py-2.5">Status</th>
                      <th className="py-2.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {recipes.slice(0, 5).map((r) => (
                      <tr key={r.id} className="hover:bg-stone-50">
                        <td className="py-3 font-semibold text-stone-900 flex items-center gap-2">
                          <img
                            src={r.imageUrl}
                            alt={r.title}
                            className="w-8 h-8 rounded-lg object-cover"
                          />
                          <span className="truncate max-w-[200px]">{r.title}</span>
                        </td>
                        <td className="py-3 text-stone-600">
                          {r.countryFlag} {r.countryName}
                        </td>
                        <td className="py-3 text-stone-600">{r.category}</td>
                        <td className="py-3 text-stone-600">{r.difficulty}</td>
                        <td className="py-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              r.isPublished
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            {r.isPublished ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-3 text-right space-x-2">
                          <button
                            onClick={() => onPreviewRecipe(r)}
                            className="text-stone-500 hover:text-stone-900 font-medium"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleOpenEditRecipe(r)}
                            className="text-amber-700 hover:underline font-semibold"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RECIPE MANAGEMENT */}
        {activeAdminTab === 'recipes' && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={recipeSearch}
                  onChange={(e) => setRecipeSearch(e.target.value)}
                  placeholder="Filter recipes by title, country, or category..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <button
                onClick={handleOpenAddRecipe}
                className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Create Recipe</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-semibold uppercase">
                    <th className="py-3">Dish Title</th>
                    <th className="py-3">Country</th>
                    <th className="py-3">Category</th>
                    <th className="py-3">Time</th>
                    <th className="py-3">Difficulty</th>
                    <th className="py-3">Status</th>
                    <th className="py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredRecipes.map((r) => (
                    <tr key={r.id} className="hover:bg-stone-50">
                      <td className="py-3 font-semibold text-stone-900 flex items-center gap-2.5">
                        <img
                          src={r.imageUrl}
                          alt={r.title}
                          className="w-9 h-9 rounded-lg object-cover"
                        />
                        <span className="truncate max-w-[220px]">{r.title}</span>
                      </td>
                      <td className="py-3 text-stone-700">
                        {r.countryFlag} {r.countryName}
                      </td>
                      <td className="py-3 text-stone-600">{r.category}</td>
                      <td className="py-3 text-stone-600 tabular-nums">{r.totalTimeMinutes}m</td>
                      <td className="py-3 text-stone-600">{r.difficulty}</td>
                      <td className="py-3">
                        <button
                          onClick={() => handleTogglePublish(r)}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider cursor-pointer ${
                            r.isPublished
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                          title="Click to toggle publish status"
                        >
                          {r.isPublished ? <CheckCircle className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                          <span>{r.isPublished ? 'Published' : 'Draft'}</span>
                        </button>
                      </td>
                      <td className="py-3 text-right space-x-2">
                        <button
                          onClick={() => onPreviewRecipe(r)}
                          className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg cursor-pointer"
                          title="Preview Recipe"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleOpenEditRecipe(r)}
                          className="p-1.5 text-amber-700 hover:bg-amber-50 rounded-lg cursor-pointer"
                          title="Edit Recipe"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteRecipe(r.id, r.title)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                          title="Delete Recipe"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: COUNTRY MANAGEMENT */}
        {activeAdminTab === 'countries' && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <button
                onClick={handleOpenAddCountry}
                className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Country</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-semibold uppercase">
                    <th className="py-3">Flag & Name</th>
                    <th className="py-3">Region</th>
                    <th className="py-3">Popular Dishes</th>
                    <th className="py-3">Recipes</th>
                    <th className="py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredCountries.map((c) => (
                    <tr key={c.id} className="hover:bg-stone-50">
                      <td className="py-3 font-semibold text-stone-900 flex items-center gap-2">
                        <span className="text-xl">{c.flag}</span>
                        <span>{c.name}</span>
                        <span className="text-stone-400 font-mono text-[10px]">({c.code})</span>
                      </td>
                      <td className="py-3 text-stone-600">{c.region}</td>
                      <td className="py-3 text-stone-600 truncate max-w-[250px]">
                        {c.popularDishes.join(', ')}
                      </td>
                      <td className="py-3 text-stone-800 font-bold tabular-nums">
                        {recipes.filter((r) => r.countryId.toLowerCase() === c.id.toLowerCase()).length}
                      </td>
                      <td className="py-3 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEditCountry(c)}
                          className="p-1.5 text-amber-700 hover:bg-amber-50 rounded-lg cursor-pointer"
                          title="Edit Country"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCountry(c)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                          title="Delete Country"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: USERS MANAGEMENT */}
        {activeAdminTab === 'users' && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
              Registered Platform Users
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-semibold uppercase">
                    <th className="py-3">User</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Role</th>
                    <th className="py-3">Joined</th>
                    <th className="py-3">Status</th>
                    <th className="py-3 text-right">Account Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-stone-50">
                      <td className="py-3 font-semibold text-stone-900 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                          {u.name ? u.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() : 'U'}
                        </div>
                        <span>{u.name}</span>
                      </td>
                      <td className="py-3 text-stone-600">{u.email}</td>
                      <td className="py-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                          {u.role}
                        </span>
                      </td>
                      <td className="py-3 text-stone-500 tabular-nums">{u.joinedDate}</td>
                      <td className="py-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            u.status === 'active'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-rose-50 text-rose-700'
                          }`}
                        >
                          {u.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        {u.role !== 'admin' && (
                          <button
                            onClick={() => handleToggleUserStatus(u.id)}
                            className={`px-3 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer ${
                              u.status === 'active'
                                ? 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                            }`}
                          >
                            {u.status === 'active' ? 'Suspend Account' : 'Activate Account'}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: REVIEWS MODERATION */}
        {activeAdminTab === 'reviews' && (
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
              Community Review Moderation
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-semibold uppercase">
                    <th className="py-3">Recipe</th>
                    <th className="py-3">Author</th>
                    <th className="py-3">Rating</th>
                    <th className="py-3">Review Comment</th>
                    <th className="py-3">Date</th>
                    <th className="py-3 text-right">Moderate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {reviews.map((rev) => {
                    const r = recipes.find((item) => item.id === rev.recipeId);
                    return (
                      <tr key={rev.id} className="hover:bg-stone-50">
                        <td className="py-3 font-semibold text-stone-900 max-w-[150px] truncate">
                          {r ? r.title : rev.recipeId}
                        </td>
                        <td className="py-3 text-stone-700">{rev.userName}</td>
                        <td className="py-3">
                          <div className="flex items-center text-amber-500">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-3 h-3 ${s <= rev.rating ? 'fill-current' : 'text-stone-200'}`}
                              />
                            ))}
                          </div>
                        </td>
                        <td className="py-3 text-stone-600 max-w-[280px]">{rev.comment}</td>
                        <td className="py-3 text-stone-400 tabular-nums">{rev.createdAt}</td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => handleDeleteReview(rev.id)}
                            className="px-2.5 py-1 text-rose-600 hover:bg-rose-50 rounded-lg font-semibold cursor-pointer"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* RECIPE CREATE/EDIT MODAL */}
      {isRecipeModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <h3 className="font-display text-xl font-bold text-stone-900">
                {editingRecipe ? 'Edit Recipe' : 'Add New World Recipe'}
              </h3>
              <button
                onClick={() => setIsRecipeModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveRecipe} className="mt-5 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Recipe Title</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Traditional Beef Bourguignon"
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Country of Origin</label>
                  <select
                    value={formCountryId}
                    onChange={(e) => setFormCountryId(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  >
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Category</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  >
                    <option value="Dinner">Dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Street Food">Street Food</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Appetizer">Appetizer</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Dietary</label>
                  <select
                    value={formDietary}
                    onChange={(e) => setFormDietary(e.target.value as any)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  >
                    <option value="Non-vegetarian">Non-vegetarian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-free">Gluten-free</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Difficulty</label>
                  <select
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value as any)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Servings</label>
                  <input
                    type="number"
                    min="1"
                    value={formServings}
                    onChange={(e) => setFormServings(Number(e.target.value))}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Prep Time (mins)</label>
                  <input
                    type="number"
                    min="1"
                    value={formPrepTime}
                    onChange={(e) => setFormPrepTime(Number(e.target.value))}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Cook Time (mins)</label>
                  <input
                    type="number"
                    min="1"
                    value={formCookTime}
                    onChange={(e) => setFormCookTime(Number(e.target.value))}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Summary of flavors, origin, and culinary presentation..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Recipe Food Photo URL</label>
                <input
                  type="url"
                  value={formImageUrl}
                  onChange={(e) => setFormImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                />
              </div>

              {/* Dynamic Ingredients Builder */}
              <div className="pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-stone-900 block">Ingredients List</label>
                  <button
                    type="button"
                    onClick={() => setFormIngredients([...formIngredients, { name: '', amount: '', unit: '' }])}
                    className="text-amber-700 hover:underline font-semibold cursor-pointer"
                  >
                    + Add Ingredient
                  </button>
                </div>

                <div className="space-y-2">
                  {formIngredients.map((ing, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Ingredient name (e.g. Basmati Rice)"
                        value={ing.name}
                        onChange={(e) => {
                          const updated = [...formIngredients];
                          updated[idx].name = e.target.value;
                          setFormIngredients(updated);
                        }}
                        className="flex-1 p-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Amount"
                        value={ing.amount}
                        onChange={(e) => {
                          const updated = [...formIngredients];
                          updated[idx].amount = e.target.value;
                          setFormIngredients(updated);
                        }}
                        className="w-20 p-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Unit (g, tbsp)"
                        value={ing.unit}
                        onChange={(e) => {
                          const updated = [...formIngredients];
                          updated[idx].unit = e.target.value;
                          setFormIngredients(updated);
                        }}
                        className="w-20 p-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                      />
                      {formIngredients.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setFormIngredients(formIngredients.filter((_, i) => i !== idx))}
                          className="text-stone-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Cooking Instructions Builder */}
              <div className="pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-stone-900 block">Sequential Cooking Steps</label>
                  <button
                    type="button"
                    onClick={() => setFormSteps([...formSteps, { title: '', description: '', duration: 10, tip: '' }])}
                    className="text-amber-700 hover:underline font-semibold cursor-pointer"
                  >
                    + Add Step
                  </button>
                </div>

                <div className="space-y-3">
                  {formSteps.map((step, idx) => (
                    <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-stone-700">Step {idx + 1}</span>
                        {formSteps.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setFormSteps(formSteps.filter((_, i) => i !== idx))}
                            className="text-stone-400 hover:text-rose-600 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Step Title (e.g. Sear Meat)"
                        value={step.title}
                        onChange={(e) => {
                          const updated = [...formSteps];
                          updated[idx].title = e.target.value;
                          setFormSteps(updated);
                        }}
                        className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs"
                      />
                      <textarea
                        rows={2}
                        placeholder="Step description with cooking techniques..."
                        value={step.description}
                        onChange={(e) => {
                          const updated = [...formSteps];
                          updated[idx].description = e.target.value;
                          setFormSteps(updated);
                        }}
                        className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Duration (mins)"
                          value={step.duration}
                          onChange={(e) => {
                            const updated = [...formSteps];
                            updated[idx].duration = Number(e.target.value);
                            setFormSteps(updated);
                          }}
                          className="p-2 bg-white border border-stone-200 rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Chef Tip (optional)"
                          value={step.tip}
                          onChange={(e) => {
                            const updated = [...formSteps];
                            updated[idx].tip = e.target.value;
                            setFormSteps(updated);
                          }}
                          className="p-2 bg-white border border-stone-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsRecipeModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-xl font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl cursor-pointer shadow-sm"
                >
                  {editingRecipe ? 'Update Recipe' : 'Publish Recipe'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* COUNTRY CREATE/EDIT MODAL */}
      {isCountryModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <h3 className="font-display text-xl font-bold text-stone-900">
                {editingCountry ? `Edit ${editingCountry.name}` : 'Add New Nation / Cuisine'}
              </h3>
              <button
                onClick={() => setIsCountryModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 cursor-pointer"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCountry} className="mt-4 space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Country Name</label>
                <input
                  type="text"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  placeholder="e.g. Portugal"
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Country Flag (Emoji)</label>
                  <input
                    type="text"
                    value={countryFlag}
                    onChange={(e) => setCountryFlag(e.target.value)}
                    placeholder="e.g. 🇵🇹"
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">2-Letter ISO Code</label>
                  <input
                    type="text"
                    maxLength={2}
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    placeholder="e.g. PT"
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Region</label>
                <input
                  type="text"
                  value={countryRegion}
                  onChange={(e) => setCountryRegion(e.target.value)}
                  placeholder="e.g. Southern Europe"
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Gastronomy Introduction</label>
                <textarea
                  rows={3}
                  value={countryDescription}
                  onChange={(e) => setCountryDescription(e.target.value)}
                  placeholder="Cultural background, flavors, iconic ingredients..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Popular Dishes (comma-separated)</label>
                <input
                  type="text"
                  value={countryDishes}
                  onChange={(e) => setCountryDishes(e.target.value)}
                  placeholder="e.g. Pastel de Nata, Bacalhau, Caldo Verde"
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Representative Image URL</label>
                <input
                  type="url"
                  value={countryImageUrl}
                  onChange={(e) => setCountryImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCountryModalOpen(false)}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-xl font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl cursor-pointer"
                >
                  Save Country
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
