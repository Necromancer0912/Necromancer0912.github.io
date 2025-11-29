import { useState, useEffect } from 'react';

export function FPSCounter() {
  const [fps, setFps] = useState(60);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const calculateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(calculateFPS);
    };

    // Start FPS calculation
    animationFrameId = requestAnimationFrame(calculateFPS);

    // Listen for toggle key (Shift + F)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'F') {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-8 z-50 backdrop-blur-xl bg-slate-900/80 rounded-lg px-3 py-2 border border-slate-700/50 shadow-2xl">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${fps >= 55 ? 'bg-emerald-400' : fps >= 30 ? 'bg-yellow-400' : 'bg-red-400'}`} />
        <span className="font-mono text-xs text-slate-400">
          {fps} <span className="text-slate-600">FPS</span>
        </span>
      </div>
    </div>
  );
}
