import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950"
        >
          <div className="w-full max-w-md px-8">
            <div className="mb-4">
              <div className="font-mono text-sm text-slate-400 mb-2">
                <span className="text-cyan-400">$</span> npm run dev
              </div>
              <div className="font-mono text-xs text-slate-600 space-y-1">
                <div><span className="text-emerald-400">✓</span> Compiling components...</div>
                <div><span className="text-cyan-400">→</span> Loading portfolio...</div>
              </div>
            </div>

            {/* Loading bar */}
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Progress percentage */}
            <div className="mt-2 text-right font-mono text-xs text-slate-500">
              {Math.floor(Math.min(progress, 100))}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
