import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeSection: string;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Navigation({ activeSection, isDarkMode, setIsDarkMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
      isDarkMode ? 'glass' : 'glass-light'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className={`font-display text-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">SD</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 font-sans transition-colors group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={`relative z-10 ${
                  isDarkMode 
                    ? activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
                    : activeSection === item.id ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-pink-500"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`ml-4 p-2 rounded-full transition-all ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-slate-900/10 hover:bg-slate-900/20 text-slate-900'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-slate-900/10 hover:bg-slate-900/20 text-slate-900'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={isDarkMode ? 'text-white' : 'text-slate-900'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className={`md:hidden border-t ${
            isDarkMode 
              ? 'glass border-white/5' 
              : 'glass-light border-slate-900/5'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all font-sans ${
                  isDarkMode
                    ? activeSection === item.id 
                      ? 'bg-white/10 text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    : activeSection === item.id 
                      ? 'bg-slate-900/10 text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
