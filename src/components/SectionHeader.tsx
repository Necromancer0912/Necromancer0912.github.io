import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  comment?: string;
  lineNumber?: number;
  isDarkMode?: boolean;
  children?: ReactNode;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  comment = 'Section', 
  lineNumber = 1,
  isDarkMode = true,
  children 
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Line number & comment */}
      <div className="flex items-start gap-4 mb-3">
        <motion.span 
          className={`font-mono text-xs select-none ${
            isDarkMode ? 'text-slate-700' : 'text-slate-400'
          }`}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {String(lineNumber).padStart(3, '0')}
        </motion.span>
        <div className="flex-1">
          <div className={`font-mono text-xs ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`}>
            <span className="text-green-400">/* </span>
            {comment}
            <span className="text-green-400"> */</span>
          </div>
          
          {/* Title */}
          <h2 className={`mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-cyan-400 opacity-60 mr-2">{'<'}</span>
            {title}
            <span className="text-cyan-400 opacity-60 ml-2">{'/>'}</span>
          </h2>
          
          {/* Subtitle */}
          {subtitle && (
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
      
      {/* Decorative line */}
      <motion.div 
        className={`h-px bg-gradient-to-r ${
          isDarkMode 
            ? 'from-cyan-500/20 via-purple-500/20 to-transparent' 
            : 'from-cyan-500/30 via-purple-500/30 to-transparent'
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
