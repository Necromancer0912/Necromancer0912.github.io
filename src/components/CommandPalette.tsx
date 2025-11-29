import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Terminal, Home, Folder, Mail, BookOpen, Award, Code } from 'lucide-react';

interface Command {
  id: string;
  title: string;
  icon: React.ElementType;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    { id: 'home', title: 'Navigate to Home', icon: Home, action: () => scrollTo('hero'), category: 'Navigation' },
    { id: 'projects', title: 'View Projects', icon: Folder, action: () => scrollTo('projects'), category: 'Navigation' },
    { id: 'about', title: 'About Me', icon: Terminal, action: () => scrollTo('about'), category: 'Navigation' },
    { id: 'publications', title: 'Research Papers', icon: Award, action: () => scrollTo('publications'), category: 'Navigation' },
    { id: 'certifications', title: 'Certifications', icon: BookOpen, action: () => scrollTo('certifications'), category: 'Navigation' },
    { id: 'contact', title: 'Contact Me', icon: Mail, action: () => scrollTo('contact'), category: 'Navigation' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setSearch('');
    }
  };

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        setSearch('');
        setSelectedIndex(0);
      }

      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
      }

      if (isOpen) {
        // Arrow navigation
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        }

        // Enter to execute
        if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          e.preventDefault();
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[150]"
            onClick={() => setIsOpen(false)}
          />

          {/* Command Palette */}
          <div className="fixed inset-0 z-[151] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-2xl backdrop-blur-xl bg-slate-900/95 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-slate-900/60 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-slate-500 font-mono">command-palette.sh</span>
                <div className="w-16" />
              </div>

              {/* Search Input */}
              <div className="p-4 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <Search size={20} className="text-slate-500" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setSelectedIndex(0);
                    }}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 font-mono text-sm"
                  />
                  <kbd className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono border border-slate-700">
                    ESC
                  </kbd>
                </div>
              </div>

              {/* Commands List */}
              <div className="max-h-[400px] overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 font-mono text-sm">
                    <span className="text-yellow-400">!</span> No commands found
                  </div>
                ) : (
                  <div className="p-2">
                    {filteredCommands.map((cmd, index) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={() => cmd.action()}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                            selectedIndex === index
                              ? 'bg-cyan-500/10 border border-cyan-400/30'
                              : 'hover:bg-slate-800/50 border border-transparent'
                          }`}
                        >
                          <Icon 
                            size={18} 
                            className={selectedIndex === index ? 'text-cyan-400' : 'text-slate-500'} 
                          />
                          <div className="flex-1 text-left">
                            <div className={`font-mono text-sm ${selectedIndex === index ? 'text-white' : 'text-slate-300'}`}>
                              {cmd.title}
                            </div>
                            <div className="font-mono text-xs text-slate-500">
                              {cmd.category}
                            </div>
                          </div>
                          {selectedIndex === index && (
                            <kbd className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono border border-slate-700">
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700">↵</kbd>
                    Select
                  </span>
                </div>
                <span className="text-cyan-400">Ctrl+K</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
