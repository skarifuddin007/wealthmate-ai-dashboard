
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Goals", path: "/goals" },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-card mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 dark:border-white/5">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8"
              >
                <path 
                  stroke="url(#grad)" 
                  d="M12 2v6m0 0C9.791 8 8 9.791 8 12s1.791 4 4 4m0-8c2.209 0 4 1.791 4 4s-1.791 4-4 4m-4 4h8" 
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-wealth-primary to-wealth-secondary">
                WealthMate AI
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-wealth-primary dark:text-wealth-primary"
                    : "text-foreground/80 hover:text-wealth-primary dark:text-foreground/60 dark:hover:text-wealth-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link 
              to="/login" 
              className="hidden md:block px-4 py-2 text-sm font-medium text-wealth-primary hover:bg-wealth-primary/10 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            
            <Link 
              to="/login?signup=true" 
              className="hidden md:block wealth-button text-sm"
            >
              Get Started
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground/80 hover:bg-foreground/10"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card mx-4 mt-2 rounded-lg py-4 px-2">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  isActive(link.path)
                    ? "bg-wealth-primary/10 text-wealth-primary"
                    : "hover:bg-foreground/5 text-foreground/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-foreground/10 pt-2 mt-2">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium block rounded-md hover:bg-foreground/5 text-foreground/80"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/login?signup=true"
                className="px-4 py-2 mt-2 text-sm font-medium block rounded-md bg-gradient-to-r from-wealth-primary to-wealth-secondary text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
