import { motion } from 'motion/react';
import { Github, Mail, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import { TypingEffect } from './TypingEffect';
import { useState, useEffect } from 'react';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTerminal(true), 800);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto w-full py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-6 font-mono text-sm font-bold"
            >
              <Terminal size={16} className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} />
              <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>~/portfolio</span>
              <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>$</span>
              <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>cat intro.txt</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-hero mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
              style={{ fontWeight: 900, letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              {showTerminal ? (
                <>
                  <span style={{ fontWeight: 900 }}>Hi, I'm <span className="gradient-text glitch-effect">Sayan</span>
                  {'. '}</span>
                  <TypingEffect 
                    text="I build interfaces & intelligent systems." 
                    speed={40}
                    delay={500}
                    style={{ fontWeight: 900 }}
                  />
                </>
              ) : (
                <>Hi, I'm <span className="gradient-text">Sayan</span>.</>
              )}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-6 font-mono"
            >
              <div className={`rounded-lg p-3 border-l-2 border-cyan-400 inline-block ${
                isDarkMode ? 'glass-strong' : 'bg-white/80 backdrop-blur-sm shadow-lg'
              }`}>
                <p className="text-sm text-cyan-600">
                  <span className={isDarkMode ? 'text-slate-500' : 'text-slate-600'}>$</span> role: <span className="text-emerald-600">\"AI/ML Researcher | Full-Stack Developer\"</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mb-8 font-mono text-sm max-w-xl"
            >
              <div className={`rounded-xl p-5 border relative overflow-hidden ${
                isDarkMode 
                  ? 'glass-strong border-indigo-500/30' 
                  : 'bg-white/90 backdrop-blur-sm shadow-xl border-indigo-300/50'
              }`}>
                {/* Code editor style header */}
                <div className={`flex items-center gap-2 mb-3 pb-3 border-b ${
                  isDarkMode ? 'border-slate-700/50' : 'border-slate-200'
                }`}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className={`text-xs ml-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>credentials.json</span>
                </div>
                
                <div className={`space-y-2 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                  <div>
                    <span className={`select-none ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>01 │ </span>
                    <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>const</span> <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>education</span> = 
                    <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}> "M.Tech @ IIIT Delhi"</span>;
                  </div>
                  <div>
                    <span className={`select-none ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>02 │ </span>
                    <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>const</span> <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>skills</span> = [
                    <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"NLP"</span>, 
                    <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}> "Computer Vision"</span>, 
                    <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}> "AI"</span>];
                  </div>
                  <div>
                    <span className={`select-none ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>03 │ </span>
                    <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>const</span> <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>fullstack</span> = [
                    <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>"React"</span>, 
                    <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}> "Node.js"</span>, 
                    <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}> "MongoDB"</span>];
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 mb-8 font-mono"
            >
              <a
                href="#projects"
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-xl font-semibold text-sm transition-all hover:scale-105 hover:-translate-y-1 relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 text-white shadow-glow-cyan hover:shadow-glow-cyan hover:border-cyan-400/60' 
                    : 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg hover:shadow-xl border border-cyan-600'
                }`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent ${
                    isDarkMode ? 'via-white/20' : 'via-white/30'
                  }`}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className={`relative z-10 ${isDarkMode ? 'text-slate-200' : 'text-white'}`}>{'>'}</span>
                <span className="relative z-10">view_projects()</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              
              <a
                href="#contact"
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-xl font-semibold text-sm transition-all hover:scale-105 hover:-translate-y-1 border relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-white/5 hover:bg-white/10 text-white border-slate-700/50 hover:border-emerald-400/50 hover:shadow-glow-green' 
                    : 'bg-white text-slate-900 border-slate-300 hover:border-emerald-500 shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity`} />
                <span className="text-emerald-400 relative z-10">$</span>
                <span className="relative z-10">contact_me()</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://github.com/Necromancer0912"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all hover:scale-110 border ${
                  isDarkMode 
                    ? 'glass hover:bg-white/10 text-slate-400 hover:text-cyan-400 border-slate-700/50 hover:border-cyan-400/50' 
                    : 'bg-white text-slate-600 hover:text-cyan-600 border-slate-300 hover:border-cyan-500 shadow-md hover:shadow-lg'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sayan20012002@gmail.com"
                className={`p-3 rounded-xl transition-all hover:scale-110 border ${
                  isDarkMode 
                    ? 'glass hover:bg-white/10 text-slate-400 hover:text-cyan-400 border-slate-700/50 hover:border-cyan-400/50' 
                    : 'bg-white text-slate-600 hover:text-cyan-600 border-slate-300 hover:border-cyan-500 shadow-md hover:shadow-lg'
                }`}
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/necromancer0912"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all hover:scale-110 border ${
                  isDarkMode 
                    ? 'glass hover:bg-white/10 text-slate-400 hover:text-cyan-400 border-slate-700/50 hover:border-cyan-400/50' 
                    : 'bg-white text-slate-600 hover:text-cyan-600 border-slate-300 hover:border-cyan-500 shadow-md hover:shadow-lg'
                }`}
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center h-[600px]"
          >
            {/* Main terminal window */}
            <motion.div
              className="relative w-full max-w-md"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Terminal */}
              <div className="glass-strong rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-indigo-500/20">
                {/* Terminal header */}
                <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">terminal — zsh</span>
                  <div className="w-16" />
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-3 h-[400px] overflow-hidden relative">
                  <div className="text-slate-400">
                    <span className="text-cyan-400">sayan@portfolio</span>
                    <span className="text-slate-600">:</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-slate-500">$</span>
                    <span className="ml-2">./initialize.sh</span>
                  </div>

                  <div className="text-emerald-400 text-xs">
                    <div>✓ Loading AI models...</div>
                    <div className="ml-4 text-slate-500">└─ PyTorch 2.0</div>
                    <div className="ml-4 text-slate-500">└─ TensorFlow 2.x</div>
                  </div>

                  <div className="text-cyan-400 text-xs">
                    <div>✓ Initializing projects...</div>
                    <div className="ml-4 text-slate-500">└─ Medical Imaging AI</div>
                    <div className="ml-4 text-slate-500">└─ NLP Pipeline</div>
                    <div className="ml-4 text-slate-500">└─ Computer Vision</div>
                  </div>

                  <div className="text-purple-400 text-xs">
                    <div>✓ Skills loaded</div>
                    <div className="ml-4 text-slate-500">└─ Python | React | Node.js</div>
                  </div>

                  <div className="text-slate-400 pt-2">
                    <span className="text-cyan-400">sayan@portfolio</span>
                    <span className="text-slate-600">:</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-slate-500">$</span>
                    <motion.span 
                      className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating code snippets */}
              <motion.div
                className="absolute -top-10 -right-10 glass rounded-lg p-3 text-xs font-mono border border-indigo-500/30"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-purple-400">const</span> <span className="text-blue-400">skills</span> = 
                <span className="text-cyan-400"> "AI/ML"</span>;
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 glass rounded-lg p-3 text-xs font-mono border border-pink-500/30"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-emerald-400">{"{ passion:"}</span> 
                <span className="text-yellow-400"> "coding" </span>
                <span className="text-emerald-400">{"}"}</span>
              </motion.div>
            </motion.div>

            {/* Ambient light effects */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
