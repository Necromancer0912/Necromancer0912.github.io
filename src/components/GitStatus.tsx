import { motion } from 'motion/react';
import { GitBranch, Circle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GitStatusProps {
  isDarkMode?: boolean;
}

export function GitStatus({ isDarkMode = true }: GitStatusProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
      className="fixed top-20 left-8 z-30 hidden xl:block"
    >
      <div className={`backdrop-blur-xl rounded-lg px-3 py-2 border shadow-xl ${
        isDarkMode 
          ? 'bg-slate-900/80 border-slate-700/50' 
          : 'bg-white/90 border-slate-300'
      }`}>
        <div className="flex items-center gap-3">
          {/* Branch indicator */}
          <div className="flex items-center gap-1.5">
            <GitBranch size={14} className="text-purple-400" />
            <span className="font-mono text-xs text-purple-400">main</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5">
            <Circle size={8} className="text-emerald-400 fill-emerald-400 animate-pulse" />
            <span className={`font-mono text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              live
            </span>
          </div>

          {/* Last commit */}
          <div className={`h-4 w-px ${isDarkMode ? 'bg-slate-700' : 'bg-slate-300'}`} />
          <span className={`font-mono text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            v2025.01
          </span>
        </div>
      </div>
    </motion.div>
  );
}
