import { motion } from 'motion/react';
import { Award, BookOpen, Code2, Github } from 'lucide-react';

interface CertificationsProps {
  isDarkMode: boolean;
}

export function Certifications({ isDarkMode }: CertificationsProps) {
  const certifications = [
    {
      category: 'Deep Learning & AI',
      icon: Award,
      courses: ['Advanced NLP and RNNs', 'Deep Learning A-Z', 'AI with LLMs'],
      provider: 'Udemy'
    },
    {
      category: 'Machine Learning',
      icon: BookOpen,
      courses: ['Machine Learning A-Z (Python & R)', 'NLP in Python', 'NLP with Deep Learning'],
      provider: 'Udemy'
    },
    {
      category: 'Development',
      icon: Code2,
      courses: ['Full-Stack Web Development Bootcamp', 'Android 14 & Kotlin Development'],
      provider: 'Udemy'
    },
    {
      category: 'GitHub Learning',
      icon: Github,
      courses: ['Introduction to GitHub', 'GitHub Actions', 'Communicating using Markdown'],
      provider: 'GitHub'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 lg:px-12 relative z-10">
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
              <span className="text-green-400">// </span>Continuous Learning
            </div>
            <h2 className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group p-5 rounded-2xl transition-all backdrop-blur-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 hover:from-indigo-500/10 hover:to-purple-500/10 border ${
                    isDarkMode ? 'border-slate-700/50 hover:border-indigo-400/40 hover:shadow-glow' : 'border-slate-300 hover:border-slate-400'
                  } relative overflow-hidden`}
                >
                  {/* Terminal header bar */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/30">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <Icon size={14} className="text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className={`text-sm font-display font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.category}
                  </h3>
                  
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 mb-3">
                    <span className="text-emerald-400 font-mono text-[10px]">{cert.provider}</span>
                  </div>

                  <div className="space-y-1.5 font-mono text-[10px]">
                    {cert.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className={`flex items-start gap-1.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">{'>'}</span>
                        <span className="line-clamp-2">{course}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
