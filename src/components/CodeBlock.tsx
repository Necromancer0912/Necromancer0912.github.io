import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  isDarkMode?: boolean;
}

export function CodeBlock({ code, language = 'typescript', fileName, isDarkMode = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl overflow-hidden border shadow-xl ${
        isDarkMode 
          ? 'bg-slate-900/95 border-slate-700/50' 
          : 'bg-white border-slate-300'
      }`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-2 border-b ${
        isDarkMode 
          ? 'bg-slate-800/50 border-slate-700/50' 
          : 'bg-slate-100 border-slate-200'
      }`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {fileName && (
            <span className={`text-xs font-mono ml-2 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {fileName}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono ${
            isDarkMode ? 'text-slate-500' : 'text-slate-500'
          }`}>
            {language}
          </span>
          <button
            onClick={handleCopy}
            className={`p-1.5 rounded hover:bg-slate-700/50 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <div className="flex">
          {/* Line numbers */}
          <div className={`py-4 px-3 select-none ${
            isDarkMode ? 'bg-slate-800/30 text-slate-600' : 'bg-slate-50 text-slate-400'
          }`}>
            {lines.map((_, i) => (
              <div key={i} className="font-mono text-xs leading-6 text-right">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <pre className={`flex-1 p-4 font-mono text-xs leading-6 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-800'
          }`}>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
