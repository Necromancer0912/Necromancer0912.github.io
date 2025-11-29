import { motion } from 'motion/react';
import { Wifi } from 'lucide-react';

interface NetworkIndicatorProps {
  isDarkMode?: boolean;
}

export function NetworkIndicator({ isDarkMode = true }: NetworkIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-24 left-8 z-30 hidden xl:block"
    >
      <div className={`backdrop-blur-xl rounded-lg px-3 py-2 border shadow-xl ${
        isDarkMode 
          ? 'bg-slate-900/80 border-slate-700/50' 
          : 'bg-white/90 border-slate-300'
      }`}>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Wifi size={12} className="text-emerald-400" />
          </motion.div>
          <span className={`font-mono text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="text-emerald-400">●</span> Connected
          </span>
        </div>
      </div>
    </motion.div>
  );
}
