import { motion } from 'motion/react';
import { Code2, Database, Globe, Wrench } from 'lucide-react';

interface TechStackProps {
  isDarkMode: boolean;
}

export function TechStack({ isDarkMode }: TechStackProps) {
  const techCategories = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'from-emerald-400 to-green-500',
      borderColor: 'border-emerald-400/30',
      hoverColor: 'hover:border-emerald-400/60',
      items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'Kotlin', 'SQL', 'LaTeX']
    },
    {
      category: 'AI/ML Frameworks',
      icon: Code2,
      color: 'from-indigo-400 to-purple-500',
      borderColor: 'border-indigo-400/30',
      hoverColor: 'hover:border-indigo-400/60',
      items: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Pandas', 'OpenCV']
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-400/30',
      hoverColor: 'hover:border-cyan-400/60',
      items: ['HTML5', 'CSS3', 'React', 'Next.js', 'Express.js', 'Node.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-pink-400 to-rose-500',
      borderColor: 'border-pink-400/30',
      hoverColor: 'hover:border-pink-400/60',
      items: ['MySQL', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-400/30',
      hoverColor: 'hover:border-yellow-400/60',
      items: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter', 'Android Studio']
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Code comment */}
          <div className="font-mono text-sm mb-3">
            <span className="text-emerald-400">import</span> <span className="text-cyan-400">{'{'}</span> <span className="text-yellow-400">skills</span> <span className="text-cyan-400">{'}'}</span> <span className="text-emerald-400">from</span> <span className="text-orange-400">'@/developer/stack'</span><span className="text-slate-500">;</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          
          <div className="font-mono text-sm text-slate-400">
            <span className="text-slate-600">$</span> <span className="text-cyan-400">skills</span>.<span className="text-yellow-400">map</span>(<span className="text-orange-400">tech</span> <span className="text-purple-400">{'=>'}</span> <span className="text-emerald-400">display</span>(<span className="text-orange-400">tech</span>))
          </div>
        </motion.div>

        <div className="space-y-6">
          {techCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass-strong rounded-2xl overflow-hidden border border-slate-700/50"
              >
                {/* Terminal header */}
                <div className="bg-slate-900/60 px-5 py-3 flex items-center justify-between border-b border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <Icon size={16} className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text`} />
                    <span className="text-sm font-display font-semibold text-white">{category.category}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">stack/{category.category.toLowerCase().replace(/\s+/g, '_')}.json</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className={`relative group cursor-default`}
                      >
                        <div className={`glass rounded-lg px-4 py-2.5 border ${category.borderColor} ${category.hoverColor} transition-all relative overflow-hidden`}>
                          {/* Animated gradient on hover */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                          />
                          
                          {/* Tech name */}
                          <span className="text-sm font-mono text-slate-200 relative z-10 flex items-center gap-2">
                            <span className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text font-semibold`}>•</span>
                            {item}
                          </span>

                          {/* Glow effect */}
                          <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center font-mono text-xs text-slate-500"
        >
          <span className="text-purple-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-emerald-400">"Total skills loaded:"</span>, <span className="text-cyan-400">{techCategories.reduce((acc, cat) => acc + cat.items.length, 0)}</span>)<span className="text-slate-600">;</span>
        </motion.div>
      </div>
    </section>
  );
}
