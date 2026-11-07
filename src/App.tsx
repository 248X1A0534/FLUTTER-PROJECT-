import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CountrySelection } from './components/CountrySelection';
import { CountryDashboard } from './components/CountryDashboard';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailsPage } from './components/RecipeDetailsPage';
import { ExploreRecipesPage } from './components/ExploreRecipesPage';
import { CategoriesPage } from './components/CategoriesPage';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { AuthModal } from './components/AuthModal';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { recipeService } from './services/recipeApi';
import { Recipe, Country, UserProfile } from './types';
import { COOKING_MASTERCLASS_IMAGE } from './data/seedData';
import { Sparkles, Utensils, ArrowRight, ChefHat, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Selected views
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Search query transfer
  const [exploreSearchQuery, setExploreSearchQuery] = useState<string>('');
  const [exploreCountryId, setExploreCountryId] = useState<string>('all');
  const [exploreCategory, setExploreCategory] = useState<string>('all');

  // Modals
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  // Random dish notification toast
  const [toastMessage, setToastMessage] = useState<string>('');

  const refreshState = () => {
    setRecipes([...recipeService.getRecipes()]);
    setCountries([...recipeService.getCountries()]);
    setCategories([...recipeService.getCategories()]);
    setCurrentUser(recipeService.getCurrentUser());
  };

  useEffect(() => {
    refreshState();
    const unsubscribe = recipeService.subscribe(() => {
      refreshState();
    });
    return () => unsubscribe();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Navigations
  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setActiveTab('country-dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCountryById = (countryId: string) => {
    const c = countries.find((item) => item.id.toLowerCase() === countryId.toLowerCase());
    if (c) {
      handleSelectCountry(c);
    } else {
      setExploreCountryId(countryId);
      setActiveTab('explore');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setActiveTab('recipe-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchFromHero = (query: string) => {
    setExploreSearchQuery(query);
    setExploreCountryId('all');
    setExploreCategory('all');
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromPage = (categoryName: string) => {
    setExploreCategory(categoryName);
    setExploreCountryId('all');
    setExploreSearchQuery('');
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Random Recipe action
  const handleRandomRecipe = async () => {
    // Try to pick from published recipes
    const published = recipeService.getPublishedRecipes();
    if (published.length > 0) {
      const randomIndex = Math.floor(Math.random() * published.length);
      const chosen = published[randomIndex];
      showToast(`Discovering random dish: ${chosen.title}!`);
      handleSelectRecipe(chosen);
    }
  };

  // Favorite toggle
  const handleToggleFavorite = (recipeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentUser) {
      setIsAuthOpen(true);
      return;
    }
    const isNowFav = recipeService.toggleFavorite(recipeId);
    showToast(isNowFav ? 'Added to your Favourite Recipes!' : 'Removed from favourites.');
    refreshState();
  };

  // Saved toggle
  const handleToggleSaved = (recipeId: string) => {
    if (!currentUser) {
      setIsAuthOpen(true);
      return;
    }
    const isNowSaved = recipeService.toggleSaved(recipeId);
    showToast(isNowSaved ? 'Saved for later!' : 'Removed from saved recipes.');
    refreshState();
  };

  const handleLogout = () => {
    recipeService.setCurrentUser('u-ravi');
    refreshState();
    showToast('Switched to default profile.');
  };

  const featuredRecipes = recipes.filter((r) => r.isPublished).slice(0, 6);
  const favoriteCount = currentUser?.favoriteRecipeIds.length || 0;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'about') {
            setIsAboutOpen(true);
            return;
          }
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onRandomRecipe={handleRandomRecipe}
        favoriteCount={favoriteCount}
      />

      {/* MAIN VIEW SWITCHER */}
      <main className="flex-1">
        {/* TAB: HOME */}
        {activeTab === 'home' && (
          <div>
            {/* 1. Hero Section */}
            <HeroSection
              onSearch={handleSearchFromHero}
              onExplore={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRandom={handleRandomRecipe}
            />

            {/* 2. Country Selection Section */}
            <CountrySelection
              countries={countries}
              onSelectCountry={handleSelectCountry}
            />

            {/* 3. Featured World Recipes Showcase */}
            <section className="py-16 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Curated Global Selections</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                      Popular International Dishes
                    </h2>
                    <p className="mt-1.5 text-stone-600 text-sm max-w-xl">
                      Master the world's most beloved iconic dishes with clear ingredients and sequential instructions.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('explore');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer group"
                  >
                    <span>View all {recipes.length} recipes</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {featuredRecipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      onSelect={handleSelectRecipe}
                      isFavorite={currentUser?.favoriteRecipeIds.includes(recipe.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Culinary Experience Highlight / Feature Strip */}
            <section className="py-16 bg-stone-100 border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                        <ChefHat className="w-4 h-4" />
                        <span>Interactive Cooking Guide</span>
                      </div>
                      <h3 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                        Never Miss a Step with Real-Time Cooking Tracking
                      </h3>
                      <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                        Cooking should be an immersive joy, not stressful juggling between timers and ingredient lists. Our interactive 0% to 100% progress tracker keeps your exact place, details timing per step, and calculates your achievements into your personal culinary history.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-4">
                      <button
                        onClick={handleRandomRecipe}
                        className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shadow-sm"
                      >
                        Try Cooking a Random Recipe
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('countries');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-3 text-stone-700 hover:text-stone-900 font-semibold text-xs rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
                      >
                        Browse All Countries
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[300px] bg-stone-100">
                    <img
                      src={COOKING_MASTERCLASS_IMAGE}
                      alt="Chef cooking fresh ingredients"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB: EXPLORE RECIPES */}
        {activeTab === 'explore' && (
          <ExploreRecipesPage
            recipes={recipes}
            countries={countries}
            onSelectRecipe={handleSelectRecipe}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={currentUser?.favoriteRecipeIds || []}
            initialSearchQuery={exploreSearchQuery}
            initialCountryId={exploreCountryId}
            initialCategory={exploreCategory}
          />
        )}

        {/* TAB: COUNTRIES (All countries directory) */}
        {activeTab === 'countries' && (
          <div className="py-6">
            <CountrySelection
              countries={countries}
              onSelectCountry={handleSelectCountry}
            />
          </div>
        )}

        {/* TAB: CATEGORIES */}
        {activeTab === 'categories' && (
          <CategoriesPage
            categories={categories}
            onSelectCategory={handleSelectCategoryFromPage}
          />
        )}

        {/* TAB: COUNTRY DASHBOARD */}
        {activeTab === 'country-dashboard' && selectedCountry && (
          <CountryDashboard
            country={selectedCountry}
            recipes={recipes}
            onBack={() => {
              setActiveTab('countries');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectRecipe={handleSelectRecipe}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={currentUser?.favoriteRecipeIds || []}
            isAdmin={currentUser?.role === 'admin'}
            onAddRecipeToCountry={() => {
              setActiveTab('admin');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB: RECIPE DETAILS & COOKING TRACKER */}
        {activeTab === 'recipe-details' && selectedRecipe && (
          <RecipeDetailsPage
            recipe={selectedRecipe}
            onBack={() => {
              // go back to previous context
              if (selectedCountry) {
                setActiveTab('country-dashboard');
              } else {
                setActiveTab('explore');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCountry={handleSelectCountryById}
            isFavorite={currentUser?.favoriteRecipeIds.includes(selectedRecipe.id) || false}
            isSaved={currentUser?.savedRecipeIds.includes(selectedRecipe.id) || false}
            onToggleFavorite={handleToggleFavorite}
            onToggleSaved={handleToggleSaved}
          />
        )}

        {/* TAB: USER PROFILE & DASHBOARD */}
        {activeTab === 'profile' && currentUser && (
          <UserDashboard
            currentUser={currentUser}
            recipes={recipes}
            onSelectRecipe={handleSelectRecipe}
            onToggleFavorite={handleToggleFavorite}
            onToggleSaved={handleToggleSaved}
            onLogout={handleLogout}
          />
        )}

        {/* TAB: ADMIN DASHBOARD */}
        {activeTab === 'admin' && currentUser && (
          <AdminDashboard
            recipes={recipes}
            countries={countries}
            currentUser={currentUser}
            onRefreshData={refreshState}
            onPreviewRecipe={handleSelectRecipe}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          if (tab === 'about') {
            setIsAboutOpen(true);
            return;
          }
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCountry={handleSelectCountryById}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(user) => {
          setCurrentUser(user);
          showToast(`Welcome back, ${user.name}!`);
          refreshState();
        }}
      />

      {/* About Us Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
