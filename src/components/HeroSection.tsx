import React, { useState } from 'react';
import { Search, Sparkles, Compass, ChefHat, Globe2 } from 'lucide-react';
import { HERO_IMAGE_PATH } from '../data/seedData';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onExplore: () => void;
  onRandom: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onExplore,
  onRandom
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  const popularTags = ['Chicken Biryani', 'Margherita Pizza', 'Tacos al Pastor', 'Tonkotsu Ramen', 'Pad Thai', 'Paella'];

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_PATH}
          alt="International culinary spread of world recipes"
          className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000"
        />
        {/* Measured dark gradient scrim for WCAG AA 4.5:1 contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60" />
        <div className="absolute inset-0 bg-stone-950/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Clean unboxed kicker without pills */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
          <Globe2 className="w-4 h-4" />
          <span>Authentic Global Cuisines</span>
          <span aria-hidden="true">·</span>
          <span>Interactive Cooking Guide</span>
        </div>

        {/* Main Heading with text-wrap balance */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto mb-5 [text-wrap:balance]">
          Discover Recipes From Around the World
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto mb-9 font-normal leading-relaxed [text-wrap:balance]">
          Explore international cuisines, discover new flavours, and learn to cook your favourite dishes with step-by-step interactive instructions.
        </p>

        {/* Prominent Recipe Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto relative flex items-center shadow-2xl rounded-2xl bg-white/95 backdrop-blur-md p-1.5 border border-stone-200/50 mb-6"
        >
          <div className="pl-4 text-stone-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by dish name, country, or ingredients (e.g., Biryani, Prawns, Tacos)..."
            className="w-full px-4 py-3.5 text-stone-900 placeholder-stone-400 text-sm sm:text-base bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Search
          </button>
        </form>

        {/* Popular Quick Searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-300 mb-9">
          <span className="text-stone-400 font-medium">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchInput(tag);
                onSearch(tag);
              }}
              className="text-stone-300 hover:text-white underline underline-offset-4 decoration-stone-500 hover:decoration-amber-400 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-7 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-amber-950/30 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4" />
            <span>Explore All Recipes</span>
          </button>

          <button
            onClick={onRandom}
            className="w-full sm:w-auto px-7 py-3.5 bg-stone-900/80 hover:bg-stone-800 text-stone-100 border border-stone-700/80 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Surprise Me (Random Recipe)</span>
          </button>
        </div>

        {/* Editorial Trust Metrics with typographic separators (No pill badges) */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-amber-500" />
            <span>17+ Global Nations</span>
          </div>
          <span aria-hidden="true" className="text-stone-700">·</span>
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-amber-500" />
            <span>Tested Authentic Recipes</span>
          </div>
          <span aria-hidden="true" className="text-stone-700">·</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>0% to 100% Cooking Tracker</span>
          </div>
        </div>
      </div>
    </section>
  );
};
