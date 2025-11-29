import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Necromancer0912', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/necromancer0912', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sayan20012002@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`py-8 px-6 lg:px-8 relative border-t ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-3 rounded-lg backdrop-blur-xl border transition-all ${
                    isDarkMode 
                      ? 'bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-indigo-500/20 border-slate-700/50 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-300 hover:shadow-glow-cyan' 
                      : 'bg-slate-100 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-indigo-500/10 border-slate-300 hover:border-cyan-500 text-slate-600 hover:text-cyan-600 shadow-sm hover:shadow-md'
                  }`}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className={`text-sm text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            © 2025 Sayan Das — All rights reserved.
          </p>

          {/* Built with - code style */}
          <div className={`font-mono text-xs text-center ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`}>
            <span className="text-purple-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-emerald-400">"Built with "</span> + <span className="text-cyan-400">"React, Tailwind & Motion"</span>)<span className="text-slate-700">;</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
