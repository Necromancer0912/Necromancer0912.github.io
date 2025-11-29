import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, HardDrive, Activity } from 'lucide-react';

export function SystemMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);

  useEffect(() => {
    // Mock CPU and Memory usage
    const interval = setInterval(() => {
      setCpuUsage(Math.random() * 30 + 15); // 15-45%
      setMemoryUsage(Math.random() * 20 + 40); // 40-60%
    }, 2000);

    // Listen for toggle key (Shift + M)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'M') {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="fixed bottom-8 right-8 z-50 backdrop-blur-xl bg-slate-900/90 rounded-xl p-4 border border-slate-700/50 shadow-2xl min-w-[280px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-cyan-400" />
            <span className="font-mono text-sm text-white">System Monitor</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-500 hover:text-slate-300 text-xs"
          >
            ✕
          </button>
        </div>

        {/* CPU Usage */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-purple-400" />
              <span className="font-mono text-xs text-slate-400">CPU</span>
            </div>
            <span className="font-mono text-xs text-white">
              {cpuUsage.toFixed(1)}%
            </span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${cpuUsage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Memory Usage */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <HardDrive size={14} className="text-cyan-400" />
              <span className="font-mono text-xs text-slate-400">Memory</span>
            </div>
            <span className="font-mono text-xs text-white">
              {memoryUsage.toFixed(1)}%
            </span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${memoryUsage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* System Info */}
        <div className="pt-3 border-t border-slate-700/50 space-y-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-500">Uptime</span>
            <span className="text-emerald-400">
              {Math.floor(performance.now() / 1000)}s
            </span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-500">Performance</span>
            <span className="text-emerald-400">Optimized</span>
          </div>
        </div>

        {/* Hint */}
        <div className="mt-3 pt-3 border-t border-slate-700/50">
          <p className="text-[10px] text-slate-600 font-mono text-center">
            Press <span className="text-cyan-400">Shift+M</span> to toggle
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
