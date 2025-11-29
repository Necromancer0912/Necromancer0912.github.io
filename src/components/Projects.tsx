import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

export function Projects({ isDarkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'Brain Tumor Classification',
      description: 'Multi-class tumor detection using Residual-Inception architecture with 13+ pretrained models for automated MRI analysis.',
      tech: ['PyTorch', 'ResNet', 'Inception', 'Medical Imaging'],
      link: 'https://github.com/Necromancer0912/Residual-Inception-Brain-Classification',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: '3D U-Net Tumor Segmentation',
      description: 'Pixel-level tumor boundary detection using U-Net architectures for surgical planning and treatment monitoring.',
      tech: ['PyTorch', 'U-Net', '3D Segmentation', 'BraTS'],
      link: 'https://github.com/Necromancer0912/Residual-Inception-Unet-Segmentation',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Modal AI Chatbot',
      description: 'Intelligent conversational agent with LLaMA 3.1 and Stable Diffusion for text and image generation.',
      tech: ['Python', 'LLaMA 3.1', 'Qwen2.5', 'Stable Diffusion'],
      link: 'https://github.com/Necromancer0912/Chanakya-AI-Discord-Bot',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Neural Machine Translation',
      description: 'Attention-based seq2seq model for Bengali to English translation using GloVe embeddings.',
      tech: ['TensorFlow', 'GloVe', 'Attention', 'NLP'],
      link: 'https://github.com/Necromancer0912/English-to-Bengali-Translator',
      gradient: 'from-violet-500 to-purple-500'
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 font-mono text-sm">
            <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>const</span>{' '}
            <span className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>projects</span>{' '}
            <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>=</span>{' '}
            <span className={isDarkMode ? 'text-orange-400' : 'text-orange-600'}>await</span>{' '}
            <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>fetch</span>
            (<span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>'featured'</span>);
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <div className={`text-sm mb-12 max-w-2xl font-mono space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <div>
              <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>return</span>{' '}
              <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>[</span>
            </div>
            <div className="ml-4 text-xs">
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'AI/ML'</span>,{' '}
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'Medical Imaging'</span>,{' '}
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'NLP'</span>,{' '}
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'Computer Vision'</span>
            </div>
            <div>
              <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>];</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`rounded-2xl overflow-hidden h-full transition-all duration-300 border relative ${
                  isDarkMode 
                    ? 'glass-strong border-slate-700/50 group-hover:border-white/20' 
                    : 'bg-white shadow-lg group-hover:shadow-2xl border-slate-200 group-hover:border-cyan-400/50'
                }`}>
                  {/* Animated scan line on hover */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Terminal header */}
                  <div className={`px-4 py-2.5 flex items-center justify-between border-b ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-700/50' 
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className={`text-[10px] font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      project_{index + 1}.tsx
                    </span>
                    <div className="w-16" />
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative p-6">
                    {/* Code-style header */}
                    <div className="flex items-center gap-2 mb-4 font-mono text-xs">
                      <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>export</span>
                      <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>class</span>
                      <motion.div 
                        className={`w-12 h-[2px] bg-gradient-to-r ${project.gradient}`}
                        animate={{
                          width: ['48px', '64px', '48px'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>{'{'}</span>
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>...</span>
                      <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>{'}'}</span>
                    </div>
                    
                    <h3 className={`text-xl font-display font-bold mb-3 group-hover:text-shadow-glow transition-all ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm mb-5 leading-relaxed ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-default ${
                            isDarkMode 
                              ? 'glass text-slate-300 border-slate-700/50 hover:border-cyan-400/50' 
                              : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-cyan-500'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-xl font-semibold text-sm group/link transition-all hover:-translate-y-0.5 relative overflow-hidden ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 hover:text-cyan-200 hover:shadow-glow-cyan' 
                          : 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white border border-cyan-600 hover:border-cyan-700 shadow-md hover:shadow-lg'
                      }`}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent ${
                          isDarkMode ? 'via-white/10' : 'via-white/20'
                        }`}
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="font-mono text-xs relative z-10">$</span>
                      <span className="relative z-10">view_project()</span>
                      <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform relative z-10" />
                    </a>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30">
                    <div className={`absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
