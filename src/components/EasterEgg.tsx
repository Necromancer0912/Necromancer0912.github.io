import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);

  const asciiArt = `
   _____ _____ _____  
  / ____|  __ \\_   _| 
 | (___ | |  | || |   
  \\___ \\| |  | || |   
  ____) | |__| || |_  
 |_____/|_____/_____|
  
  Developer Portfolio
  Built with ❤️ & Code
  `;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key].slice(-5);
      setSequence(newSequence);

      // Check for konami-style code: "debug"
      if (newSequence.join('').toLowerCase().includes('debug')) {
        setIsVisible(true);
        setSequence([]);

        // Auto-hide after 5 seconds
        setTimeout(() => setIsVisible(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sequence]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="backdrop-blur-xl bg-slate-900/90 rounded-2xl p-8 border border-cyan-400/50 shadow-2xl max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono ml-2">secret.sh</span>
            </div>

            <pre className="font-mono text-cyan-400 text-xs md:text-sm leading-relaxed whitespace-pre">
              {asciiArt}
            </pre>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm font-mono mb-3">
                <span className="text-green-400">// </span>You found the Easter egg! 🎉
              </p>
              <div className="space-y-1 text-xs font-mono text-slate-500">
                <div>
                  <span className="text-purple-400">const</span> message = <span className="text-emerald-400">"Thanks for exploring!"</span>;
                </div>
                <div>
                  <span className="text-cyan-400">console</span>.<span className="text-yellow-400">log</span>(message);
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-4 text-center">
                Click anywhere or press ESC to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
