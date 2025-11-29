import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Wifi, Activity, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from '../assets/image.png';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState(42);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCpuUsage(Math.floor(Math.random() * 30) + 30);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Work', path: '~/projects' },
    { id: 'about', label: 'About', path: '~/about' },
    { id: 'contact', label: 'Contact', path: '~/contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDarkMode
        ? 'bg-slate-950/60 border-white/5'
        : 'bg-white/80 border-slate-200 shadow-sm'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glassmorphism overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode
        ? 'from-cyan-500/5 via-transparent to-indigo-500/5'
        : 'from-cyan-500/3 via-transparent to-indigo-500/3'
        }`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo & Path */}
          <div className="flex items-center gap-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-glow-cyan relative group cursor-pointer border-2 border-cyan-400/50 hover:border-cyan-400 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={profileImage}
                  alt="SD"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* File path breadcrumb */}
            <motion.div
              className={`hidden lg:flex items-center gap-1 font-mono text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'
                }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-cyan-400">~</span>
              <span>/</span>
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-700'}>portfolio</span>
              <span className="text-emerald-400 ml-2">●</span>
              <span className={isDarkMode ? 'text-slate-500' : 'text-slate-600'}>main</span>
            </motion.div>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-1 font-mono">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 transition-all text-xs rounded-lg backdrop-blur-sm relative group ${isDarkMode
                  ? 'text-slate-400 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-cyan-400 opacity-60 mr-1">{'['}</span>
                {item.label}
                <span className="text-cyan-400 opacity-60 ml-1">{']'}</span>
                <div className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform`} />
              </motion.button>
            ))}
          </div>

          {/* Right Section - Status Indicators & Theme */}
          <div className="hidden md:flex items-center gap-3">
            {/* System Status Indicators */}
            <motion.div
              className={`flex items-center gap-3 px-3 py-1.5 rounded-lg ${isDarkMode
                ? 'bg-slate-800/50 border border-slate-700/50'
                : 'bg-slate-100 border border-slate-300'
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Network Status */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <Wifi size={12} className="text-emerald-400" />
                <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                  {cpuUsage}ms
                </span>
              </div>

              {/* CPU Usage */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <Cpu size={12} className="text-cyan-400" />
                <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                  {cpuUsage}%
                </span>
              </div>

              {/* Activity */}
              <div className="flex items-center gap-1.5">
                <Activity size={12} className="text-purple-400" />
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-2 bg-purple-400 opacity-30"></div>
                  <div className="w-0.5 h-3 bg-purple-400 opacity-50"></div>
                  <div className="w-0.5 h-2 bg-purple-400 opacity-70"></div>
                  <div className="w-0.5 h-4 bg-purple-400"></div>
                </div>
              </div>
            </motion.div>

            {/* Time */}
            <motion.div
              className={`px-3 py-1.5 rounded-lg font-mono text-xs ${isDarkMode
                ? 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
                : 'bg-slate-100 text-slate-600 border border-slate-300'
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-lg border transition-all ${isDarkMode
                ? 'glass-strong border-white/10 hover:border-cyan-400/30 text-white hover:shadow-glow-cyan'
                : 'bg-slate-100 border-slate-300 hover:border-cyan-500 text-slate-900 shadow-sm hover:shadow-md'
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-lg border transition-all ${isDarkMode
                ? 'glass-strong border-white/10 hover:border-cyan-400/30 text-white'
                : 'bg-slate-100 border-slate-300 hover:border-cyan-500 text-slate-900 shadow-sm'
                }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className={isDarkMode ? 'text-white p-2' : 'text-slate-900 p-2'}
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
          className={`md:hidden backdrop-blur-xl border-t ${isDarkMode
            ? 'bg-slate-950/60 border-white/5'
            : 'bg-white/90 border-slate-200'
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
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-mono text-sm border ${isDarkMode
                  ? 'text-slate-300 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-transparent hover:border-slate-200'
                  }`}
              >
                <span className="text-cyan-400 opacity-60 mr-1">{'['}</span>
                {item.label}
                <span className="text-cyan-400 opacity-60 ml-1">{']'}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
