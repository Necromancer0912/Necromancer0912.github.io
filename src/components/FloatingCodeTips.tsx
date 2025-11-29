import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Zap } from 'lucide-react';

interface FloatingCodeTipsProps {
  isDarkMode?: boolean;
}

export function FloatingCodeTips({ isDarkMode = true }: FloatingCodeTipsProps) {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const codeTips = [
    { icon: Code2, text: 'console.log("Hello, World!");', color: 'text-cyan-400' },
    { icon: Terminal, text: 'npm run dev', color: 'text-emerald-400' },
    { icon: Zap, text: 'const isAwesome = true;', color: 'text-yellow-400' },
    { icon: Code2, text: 'git commit -m "feat: amazing"', color: 'text-purple-400' },
    { icon: Terminal, text: '// TODO: Be awesome', color: 'text-pink-400' },
  ];

  useEffect(() => {
    // Show tip every 10 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
      setCurrentTip((prev) => (prev + 1) % codeTips.length);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const Icon = codeTips[currentTip].icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className="fixed bottom-24 right-8 z-40 pointer-events-none"
        >
          <div className={`backdrop-blur-xl rounded-xl px-4 py-3 border shadow-2xl max-w-xs ${
            isDarkMode 
              ? 'bg-slate-900/90 border-slate-700/50' 
              : 'bg-white/95 border-slate-300'
          }`}>
            <div className="flex items-center gap-3">
              <Icon size={18} className={codeTips[currentTip].color} />
              <span className={`font-mono text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {codeTips[currentTip].text}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
