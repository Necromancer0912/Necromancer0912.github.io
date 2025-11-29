import { motion } from 'motion/react';

export function GradientBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Indigo blob - top left */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Cyan blob - top right */}
      <motion.div
        className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pink blob - middle */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Indigo blob - bottom right */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
