import { motion } from 'motion/react';

interface LineNumbersProps {
  start?: number;
  count?: number;
  isDarkMode?: boolean;
  className?: string;
}

export function LineNumbers({ start = 1, count = 20, isDarkMode = true, className = '' }: LineNumbersProps) {
  return (
    <div className={`absolute left-0 top-0 bottom-0 w-12 pointer-events-none select-none ${className}`}>
      <div className={`sticky top-20 space-y-0 font-mono text-xs leading-6 ${
        isDarkMode ? 'text-slate-700/50' : 'text-slate-300'
      }`}>
        {Array.from({ length: count }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="text-right pr-2 py-0.5"
          >
            {start + i}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
