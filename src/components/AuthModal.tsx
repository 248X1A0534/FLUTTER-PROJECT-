import React, { useState } from 'react';
import { X, Globe, Shield, User, Key, Mail, CheckCircle2 } from 'lucide-react';
import { recipeService } from '../services/recipeApi';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [forgotSent, setForgotSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (mode === 'forgot') {
      setForgotSent(true);
      return;
    }

    if (mode === 'register') {
      if (!name.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      const user = recipeService.registerUser(name.trim(), email.trim());
      onSuccess(user);
      onClose();
    } else {
      // login
      const user = recipeService.loginUser(email.trim());
      onSuccess(user);
      onClose();
    }
  };

  const handleQuickDemoUser = () => {
    const user = recipeService.loginUser('member@recipe.com');
    onSuccess(user);
    onClose();
  };

  const handleQuickAdmin = () => {
    const admin = recipeService.loginUser('248x1a0534@khitguntur.ac.in');
    onSuccess(admin);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center text-white mx-auto mb-3 shadow-sm">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-stone-900">
            {mode === 'forgot'
              ? 'Reset Password'
              : mode === 'login'
              ? 'Welcome to RRC Recipe'
              : 'Create Explorer Account'}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {mode === 'forgot'
              ? 'Enter your email to receive recovery instructions.'
              : 'Save favorites, track your cooking progress, and join our global culinary community.'}
          </p>
        </div>

        {/* Quick Demo Logins for instant evaluation */}
        <div className="mb-6 p-3 bg-amber-50/80 border border-amber-200/80 rounded-2xl">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 text-center mb-2">
            Instant Profile Access
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleQuickAdmin}
              className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Ch. Ravi Kiran Reddy</span>
            </button>
            <button
              type="button"
              onClick={handleQuickDemoUser}
              className="px-3 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <User className="w-3.5 h-3.5 text-amber-600" />
              <span>Explorer Member</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        {mode !== 'forgot' && (
          <div className="flex bg-stone-100 p-1 rounded-xl mb-5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-lg transition-colors cursor-pointer ${
                mode === 'login' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-lg transition-colors cursor-pointer ${
                mode === 'register' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500'
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {errorMsg && (
          <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
            {errorMsg}
          </div>
        )}

        {forgotSent ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bold text-stone-900 text-sm">Check your inbox</h4>
            <p className="text-xs text-stone-500 mt-1">
              We have dispatched a password reset link to <strong>{email}</strong>.
            </p>
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setForgotSent(false);
              }}
              className="mt-5 text-xs font-semibold text-amber-700 hover:underline cursor-pointer"
            >
              Return to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            {mode === 'register' && (
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Chef Gordon"
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                  required
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-semibold text-stone-700">Password</label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-amber-700 hover:underline text-[11px] cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Key className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:border-amber-600"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors cursor-pointer shadow-sm mt-2"
            >
              {mode === 'forgot'
                ? 'Send Recovery Link'
                : mode === 'login'
                ? 'Sign In to RRC Recipe'
                : 'Create My Account'}
            </button>

            {mode === 'forgot' && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  Cancel and sign in
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
