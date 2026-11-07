import React from 'react';
import { Globe, Heart, Utensils } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onSelectCountry: (countryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCountry }) => {
  const topCountries = [
    { id: 'india', name: 'India', flag: '🇮🇳' },
    { id: 'italy', name: 'Italy', flag: '🇮🇹' },
    { id: 'mexico', name: 'Mexico', flag: '🇲🇽' },
    { id: 'japan', name: 'Japan', flag: '🇯🇵' },
    { id: 'france', name: 'France', flag: '🇫🇷' },
    { id: 'thailand', name: 'Thailand', flag: '🇹🇭' },
    { id: 'spain', name: 'Spain', flag: '🇪🇸' },
    { id: 'greece', name: 'Greece', flag: '🇬🇷' }
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold text-white">RRC Recipe</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              RRC Recipe – World Recipe Explorer is a global gastronomic archive connecting people through culinary discovery, authentic recipes, and interactive cooking guides.
            </p>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Recipes Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Nations Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Meal Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Cuisines */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Popular Cuisines
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {topCountries.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectCountry(c.id)}
                  className="text-left hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Platform & Data */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Platform & Features
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li className="flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-amber-500" />
                <span>0% to 100% Step Tracker</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Saved Favorites & Cooking History</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span>TheMealDB API Integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} RRC Recipe – World Recipe Explorer. Built for culinary explorers.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-stone-300">
              About Us
            </button>
            <span aria-hidden="true">·</span>
            <span>REST API Ready</span>
            <span aria-hidden="true">·</span>
            <span>Full-Stack Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
