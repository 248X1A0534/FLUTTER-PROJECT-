import React from 'react';
import { Utensils, ArrowRight } from 'lucide-react';
import { CategoryInfo } from '../types';

interface CategoriesPageProps {
  categories: CategoryInfo[];
  onSelectCategory: (categoryName: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  categories,
  onSelectCategory
}) => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>Culinary Taxonomies</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Explore By Meal Category
          </h1>
          <p className="mt-2 text-stone-600 text-sm">
            Whether you are preparing a quick weekday lunch, an elaborate weekend feast, or traditional street food treats, find the perfect dish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className="group bg-white border border-stone-200 rounded-3xl overflow-hidden hover:border-amber-500/70 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col text-left"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-semibold rounded-lg tabular-nums">
                  {category.recipeCount} {category.recipeCount === 1 ? 'recipe' : 'recipes'}
                </div>

                <div className="absolute bottom-3.5 left-4">
                  <h3 className="font-display font-bold text-2xl text-white">
                    {category.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:text-amber-800">
                  <span>Browse {category.name} Recipes</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
