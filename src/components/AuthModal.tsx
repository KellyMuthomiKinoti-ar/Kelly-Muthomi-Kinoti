import React, { useState } from 'react';
import { X, Lock, User as UserIcon, Mail, ShieldCheck, Sparkles, LogIn, UserPlus, CheckCircle2 } from 'lucide-react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'admin' | 'user'>('user');
  const [adminCode, setAdminCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup' && !name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    let finalRole: 'admin' | 'user' = 'user';
    if (role === 'admin') {
      if (adminCode !== 'teacherkelly' && adminCode !== '12345') {
        setError('Invalid Educator / Admin Secret Code. Default passcode for demo: teacherkelly');
        return;
      }
      finalRole = 'admin';
    }

    const initials = (name || email.split('@')[0])
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newUser: User = {
      id: 'usr-' + Date.now(),
      name: name.trim() || email.split('@')[0],
      email: email.trim(),
      role: finalRole,
      avatarInitials: initials || 'KM'
    };

    setSuccess(`Successfully ${mode === 'login' ? 'logged in' : 'registered'} as ${newUser.role === 'admin' ? 'Educator / Admin' : 'Community Member'}!`);
    
    setTimeout(() => {
      onLoginSuccess(newUser);
      onClose();
      setSuccess('');
    }, 1000);
  };

  const handleQuickDemoAdmin = () => {
    const adminUser: User = {
      id: 'admin-kelly',
      name: 'Kelly Muthomi Kinoti (Admin)',
      email: 'kellymuthomi22@gmail.com',
      role: 'admin',
      avatarInitials: 'KM'
    };
    onLoginSuccess(adminUser);
    onClose();
  };

  const handleQuickDemoGuest = () => {
    const guestUser: User = {
      id: 'guest-' + Date.now(),
      name: 'Visiting Educator / Client',
      email: 'visitor@example.com',
      role: 'user',
      avatarInitials: 'VE'
    };
    onLoginSuccess(guestUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">
                {mode === 'login' ? 'Welcome Back' : 'Create Reader Account'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {mode === 'login' ? 'Sign in to write blogs & post ratings' : 'Register to comment & rate articles'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Demo Shortcuts */}
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2 font-mono text-xs">
          <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">⚡ Quick 1-Click Demo Login:</span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleQuickDemoAdmin}
              className="px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-[11px] text-left flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Login as Teacher Kelly (Admin Writer)</span>
            </button>

            <button
              onClick={handleQuickDemoGuest}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-[11px] text-left flex items-center gap-1.5"
            >
              <UserIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Login as Reader / Client</span>
            </button>
          </div>
        </div>

        {/* Feedback messages */}
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-mono">
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{success}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400 block">Full Name:</label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Dr. Samuel Nderitu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400 block">Email Address:</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Role selector */}
          <div className="space-y-1 font-mono text-xs">
            <label className="text-slate-400 block">Account Role:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('user')}
                className={`py-2 rounded-xl border text-center transition-all ${
                  role === 'user' ? 'bg-amber-500 text-slate-950 font-bold border-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Reader / Client
              </button>

              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`py-2 rounded-xl border text-center transition-all ${
                  role === 'admin' ? 'bg-amber-500 text-slate-950 font-bold border-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Teacher Kelly (Admin Writer)
              </button>
            </div>
          </div>

          {role === 'admin' && (
            <div className="space-y-1 font-mono text-xs animate-fadeIn">
              <label className="text-amber-400 font-bold block">Admin Passcode:</label>
              <input
                type="password"
                placeholder="Passcode: teacherkelly"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-amber-500/40 rounded-xl text-xs font-mono text-white focus:outline-none"
              />
              <span className="text-[10px] text-slate-500 block">Demo secret code: teacherkelly</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 mt-4"
          >
            {mode === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
            <span>{mode === 'login' ? 'Sign In to Account' : 'Complete Registration'}</span>
          </button>

        </form>

        {/* Toggle mode */}
        <div className="text-center font-mono text-xs text-slate-400 border-t border-slate-800 pt-4">
          {mode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <button
                onClick={() => { setMode('signup'); setError(''); }}
                className="text-amber-400 font-bold hover:underline"
              >
                Sign Up Now
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button
                onClick={() => { setMode('login'); setError(''); }}
                className="text-amber-400 font-bold hover:underline"
              >
                Sign In
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
