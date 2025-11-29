import { motion } from 'motion/react';
import { FileText, ExternalLink, Calendar, Award, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PublicationsProps {
  isDarkMode: boolean;
}

export function Publications({ isDarkMode }: PublicationsProps) {
  const publications = [
    {
      title: 'Neuro-Computational Blood Flow Simulation',
      journal: 'Electromagnetic Biology and Medicine',
      date: 'Jan 2025',
      description: 'Developed neural network models for predicting blood flow patterns with nanoparticles in electromagnetic microchannels',
      doi: '10.1080/15368378.2025.2453923',
      impact: 'High Impact',
      citations: 0,
      imageUrl: 'https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYnJhaW58ZW58MXx8fHwxNzY0NDI4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'AI-Led Dairy Industry Innovation',
      journal: 'Chinese Journal of Physics',
      date: 'Nov 2024',
      description: 'Implemented AI models to predict milk flow dynamics with hybrid nanoparticles under electromagnetic fields',
      doi: '10.1016/j.cjph.2024.11.025',
      impact: 'High Impact',
      citations: 0,
      imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ0MTQ3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 lg:px-12 relative z-10">
      {/* Grid line divider */}
      <div className={`absolute top-0 left-0 right-0 h-px ${isDarkMode ? 'bg-white/5' : 'bg-slate-900/5'}`} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <div className="font-mono text-xs text-slate-600 mb-3">
              <span className="text-green-400">/* </span>Research Contributions <span className="text-green-400">*/</span>
            </div>
            <h2 className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Publications
            </h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className={`relative p-6 rounded-2xl transition-all backdrop-blur-xl border overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-slate-900/60 via-slate-800/40 to-slate-900/60 border-slate-700/50 hover:border-cyan-500/50' 
                    : 'bg-white shadow-lg border-slate-200 hover:border-cyan-400 hover:shadow-xl'
                }`}>
                  {/* Animated gradient border effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30 border-2 border-cyan-500/30">
                            <ImageWithFallback 
                              src={pub.imageUrl}
                              alt={pub.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className={`leading-tight mb-2 group-hover:text-cyan-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                              {pub.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 items-center">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                                <Award size={12} className="text-emerald-400" />
                                <span className="text-emerald-400 font-sans text-xs font-semibold">{pub.journal}</span>
                              </div>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
                                <Zap size={12} className="text-purple-400" />
                                <span className="text-purple-400 font-sans text-xs font-semibold">{pub.impact}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className={`text-sm leading-relaxed font-sans mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {pub.description}
                        </p>

                        <div className={`flex flex-wrap items-center gap-4 pt-3 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-900/5'}`}>
                          <div className={`flex items-center gap-1.5 font-sans text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                            <Calendar size={14} />
                            <span>{pub.date}</span>
                          </div>
                          <code className={`text-xs font-sans ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`}>
                            DOI: {pub.doi}
                          </code>
                        </div>
                      </div>

                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group/link ${
                          isDarkMode 
                            ? 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50' 
                            : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-300'
                        }`}
                      >
                        <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-slate-900/40 border border-slate-800' : 'bg-white/60 border border-slate-200'}`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                {publications.length}
              </div>
              <div className={`text-xs font-sans ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                Publications
              </div>
            </div>
            <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-slate-900/40 border border-slate-800' : 'bg-white/60 border border-slate-200'}`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-1">
                2025
              </div>
              <div className={`text-xs font-sans ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                Latest
              </div>
            </div>
            <div className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-slate-900/40 border border-slate-800' : 'bg-white/60 border border-slate-200'}`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                AI/ML
              </div>
              <div className={`text-xs font-sans ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                Focus Area
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
