import { motion } from 'motion/react';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  isDarkMode: boolean;
}

export function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Code header */}
          <div className="font-mono text-sm mb-4">
            <span className="text-green-400">// </span>
            <span className={isDarkMode ? 'text-slate-500' : 'text-slate-600'}>Let's connect and build together</span>
          </div>
          <div className="font-mono text-sm mb-4">
            <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>const</span>{' '}
            <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>collaborate</span>{' '}
            <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>=</span>{' '}
            <span className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>async</span>{' '}
            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>() {'=>'}</span>{' '}
            <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>{'{'}</span>
            <span className={`terminal-cursor ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>|</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Build <span className="gradient-text">Something</span> Great
          </h2>
          
          <div className={`font-mono text-sm max-w-2xl mx-auto space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <div>
              <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>return</span>{' '}
              <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>{'{'}</span>
            </div>
            <div className="ml-6">
              <span className={isDarkMode ? 'text-orange-400' : 'text-orange-600'}>opportunities</span>:{' '}
              <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>[</span>
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'Projects'</span>,{' '}
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'Freelance'</span>,{' '}
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'Full-time'</span>
              <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>],</span>
            </div>
            <div className="ml-6">
              <span className={isDarkMode ? 'text-orange-400' : 'text-orange-600'}>status</span>:{' '}
              <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>'Open to work'</span>
            </div>
            <div>
              <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>{'}'}</span>
            </div>
          </div>
          
          <p className={`text-xs font-mono mt-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>{'}'}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`backdrop-blur-xl rounded-2xl overflow-hidden border ${
            isDarkMode 
              ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-slate-700/50' 
              : 'bg-white shadow-2xl border-slate-200'
          }`}
        >
          {/* Terminal header */}
          <div className={`px-5 py-3 flex items-center justify-between border-b ${
            isDarkMode 
              ? 'bg-slate-900/60 border-slate-700/50' 
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <MessageSquare size={16} className="text-cyan-400" />
              <span className={`text-sm font-display font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Form
              </span>
            </div>
            <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
              contact.tsx
            </span>
          </div>

          <div className="p-6 md:p-8">
            {/* Email Button */}
            <motion.a
              href="mailto:sayan20012002@gmail.com"
              whileHover={{ scale: 1.02, y: -2 }}
              className={`block w-full mb-8 p-5 rounded-xl backdrop-blur-xl text-center font-semibold transition-all relative overflow-hidden group ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 border border-cyan-400/20 hover:border-cyan-400/40 text-white hover:shadow-lg hover:shadow-cyan-500/20' 
                  : 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg hover:shadow-xl border border-cyan-600'
              }`}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent ${
                  isDarkMode ? 'via-white/20' : 'via-white/30'
                }`}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <div className="flex items-center justify-center gap-3 relative z-10">
                <Mail size={22} />
                <span className="text-base font-mono">sayan20012002@gmail.com</span>
              </div>
            </motion.a>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={`block mb-2 font-mono text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="text-cyan-400">const</span> <span className="text-yellow-400">name</span> <span className="text-purple-400">=</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-xl border text-sm font-mono focus:outline-none transition-all ${
                    isDarkMode 
                      ? 'bg-slate-900/40 border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-400/60 focus:shadow-glow-cyan hover:border-slate-600/50' 
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 hover:border-slate-400'
                  }`}
                  placeholder="'Your name'"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 font-mono text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="text-cyan-400">const</span> <span className="text-yellow-400">email</span> <span className="text-purple-400">=</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-xl border text-sm font-mono focus:outline-none transition-all ${
                    isDarkMode 
                      ? 'bg-slate-900/40 border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-400/60 focus:shadow-glow-cyan hover:border-slate-600/50' 
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 hover:border-slate-400'
                  }`}
                  placeholder="'your@email.com'"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 font-mono text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="text-cyan-400">const</span> <span className="text-yellow-400">message</span> <span className="text-purple-400">=</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-xl border text-sm font-mono focus:outline-none transition-all resize-none ${
                    isDarkMode 
                      ? 'bg-slate-900/40 border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-400/60 focus:shadow-glow-cyan hover:border-slate-600/50' 
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 hover:border-slate-400'
                  }`}
                  placeholder="'Tell me about your project...'"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-4 rounded-lg backdrop-blur-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 font-mono relative overflow-hidden group ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 hover:border-emerald-400/70 text-white shadow-glow-green hover:shadow-glow-cyan' 
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg hover:shadow-xl border border-emerald-600'
                }`}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent ${
                    isDarkMode ? 'via-white/20' : 'via-white/30'
                  }`}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={18} />
                  <span>submit()</span>
                </span>
              </motion.button>

              {/* Footer code comment */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-500 font-mono">
                  <span className="text-green-400">// </span>
                  <span>Response time: &lt; 24 hours</span>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
