import React from 'react';
import { X, Globe, Heart, ChefHat, Sparkles, Award } from 'lucide-react';
import { CUISINE_SPREAD_IMAGE } from '../data/seedData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-stone-100">
          <img
            src={CUISINE_SPREAD_IMAGE}
            alt="International culinary spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
              Our Culinary Mission
            </span>
            <h3 className="font-display text-2xl font-bold">
              Connecting Humanity Through Global Flavor
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-stone-600 text-xs sm:text-sm leading-relaxed">
          <p>
            Welcome to <strong>RRC Recipe – World Recipe Explorer</strong>, an international culinary platform dedicated to documenting, celebrating, and teaching authentic recipes from every continent.
          </p>

          <p>
            Food is the universal language of human culture. From the slow-simmered dum pots of Old Delhi to the roaring wood-fired ovens of Naples, every dish carries centuries of family tradition, terroir, and technique.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl">
              <ChefHat className="w-5 h-5 text-amber-600 mb-1" />
              <h4 className="font-bold text-stone-900 text-xs">Authentic Steps</h4>
              <p className="text-[11px] text-stone-500 mt-0.5">
                True sequential instructions with chef secrets and timers.
              </p>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl">
              <Sparkles className="w-5 h-5 text-amber-600 mb-1" />
              <h4 className="font-bold text-stone-900 text-xs">0% to 100% Tracker</h4>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Never lose your place with interactive step progression.
              </p>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl">
              <Globe className="w-5 h-5 text-amber-600 mb-1" />
              <h4 className="font-bold text-stone-900 text-xs">TheMealDB Live API</h4>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Seamless real-time integration with global recipe archives.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400">
            <p>
              Data Sources: High-resolution culinary photography and open recipe metadata provided via verified open culinary repositories and TheMealDB API under Creative Commons.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
