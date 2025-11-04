import { useState } from 'react';
import { Rocket, Trophy, Users, ClipboardList, LogIn, UserPlus, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ icon: Icon, label }) => (
    <a
      href="#"
      className="flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-red-400 transition-colors"
    >
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
      <span>{label}</span>
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_20px_rgba(255,0,0,0.6)]" />
          <span className="text-white font-semibold tracking-wide text-lg">HackVerse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink icon={Rocket} label="Hackathons" />
          <NavLink icon={Users} label="Teams" />
          <NavLink icon={ClipboardList} label="Submissions" />
          <NavLink icon={Trophy} label="Leaderboard" />
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm text-white/90 hover:text-white border border-white/10 hover:border-red-500/60 transition-colors">
            <LogIn className="h-4 w-4" />
            Login
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-colors">
            <UserPlus className="h-4 w-4" />
            Sign up
          </button>
        </div>
        <button className="md:hidden text-gray-300" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 border-t border-white/10">
          <div className="grid gap-3 pt-4">
            <NavLink icon={Rocket} label="Hackathons" />
            <NavLink icon={Users} label="Teams" />
            <NavLink icon={ClipboardList} label="Submissions" />
            <NavLink icon={Trophy} label="Leaderboard" />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm text-white/90 hover:text-white border border-white/10 hover:border-red-500/60 transition-colors">
              <LogIn className="h-4 w-4" />
              Login
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-colors">
              <UserPlus className="h-4 w-4" />
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
