import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Command } from 'lucide-react';

interface KeyboardShortcutsProps {
  isDarkMode: boolean;
}

export function KeyboardShortcuts({ isDarkMode }: KeyboardShortcutsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle visibility with ?
      if (e.key === '?' && !e.shiftKey) {
        e.preventDefault();
        setIsVisible((prev) => !prev);
      }

      // Hide with Escape
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const shortcuts = [
    { key: '?', description: 'Toggle shortcuts', category: 'General' },
    { key: 'Ctrl + K', description: 'Command palette', category: 'General' },
    { key: 'Ctrl + `', description: 'Interactive terminal', category: 'General' },
    { key: 'ESC', description: 'Close panels', category: 'General' },
    { key: 'Shift + F', description: 'FPS counter', category: 'Developer' },
    { key: 'Shift + M', description: 'System monitor', category: 'Developer' },
    { key: 'Shift + D', description: 'Toggle dark mode', category: 'Developer' },
    { key: '↑ / ↓', description: 'Navigate history (Terminal)', category: 'Terminal' },
    { key: 'Tab', description: 'Auto-complete (Coming soon)', category: 'Terminal' },
    { key: 'help', description: 'Show all commands', category: 'Terminal' },
    { key: 'neofetch', description: 'System info', category: 'Terminal' },
    { key: 'banner', description: 'ASCII art banner', category: 'Terminal' },
    { key: 'debug', description: 'ASCII art easter egg', category: 'Easter Eggs' },
    { key: 'konami', description: 'Secret code (↑↑↓↓←→←→BA)', category: 'Easter Eggs' },
  ];

  return (
    <>
      {/* Trigger button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed bottom-8 left-8 z-40 backdrop-blur-xl rounded-lg px-3 py-2 border shadow-2xl hover:border-cyan-400/50 transition-all group ${
          isDarkMode 
            ? 'bg-slate-900/80 border-slate-700/50' 
            : 'bg-white/90 border-slate-300'
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-sm">?</span>
          <span className={`font-mono text-xs group-hover:text-cyan-400 transition-colors ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            shortcuts
          </span>
        </div>
      </motion.button>

      {/* Shortcuts panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-24 left-8 z-40 backdrop-blur-xl rounded-xl p-4 border shadow-2xl max-w-sm ${
              isDarkMode 
                ? 'bg-slate-900/95 border-slate-700/50' 
                : 'bg-white/95 border-slate-300'
            }`}
          >
            <div className={`flex items-center justify-between mb-3 pb-3 border-b ${
              isDarkMode ? 'border-slate-700/50' : 'border-slate-200'
            }`}>
              <h3 className={`font-display font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Keyboard Shortcuts
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className={`transition-colors ${
                  isDarkMode 
                    ? 'text-slate-500 hover:text-white' 
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                <span className="font-mono text-xs">ESC</span>
              </button>
            </div>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {['General', 'Terminal', 'Developer', 'Easter Eggs'].map((category) => {
                const categoryShortcuts = shortcuts.filter(s => s.category === category);
                if (categoryShortcuts.length === 0) return null;
                
                return (
                  <div key={category}>
                    <div className="text-xs font-mono text-purple-400 mb-2">
                      <span className={isDarkMode ? 'text-slate-600' : 'text-slate-400'}>// </span>
                      {category}
                    </div>
                    <div className="space-y-1.5">
                      {categoryShortcuts.map((shortcut, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-1"
                        >
                          <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {shortcut.description}
                          </span>
                          <kbd className={`font-mono text-xs px-2 py-0.5 rounded text-cyan-400 border ${
                            isDarkMode 
                              ? 'bg-slate-800/50 border-slate-700/50' 
                              : 'bg-slate-100 border-slate-300'
                          }`}>
                            {shortcut.key}
                          </kbd>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`mt-3 pt-3 border-t text-xs font-mono ${
              isDarkMode 
                ? 'border-slate-700/50 text-slate-500' 
                : 'border-slate-200 text-slate-600'
            }`}>
              <span className="text-green-400">// </span>
              Pro tip: Use keyboard navigation for speed!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
