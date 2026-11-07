import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  Flame,
  Users,
  Heart,
  Bookmark,
  Share2,
  CheckCircle,
  RotateCcw,
  Star,
  ChefHat,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Printer,
  MessageSquare
} from 'lucide-react';
import { Recipe, Review } from '../types';
import { recipeService } from '../services/recipeApi';

interface RecipeDetailsPageProps {
  recipe: Recipe;
  onBack: () => void;
  onSelectCountry: (countryId: string) => void;
  isFavorite: boolean;
  isSaved: boolean;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  onToggleSaved: (recipeId: string) => void;
}

export const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = ({
  recipe,
  onBack,
  onSelectCountry,
  isFavorite,
  isSaved,
  onToggleFavorite,
  onToggleSaved
}) => {
  // Servings multiplier
  const [servingsMultiplier, setServingsMultiplier] = useState<number>(recipe.servings || 4);

  // Ingredients collected checklist
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  // Cooking Progress Tracker state
  const totalSteps = recipe.instructions.length;
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [isCookingCompleted, setIsCookingCompleted] = useState<boolean>(false);
  const [isTrackerActive, setIsTrackerActive] = useState<boolean>(false);

  // Reviews state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userRating, setUserRating] = useState<number>(5);
  const [reviewComment, setReviewComment] = useState<string>('');
  const [isSubmittingReview, setIsSubmittingReview] = useState<boolean>(false);
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState<string>('');

  // Record recently viewed
  useEffect(() => {
    recipeService.recordRecentlyViewed(recipe.id);
    loadReviews();
  }, [recipe.id]);

  const loadReviews = () => {
    const list = recipeService.getReviewsForRecipe(recipe.id);
    setReviews(list);
  };

  // Toggle ingredient collected checkbox
  const toggleIngredient = (id: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const markAllIngredients = (val: boolean) => {
    const updated: Record<string, boolean> = {};
    recipe.ingredients.forEach((ing) => {
      updated[ing.id] = val;
    });
    setCheckedIngredients(updated);
  };

  // Cooking Tracker progress calculation:
  // Each step represents 1 / totalSteps * 100%
  // Or step percentage = ((currentStepIndex + (isCookingCompleted ? 1 : 0)) / totalSteps) * 100
  const progressPercent = Math.min(
    100,
    Math.round(((Object.keys(completedSteps).filter((k) => completedSteps[Number(k)]).length) / Math.max(1, totalSteps)) * 100)
  );

  const handleNextStep = () => {
    // Mark current step completed
    const updatedCompleted = { ...completedSteps, [currentStepIndex]: true };
    setCompletedSteps(updatedCompleted);

    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Reached final step
      setIsCookingCompleted(true);
      recipeService.recordCookingCompleted(recipe);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setIsCookingCompleted(false);
    }
  };

  const handleRestartCooking = () => {
    setCurrentStepIndex(0);
    setCompletedSteps({});
    setIsCookingCompleted(false);
  };

  const handleMarkStepCompleted = (index: number) => {
    const updated = { ...completedSteps, [index]: !completedSteps[index] };
    setCompletedSteps(updated);
    if (Object.keys(updated).filter((k) => updated[Number(k)]).length === totalSteps) {
      setIsCookingCompleted(true);
      recipeService.recordCookingCompleted(recipe);
    }
  };

  // Submit review
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    setIsSubmittingReview(true);

    try {
      recipeService.addReview(recipe.id, userRating, reviewComment.trim());
      setReviewComment('');
      setReviewSuccessMsg('Thank you! Your culinary review has been posted.');
      loadReviews();
      setTimeout(() => setReviewSuccessMsg(''), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingReview(false);
    }
  };

  // Scaled ingredient quantity calculation
  const getScaledAmount = (baseAmount: string) => {
    const baseServings = recipe.servings || 4;
    const factor = servingsMultiplier / baseServings;
    const num = parseFloat(baseAmount);
    if (isNaN(num)) return baseAmount;
    const scaled = num * factor;
    return Number.isInteger(scaled) ? scaled.toString() : scaled.toFixed(1).replace(/\.0$/, '');
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Top Nav / Breadcrumbs */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 font-semibold text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <button
              onClick={() => onSelectCountry(recipe.countryId)}
              className="hover:text-amber-700 transition-colors cursor-pointer font-medium"
            >
              {recipe.countryName}
            </button>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              {recipe.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => onToggleFavorite(recipe.id, e)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 font-semibold ${
                isFavorite
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
              title="Favorite"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isFavorite ? 'Favorited' : 'Favorite'}</span>
            </button>

            <button
              onClick={() => onToggleSaved(recipe.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 font-semibold ${
                isSaved
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
              title="Save for later"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer hidden md:flex items-center gap-1.5 font-semibold"
              title="Print Recipe"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Hero Card / Recipe Overview */}
        <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Food Photograph */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[320px] bg-stone-100">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80');
                }}
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-stone-900/80 backdrop-blur-xs text-white rounded-xl text-xs font-semibold shadow-md">
                <span className="text-lg">{recipe.countryFlag}</span>
                <span>{recipe.countryName}</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-400">{recipe.category}</span>
              </div>
            </div>

            {/* Recipe Information */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-amber-700">{recipe.cuisineType} Cuisine</span>
                  <span aria-hidden="true">·</span>
                  <span>{recipe.dietary}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1 text-stone-800 font-semibold">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{recipe.rating.toFixed(1)}</span>
                    <span className="text-stone-400 font-normal">({recipe.reviewCount} reviews)</span>
                  </div>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
                  {recipe.title}
                </h1>

                <p className="mt-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
                  {recipe.description}
                </p>
              </div>

              {/* Meta Timing & Servings Strip */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                      Prep Time
                    </span>
                    <span className="text-sm font-bold text-stone-800 mt-0.5 block tabular-nums">
                      {recipe.prepTimeMinutes} mins
                    </span>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                      Cook Time
                    </span>
                    <span className="text-sm font-bold text-stone-800 mt-0.5 block tabular-nums">
                      {recipe.cookTimeMinutes} mins
                    </span>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                      Total Time
                    </span>
                    <span className="text-sm font-bold text-amber-700 mt-0.5 block tabular-nums">
                      {recipe.totalTimeMinutes} mins
                    </span>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                      Difficulty
                    </span>
                    <span className="text-sm font-bold text-stone-800 mt-0.5 block">
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Primary CTA: Jump into Cooking Mode */}
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setIsTrackerActive(true);
                      const trackerElement = document.getElementById('cooking-tracker-section');
                      if (trackerElement) {
                        trackerElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto flex-1 px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ChefHat className="w-5 h-5" />
                    <span>Start Interactive Cooking Mode</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content: Ingredients on Left, Steps & Tracker on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* LEFT: Ingredients Checklist & Servings Stepper */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h2 className="font-display text-xl font-bold text-stone-900">Ingredients</h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Check off ingredients as you prepare them in your kitchen.
                  </p>
                </div>

                {/* Servings Stepper */}
                <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
                  <button
                    onClick={() => setServingsMultiplier(Math.max(1, servingsMultiplier - 1))}
                    className="w-7 h-7 flex items-center justify-center text-xs font-bold text-stone-700 hover:bg-white rounded-lg transition-colors cursor-pointer"
                    title="Decrease servings"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-stone-900 tabular-nums">
                    {servingsMultiplier} {servingsMultiplier === 1 ? 'serving' : 'servings'}
                  </span>
                  <button
                    onClick={() => setServingsMultiplier(servingsMultiplier + 1)}
                    className="w-7 h-7 flex items-center justify-center text-xs font-bold text-stone-700 hover:bg-white rounded-lg transition-colors cursor-pointer"
                    title="Increase servings"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mark all buttons */}
              <div className="flex items-center justify-between py-2.5 text-xs text-stone-500">
                <span className="tabular-nums font-medium">
                  {Object.values(checkedIngredients).filter(Boolean).length} of {recipe.ingredients.length} collected
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => markAllIngredients(true)}
                    className="text-amber-700 hover:underline font-semibold cursor-pointer"
                  >
                    Check all
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    onClick={() => markAllIngredients(false)}
                    className="text-stone-400 hover:text-stone-600 cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Ingredients Checklist */}
              <ul className="space-y-2 mt-2 divide-y divide-stone-50">
                {recipe.ingredients.map((ing) => {
                  const isChecked = !!checkedIngredients[ing.id];
                  const scaledAmount = getScaledAmount(ing.amount);

                  return (
                    <li
                      key={ing.id}
                      onClick={() => toggleIngredient(ing.id)}
                      className={`pt-2.5 first:pt-0 flex items-start gap-3 p-2 rounded-xl transition-colors cursor-pointer ${
                        isChecked ? 'bg-amber-50/50' : 'hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // handled by li onClick
                        className="mt-1 w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500 cursor-pointer"
                      />
                      <div className="flex-1 flex items-baseline justify-between gap-2 text-xs sm:text-sm">
                        <span
                          className={`font-medium transition-colors ${
                            isChecked ? 'line-through text-stone-400' : 'text-stone-800'
                          }`}
                        >
                          {ing.name}
                        </span>
                        <span
                          className={`font-semibold shrink-0 tabular-nums ${
                            isChecked ? 'text-stone-400' : 'text-amber-800'
                          }`}
                        >
                          {scaledAmount} {ing.unit}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* RIGHT: Step-by-Step Instructions & Cooking Progress Tracker */}
          <div className="lg:col-span-7 space-y-8">
            {/* Interactive Cooking Progress Tracker Section */}
            <div
              id="cooking-tracker-section"
              className="bg-white border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                      Cooking Progress Tracker
                    </h3>
                    <p className="text-xs text-stone-500">
                      Interactive real-time cooking assistant with automated progress tracking
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleRestartCooking}
                  className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                  title="Restart cooking instructions"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Restart</span>
                </button>
              </div>

              {/* Progress Bar & Percentage display (0% to 100%) */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-stone-700">
                    Step {Math.min(totalSteps, currentStepIndex + 1)} of {totalSteps}
                  </span>
                  <span className="text-amber-700 font-bold tabular-nums">
                    {progressPercent}% Complete
                  </span>
                </div>

                {/* Visual Progress Bar */}
                <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-amber-600 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Current Active Step Box or Celebration Box */}
              {isCookingCompleted ? (
                <div className="mt-6 p-6 sm:p-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
                  <div className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-stone-900">
                    Congratulations! Your recipe is complete.
                  </h4>
                  <p className="text-stone-600 text-sm mt-2 max-w-md mx-auto">
                    You have successfully prepared <strong>{recipe.title}</strong>! This dish has been saved to your personal cooking history.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleRestartCooking}
                      className="px-5 py-2.5 bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Cook Again from Step 1
                    </button>
                    <button
                      onClick={() => {
                        const reviewsSec = document.getElementById('reviews-section');
                        if (reviewsSec) reviewsSec.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 bg-amber-600 text-white hover:bg-amber-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Rate & Review Dish
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-6 p-5 sm:p-6 bg-stone-50 border border-stone-200/80 rounded-2xl">
                  <div className="flex items-center justify-between text-xs text-amber-800 font-semibold mb-2">
                    <span className="uppercase tracking-wider">
                      Current Step {currentStepIndex + 1}
                    </span>
                    {recipe.instructions[currentStepIndex]?.durationMinutes && (
                      <span className="flex items-center gap-1 tabular-nums text-stone-500">
                        <Clock className="w-3.5 h-3.5" />
                        ~{recipe.instructions[currentStepIndex].durationMinutes} mins
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-xl font-bold text-stone-900 mb-2">
                    {recipe.instructions[currentStepIndex]?.title}
                  </h4>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {recipe.instructions[currentStepIndex]?.description}
                  </p>

                  {recipe.instructions[currentStepIndex]?.tip && (
                    <div className="mt-4 p-3 bg-white border border-amber-200/70 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold">Chef's Secret: </strong>
                        {recipe.instructions[currentStepIndex].tip}
                      </div>
                    </div>
                  )}

                  {/* Step Action Controls */}
                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                    <button
                      onClick={handlePreviousStep}
                      disabled={currentStepIndex === 0}
                      className="px-4 py-2.5 text-xs font-semibold text-stone-700 bg-white border border-stone-200 rounded-xl hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Step</span>
                    </button>

                    <button
                      onClick={handleNextStep}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>
                        {currentStepIndex === totalSteps - 1 ? 'Complete Recipe' : 'Next Step'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Complete Sequential List of All Cooking Instructions */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                Step-by-Step Cooking Instructions
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Read through all preparation stages or jump directly into any step.
              </p>

              <div className="space-y-6">
                {recipe.instructions.map((step, idx) => {
                  const isDone = !!completedSteps[idx];
                  const isCurrent = currentStepIndex === idx;

                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-5 rounded-2xl border transition-all ${
                        isCurrent
                          ? 'border-amber-500 bg-amber-50/30 ring-2 ring-amber-500/20'
                          : isDone
                          ? 'border-stone-200 bg-stone-50/60'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleMarkStepCompleted(idx)}
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors cursor-pointer ${
                              isDone
                                ? 'bg-emerald-600 text-white'
                                : 'bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-800'
                            }`}
                            title={isDone ? 'Mark as not completed' : 'Mark as completed'}
                          >
                            {isDone ? <CheckCircle className="w-4 h-4" /> : step.stepNumber}
                          </button>
                          <h4 className="font-display font-bold text-base sm:text-lg text-stone-900">
                            {step.title}
                          </h4>
                        </div>

                        {step.durationMinutes && (
                          <span className="text-xs text-stone-400 tabular-nums font-medium flex items-center gap-1 shrink-0">
                            <Clock className="w-3.5 h-3.5" />
                            {step.durationMinutes}m
                          </span>
                        )}
                      </div>

                      <p className="mt-2.5 text-stone-700 text-sm leading-relaxed pl-10">
                        {step.description}
                      </p>

                      {step.tip && (
                        <div className="mt-3 ml-10 p-2.5 bg-amber-50/70 border border-amber-100 rounded-xl text-xs text-amber-900">
                          <strong className="font-semibold">Tip: </strong>
                          {step.tip}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ratings & Community Reviews Section */}
            <div id="reviews-section" className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-900">
                    Community Reviews & Ratings
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-amber-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= Math.round(recipe.rating) ? 'fill-current' : 'text-stone-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-stone-900 tabular-nums">
                      {recipe.rating.toFixed(1)} out of 5
                    </span>
                    <span className="text-xs text-stone-400">({reviews.length} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Add Review Form */}
              <form onSubmit={handleReviewSubmit} className="mt-6 p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                  Leave Your Review & Rating
                </h4>

                {reviewSuccessMsg && (
                  <div className="mb-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium">
                    {reviewSuccessMsg}
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-stone-600 font-medium">Your Rating:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setUserRating(s)}
                        className="p-1 text-amber-500 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            s <= userRating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder="How did this recipe turn out? Share your tips, seasoning tweaks, or experience..."
                  className="w-full p-3 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
                  required
                />

                <div className="mt-3 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmittingReview || !reviewComment.trim()}
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors disabled:opacity-50 cursor-pointer shadow-2xs"
                  >
                    {isSubmittingReview ? 'Submitting...' : 'Post Culinary Review'}
                  </button>
                </div>
              </form>

              {/* Reviews List */}
              <div className="mt-8 space-y-4">
                {reviews.length === 0 ? (
                  <p className="text-center text-xs text-stone-400 py-6">
                    No reviews yet. Be the first to cook and review this dish!
                  </p>
                ) : (
                  reviews.map((rev) => (
                    <div key={rev.id} className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-stone-900">{rev.userName}</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                          <span className="text-stone-400 tabular-nums">{rev.createdAt}</span>
                        </div>
                        <div className="flex items-center text-amber-500">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-3.5 h-3.5 ${
                                s <= rev.rating ? 'fill-current' : 'text-stone-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
