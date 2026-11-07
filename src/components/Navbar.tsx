import React, { useState } from 'react';
import { Globe, Heart, User, Shield, LogOut, Compass, Grid, Menu, X, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onRandomRecipe: () => void;
  favoriteCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuth,
  onLogout,
  onRandomRecipe,
  favoriteCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore Recipes' },
    { id: 'countries', label: 'Countries' },
    { id: 'categories', label: 'Categories' },
    { id: 'about', label: 'About Us' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-stone-900 leading-none block">
                RRC Recipe
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-amber-700 block">
                World Recipe Explorer
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean single-line links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative cursor-pointer ${
                  activeTab === link.id
                    ? 'text-amber-700 font-semibold'
                    : 'hover:text-stone-950'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions & User Account */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Random Recipe action */}
            <button
              onClick={onRandomRecipe}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              title="Surprise me with a random recipe"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Random Dish</span>
            </button>

            {/* Favorites shortcut */}
            {currentUser && (
              <button
                onClick={() => setActiveTab('profile')}
                className="relative p-2 text-stone-600 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                title="View Favorites"
              >
                <Heart className="w-5 h-5" />
                {favoriteCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {favoriteCount}
                  </span>
                )}
              </button>
            )}

            {/* Admin Switch shortcut if admin */}
            {currentUser?.role === 'admin' && (
              <button
                onClick={() => setActiveTab('admin')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'admin'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Admin Portal</span>
              </button>
            )}

            {/* User Profile / Login */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1 pl-2 border border-stone-200 rounded-full hover:border-stone-300 transition-colors cursor-pointer"
                >
                  <span className="text-xs font-medium text-stone-700 max-w-[90px] truncate hidden sm:inline">
                    {currentUser.name}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    {currentUser.name ? currentUser.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() : 'RK'}
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-stone-200 rounded-xl shadow-lg py-1.5 z-50">
                    <div className="px-4 py-2 border-b border-stone-100">
                      <p className="text-xs font-semibold text-stone-900">{currentUser.name}</p>
                      <p className="text-[11px] text-stone-500 truncate">{currentUser.email}</p>
                      <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider text-amber-700">
                        {currentUser.role === 'admin' ? 'Administrator' : 'Explorer Member'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-stone-700 hover:bg-stone-50 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-4 h-4 text-stone-400" />
                      <span>My Profile & Saved</span>
                    </button>

                    {currentUser.role === 'admin' && (
                      <button
                        onClick={() => {
                          setActiveTab('admin');
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-stone-700 hover:bg-stone-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Shield className="w-4 h-4 text-amber-500" />
                        <span>Admin Dashboard</span>
                      </button>
                    )}

                    <div className="border-t border-stone-100 my-1"></div>

                    <button
                      onClick={() => {
                        onLogout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
              >
                Sign In
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                activeTab === link.id
                  ? 'bg-amber-50 text-amber-700 font-semibold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-100 flex gap-2">
            <button
              onClick={() => {
                onRandomRecipe();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-lg text-center"
            >
              Random Dish
            </button>
            {!currentUser && (
              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 text-xs font-semibold text-white bg-amber-600 rounded-lg text-center"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
