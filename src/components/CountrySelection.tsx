import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowRight, Utensils } from 'lucide-react';
import { Country } from '../types';

interface CountrySelectionProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
}

export const CountrySelection: React.FC<CountrySelectionProps> = ({
  countries,
  onSelectCountry
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  // Filter countries by search query
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.region.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // When not showing all and no search query, show max 10
  const displayedCountries = searchFilter.trim() || showAll
    ? filteredCountries
    : filteredCountries.slice(0, 10);

  return (
    <section className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1.5">
              <Utensils className="w-3.5 h-3.5" />
              <span>International Cuisines</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Explore Recipes By Country
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-xl">
              Immerse yourself in authentic regional culinary traditions. Select a nation to enter its dedicated culinary dashboard.
            </p>
          </div>

          {/* Search & Expand Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Find country..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors shadow-2xs"
              />
            </div>

            {!searchFilter.trim() && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs whitespace-nowrap"
              >
                <span>{showAll ? 'Show Top 10' : `All Countries (${countries.length})`}</span>
                {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>

        {/* Countries Grid */}
        {displayedCountries.length === 0 ? (
          <div className="py-12 text-center bg-white border border-stone-200 rounded-2xl p-8">
            <p className="text-stone-500 text-sm">No countries match "{searchFilter}".</p>
            <button
              onClick={() => setSearchFilter('')}
              className="mt-3 text-xs font-semibold text-amber-700 hover:underline"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {displayedCountries.map((country) => (
              <div
                key={country.id}
                onClick={() => onSelectCountry(country)}
                className="group relative bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-amber-500/80 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col text-left"
              >
                {/* Country Cuisine Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={country.imageUrl}
                    alt={`${country.name} cuisine`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />

                  {/* Country Flag Badge */}
                  <span className="absolute top-2.5 left-2.5 text-2xl drop-shadow-md select-none">
                    {country.flag}
                  </span>

                  {/* Recipe Count on image */}
                  <span className="absolute bottom-2.5 right-2.5 text-[11px] font-semibold text-white/90 bg-stone-900/70 backdrop-blur-xs px-2 py-0.5 rounded-md tabular-nums">
                    {country.recipeCount} {country.recipeCount === 1 ? 'recipe' : 'recipes'}
                  </span>
                </div>

                {/* Country Details */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      {country.region}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-800">
                    <span>View Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Expand Toggle when > 10 */}
        {!searchFilter && countries.length > 10 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-xl transition-colors cursor-pointer shadow-2xs inline-flex items-center gap-2"
            >
              <span>{showAll ? 'Collapse to Top 10 Countries' : `View All ${countries.length} Global Cuisines`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
