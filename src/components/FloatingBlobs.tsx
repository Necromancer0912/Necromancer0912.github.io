import { motion } from 'motion/react';

interface FloatingBlobsProps {
  isDarkMode: boolean;
}

export function FloatingBlobs({ isDarkMode }: FloatingBlobsProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className={`absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20' 
            : 'bg-gradient-to-br from-indigo-300/30 to-purple-300/30'
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' 
            : 'bg-gradient-to-br from-cyan-300/30 to-blue-300/30'
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-pink-500/20 to-rose-500/20' 
            : 'bg-gradient-to-br from-pink-300/30 to-rose-300/30'
        }`}
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
