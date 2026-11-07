import React from 'react';
import { Clock, Star, Flame, Heart } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (recipeId: string, e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelect,
  isFavorite = false,
  onToggleFavorite
}) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Medium':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Hard':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      default:
        return 'text-stone-700 bg-stone-100 border-stone-200';
    }
  };

  return (
    <div
      onClick={() => onSelect(recipe)}
      className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-amber-500/70 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col text-left"
    >
      {/* Recipe Food Photography */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Graceful fallback to food placeholder
            (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Country Flag & Name Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-stone-900/80 backdrop-blur-xs text-white rounded-lg text-xs font-medium shadow-sm">
          <span>{recipe.countryFlag}</span>
          <span className="font-semibold">{recipe.countryName}</span>
        </div>

        {/* Favorite Heart Button */}
        {onToggleFavorite && (
          <button
            onClick={(e) => onToggleFavorite(recipe.id, e)}
            className={`absolute top-3 right-3 p-2 rounded-full transition-transform active:scale-90 cursor-pointer shadow-md backdrop-blur-xs ${
              isFavorite
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 hover:bg-white text-stone-700'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-label="Toggle favorite"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        )}

        {/* Category tag on image bottom left */}
        <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-stone-200 uppercase tracking-wider">
          {recipe.category}
        </div>

        {/* Rating on image bottom right */}
        <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-xs font-semibold text-white bg-stone-900/70 backdrop-blur-xs px-2 py-0.5 rounded-md">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="tabular-nums">{recipe.rating.toFixed(1)}</span>
          <span className="text-[10px] text-stone-300">({recipe.reviewCount})</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-lg text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
            {recipe.title}
          </h3>
          <p className="mt-1.5 text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Footer Meta Row (No pills for metadata, clean text and subtle badges) */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span className="tabular-nums">{recipe.totalTimeMinutes} mins</span>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-medium text-stone-700">{recipe.difficulty}</span>
          </div>

          <div className="text-[11px] text-stone-400">
            {recipe.servings} servings
          </div>
        </div>
      </div>
    </div>
  );
};
