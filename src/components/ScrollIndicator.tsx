import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'intro.tsx', color: 'bg-cyan-400' },
    { id: 'projects', label: 'projects.tsx', color: 'bg-indigo-400' },
    { id: 'about', label: 'about.tsx', color: 'bg-purple-400' },
    { id: 'education', label: 'education.tsx', color: 'bg-emerald-400' },
    { id: 'skills', label: 'skills.tsx', color: 'bg-pink-400' },
    { id: 'contact', label: 'contact.tsx', color: 'bg-orange-400' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id) || document.querySelector('section'),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="backdrop-blur-xl bg-slate-900/80 rounded-full p-2 border border-slate-700/50 shadow-2xl">
        <div className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <motion.button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id) || document.querySelector('section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? section.color + ' w-3 h-3' : 'bg-slate-600'
                  }`}
                />
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 whitespace-nowrap bg-slate-900/95 backdrop-blur-xl px-3 py-1.5 rounded-lg border border-slate-700/50 pointer-events-none"
                >
                  <span className="font-mono text-xs text-slate-300">{section.label}</span>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="mt-4 backdrop-blur-xl bg-slate-900/80 rounded-full p-2 border border-slate-700/50">
        <div className="relative w-1 h-24 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-400 to-indigo-400"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
