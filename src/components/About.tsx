import { motion } from 'motion/react';
import { Calendar, Award, Code, Zap, Terminal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '../assets/image.png';

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const stats = [
    { icon: Calendar, label: 'Experience', value: '4+ Years' },
    { icon: Award, label: 'Publications', value: '2 Research Papers' },
    { icon: Code, label: 'Projects', value: '15+ Completed' },
    { icon: Zap, label: 'Skills', value: 'AI/ML Expert' },
  ];

  const timeline = [
    {
      year: '2025 - Present',
      title: 'M.Tech in Computer Science',
      organization: 'IIIT Delhi',
      location: 'New Delhi, India',
      description: 'Specializing in AI/ML and Deep Learning'
    },
    {
      year: '2021 - 2025',
      title: 'B.Tech in Computer Science',
      organization: 'Ramkrishna Mahato Govt. Engineering College',
      location: 'Purulia, West Bengal',
      description: 'CGPA: 8.87/10.0'
    },
    {
      year: '2018 - 2020',
      title: 'Higher Secondary Education',
      organization: 'Midnapore Collegiate School (Boys)',
      location: 'Midnapore, West Bengal',
      description: '93.4%'
    },
    {
      year: '2018',
      title: 'Secondary Education',
      organization: 'Sarada Vidyamandir',
      location: 'Midnapore, West Bengal',
      description: '93.14%'
    },
  ];

  return (
    <section id="about" className="py-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Portrait with gradient halo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Terminal-style header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-2 mb-4 font-mono text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}
                >
                  <Terminal size={14} className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} />
                  <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>~/about</span>
                  <span>$</span>
                  <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>show profile.jpg</span>
                </motion.div>

                {/* Profile container with terminal styling */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden border ${isDarkMode
                    ? 'glass-strong border-slate-700/50'
                    : 'bg-white/90 shadow-xl border-slate-200'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Terminal header bar */}
                  <div className={`px-4 py-2 flex items-center justify-between border-b ${isDarkMode
                    ? 'bg-slate-900/80 border-slate-700/50'
                    : 'bg-slate-50 border-slate-200'
                    }`}>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>profile.jpg</span>
                    <div className="w-16" />
                  </div>

                  {/* Image container */}
                  <div className="p-6">
                    <div className="aspect-square rounded-xl overflow-hidden relative group">
                      {/* Scan line effect on hover */}
                      <motion.div
                        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{
                          backgroundPosition: ['0% 0%', '0% 100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          background: 'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.3) 50%, transparent 100%)',
                          backgroundSize: '100% 50px',
                        }}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 z-10" />

                      <img
                        src={profileImage}
                        alt="Sayan Das - Developer"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-60" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-60" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-60" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-60" />
                    </div>

                    {/* Info bar */}
                    <div className={`mt-4 p-3 rounded-lg font-mono text-xs ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-100'
                      }`}>
                      <div className={`flex justify-between ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <span>Status: <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>● Active</span></span>
                        <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>Developer</span>
                      </div>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10" />
                </motion.div>
              </div>

              {/* Quick Stats with animations */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`backdrop-blur-xl bg-gradient-to-br rounded-xl p-4 text-center border group cursor-pointer relative overflow-hidden transition-all ${isDarkMode
                        ? 'from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/15 hover:to-indigo-500/15 border-slate-700/50 hover:border-cyan-400/40 hover:shadow-glow-cyan'
                        : 'from-cyan-500/5 to-indigo-500/5 hover:from-cyan-500/10 hover:to-indigo-500/10 border-slate-300 hover:border-cyan-500/50 shadow-md hover:shadow-lg'
                        }`}
                    >
                      {/* Hover gradient effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'from-indigo-500/10 to-cyan-500/10' : 'from-indigo-500/5 to-cyan-500/5'
                          }`}
                      />

                      <Icon size={20} className={`mx-auto mb-1.5 transition-colors relative z-10 ${isDarkMode
                        ? 'text-indigo-400 group-hover:text-cyan-400'
                        : 'text-indigo-600 group-hover:text-cyan-600'
                        }`} />
                      <p className={`text-xl font-display font-bold mb-0.5 relative z-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                      <p className={`text-xs font-mono relative z-10 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Bio, Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Code comment header */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-3 font-mono text-sm"
              >
                <span className="text-emerald-400">{'/* '}</span>
                <span className="text-slate-400">About the Developer</span>
                <span className="text-emerald-400">{' */'}</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                <span className="text-cyan-400">{'<'}</span>About<span className="text-cyan-400">{' />'}</span>
              </h2>

              {/* Bio text with typing effect styling */}
              <div className="space-y-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-strong rounded-lg p-4 border-l-2 border-indigo-500"
                >
                  <p className="text-sm text-slate-400 leading-relaxed font-mono">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}<br />
                    <span className="ml-4 text-slate-500">name:</span> <span className="text-emerald-400">"Sayan Das"</span>,<br />
                    <span className="ml-4 text-slate-500">role:</span> <span className="text-emerald-400">"AI/ML Researcher"</span>,<br />
                    <span className="ml-4 text-slate-500">institution:</span> <span className="text-emerald-400">"IIIT Delhi"</span>,<br />
                    <span className="ml-4 text-slate-500">focus:</span> [<span className="text-cyan-400">"Medical Imaging"</span>, <span className="text-cyan-400">"NLP"</span>]<br />
                    {'};'}
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-base text-slate-400 leading-relaxed"
                >
                  I'm a passionate AI/ML researcher and developer currently pursuing my M.Tech at IIIT Delhi.
                  My work focuses on building intelligent systems that solve real-world problems, particularly
                  in medical imaging and natural language processing.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-slate-400 leading-relaxed"
                >
                  With published research in neural network modeling and extensive experience in PyTorch and
                  TensorFlow, I specialize in computer vision, deep learning, and multi-modal AI systems.
                </motion.p>
              </div>

              {/* Academic Journey - Compact */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-slate-600 mb-3">
                  <span className="text-green-400">/** </span>Academic Journey <span className="text-green-400">**/</span>
                </div>

                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="relative pl-6 border-l-2 border-cyan-500/30 group cursor-pointer"
                  >
                    {/* Animated dot */}
                    <motion.div
                      className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-cyan-500 group-hover:bg-indigo-400 transition-colors"
                      whileHover={{ scale: 1.3 }}
                    />

                    <div className="pb-1">
                      <p className="text-xs text-cyan-400 font-mono mb-0.5">
                        {item.year}
                      </p>
                      <h4 className="text-sm font-display font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-mono">{item.organization}</p>
                      <p className="text-xs text-slate-500">{item.location} • {item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
