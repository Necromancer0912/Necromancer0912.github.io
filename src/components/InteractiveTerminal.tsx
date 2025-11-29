import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, Minus, Maximize2 } from 'lucide-react';
import terminalIcon from '../assets/Terminalicon2.png';

interface InteractiveTerminalProps {
  isDarkMode: boolean;
}

export function InteractiveTerminal({ isDarkMode }: InteractiveTerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'command' | 'output'; content: string | JSX.Element }>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  // Show welcome message when terminal opens
  useEffect(() => {
    if (isOpen && !hasShownWelcome) {
      setHasShownWelcome(true);
      setTimeout(() => {
        setHistory([{
          type: 'output',
          content: (
            <div className="text-xs font-mono space-y-2 animate-fadeIn">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold text-lg">
                ╭─────────────────────────────────────────────╮
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold text-lg">
                │  ⚡ Welcome to Sayan's Terminal v3.0 ⚡  │
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold text-lg">
                ╰─────────────────────────────────────────────╯
              </div>
              <div className="text-slate-400 mt-3 flex items-center gap-2">
                <span className="text-emerald-400">➜</span>
                Type <span className="text-cyan-400 font-bold">'help'</span> to see available commands
              </div>
              <div className="text-slate-500 text-xs flex items-center gap-2">
                <span className="text-purple-400">💡</span>
                Use <span className="text-purple-400">↑/↓</span> arrows to navigate command history
              </div>
            </div>
          )
        }]);
      }, 100);
    }
  }, [isOpen, hasShownWelcome]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.terminal-header')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const projects = [
    {
      name: 'Brain-Tumor-Classification',
      description: 'Multi-class tumor detection using Residual-Inception',
      tech: ['PyTorch', 'ResNet', 'Inception'],
      github: 'https://github.com/Necromancer0912/Residual-Inception-Brain-Classification'
    },
    {
      name: '3D-UNet-Segmentation',
      description: 'Pixel-level tumor boundary detection',
      tech: ['PyTorch', 'U-Net', '3D-Seg'],
      github: 'https://github.com/Necromancer0912/Residual-Inception-Unet-Segmentation'
    },
    {
      name: 'Multi-Modal-AI-Chatbot',
      description: 'LLaMA 3.1 + Stable Diffusion chatbot',
      tech: ['Python', 'LLaMA', 'SD'],
      github: 'https://github.com/Necromancer0912/Chanakya-AI-Discord-Bot'
    },
    {
      name: 'Neural-Machine-Translation',
      description: 'Attention-based seq2seq Bengali to English',
      tech: ['TensorFlow', 'GloVe', 'NLP'],
      github: 'https://github.com/Necromancer0912/English-to-Bengali-Translator'
    }
  ];

  const skills = {
    languages: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'Kotlin', 'SQL', 'LaTeX'],
    aiml: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Pandas', 'OpenCV'],
    web: ['HTML5', 'CSS3', 'React', 'Next.js', 'Express.js', 'Node.js', 'Tailwind CSS'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter', 'Android Studio']
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) return;

    setHistory(prev => [...prev, { type: 'command', content: `$ ${trimmedCmd}` }]);
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const [command, ...args] = trimmedCmd.split(' ');

    switch (command.toLowerCase()) {
      case 'neofetch':
        setTimeout(() => {
          setHistory(prev => [...prev, {
            type: 'output',
            content: (
              <div className="space-y-1 text-xs animate-fadeIn">
                <div className="flex gap-4">
                  <div className="text-cyan-400 space-y-0.5">
                    <div className="text-2xl">{'    ___    '}</div>
                    <div className="text-2xl">{'   /   \\   '}</div>
                    <div className="text-2xl">{'  |  o  |  '}</div>
                    <div className="text-2xl">{'  |  -  |  '}</div>
                    <div className="text-2xl">{'   \\___/   '}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div><span className="text-cyan-400 font-bold">sayan</span><span className="text-slate-600">@</span><span className="text-purple-400 font-bold">portfolio</span></div>
                    <div className="text-slate-600">------------------------</div>
                    <div><span className="text-cyan-400">OS:</span> <span className="text-slate-400">Portfolio v3.0</span></div>
                    <div><span className="text-cyan-400">Host:</span> <span className="text-slate-400">Developer Machine</span></div>
                    <div><span className="text-cyan-400">Kernel:</span> <span className="text-slate-400">React-TypeScript</span></div>
                    <div><span className="text-cyan-400">Uptime:</span> <span className="text-slate-400">M.Tech @ IIIT Delhi</span></div>
                    <div><span className="text-cyan-400">Packages:</span> <span className="text-slate-400">AI/ML, Deep Learning</span></div>
                    <div><span className="text-cyan-400">Shell:</span> <span className="text-slate-400">zsh 5.9</span></div>
                    <div><span className="text-cyan-400">Resolution:</span> <span className="text-slate-400">2 Publications</span></div>
                    <div><span className="text-cyan-400">Theme:</span> <span className="text-slate-400">Cyberpunk [Dark]</span></div>
                    <div><span className="text-cyan-400">Icons:</span> <span className="text-slate-400">Lucide React</span></div>
                    <div><span className="text-cyan-400">Terminal:</span> <span className="text-slate-400">InteractiveTerminal</span></div>
                    <div className="mt-2">
                      <span className="inline-block w-10 h-4 bg-slate-900"></span>
                      <span className="inline-block w-10 h-4 bg-red-500"></span>
                      <span className="inline-block w-10 h-4 bg-green-500"></span>
                      <span className="inline-block w-10 h-4 bg-yellow-500"></span>
                      <span className="inline-block w-10 h-4 bg-blue-500"></span>
                      <span className="inline-block w-10 h-4 bg-purple-500"></span>
                      <span className="inline-block w-10 h-4 bg-cyan-500"></span>
                      <span className="inline-block w-10 h-4 bg-white"></span>
                    </div>
                  </div>
                </div>
              </div>
            )
          }]);
        }, 100);
        break;

      case 'sudo':
        if (args[0]?.toLowerCase() === 'projects' || args[0]?.toLowerCase() === 'project') {
          setTimeout(() => {
            setHistory(prev => [...prev, {
              type: 'output',
              content: (
                <div className="space-y-2 text-xs font-mono animate-fadeIn">
                  <div className="text-yellow-400">[sudo] password for sayan: ********</div>
                  <div className="text-emerald-400">✓ Authentication successful</div>
                  <div className="text-cyan-400 mt-2">═══════════════════════════════════════════════</div>
                  <div className="text-cyan-400 font-bold">    PROJECT DIRECTORY LISTING</div>
                  <div className="text-cyan-400">═══════════════════════════════════════════════</div>
                  {projects.map((project, idx) => (
                    <div key={idx} className="mt-3 border-l-2 border-purple-500/30 pl-3 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">▸</span>
                        <span className="text-white font-bold">{project.name}</span>
                      </div>
                      <div className="text-slate-400 ml-4">└─ {project.description}</div>
                      <div className="text-slate-500 ml-4 flex gap-2">
                        <span>└─ Tech:</span>
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-purple-400">[{t}]</span>
                        ))}
                      </div>
                      <div className="text-slate-500 ml-4">
                        └─ <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">GitHub →</a>
                      </div>
                    </div>
                  ))}
                  <div className="text-cyan-400 mt-3">═══════════════════════════════════════════════</div>
                  <div className="text-slate-400">Total: {projects.length} projects loaded</div>
                </div>
              )
            }]);
          }, 300);
        } else {
          setHistory(prev => [...prev, { type: 'output', content: `sudo: unknown command '${args.join(' ')}'` }]);
        }
        break;

      case 'skills':
        setTimeout(() => {
          setHistory(prev => [...prev, {
            type: 'output',
            content: (
              <div className="space-y-2 text-xs font-mono animate-fadeIn">
                <div className="text-cyan-400">════════════════════════════════════════</div>
                <div className="text-cyan-400 font-bold">    TECHNICAL SKILL TREE</div>
                <div className="text-cyan-400">════════════════════════════════════════</div>
                {Object.entries(skills).map(([category, items], idx) => (
                  <div key={idx} className="mt-2">
                    <div className="text-purple-400 font-bold">
                      ▸ {category.toUpperCase()}
                    </div>
                    <div className="ml-4 flex flex-wrap gap-2 mt-1">
                      {items.map((skill, i) => (
                        <span key={i} className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="text-cyan-400 mt-3">════════════════════════════════════════</div>
                <div className="text-slate-400">Total: {Object.values(skills).flat().length} skills loaded</div>
              </div>
            )
          }]);
        }, 100);
        break;

      case 'help':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs space-y-2">
              <div className="text-cyan-400 font-bold">╔════════════════════════════════════════╗</div>
              <div className="text-cyan-400 font-bold">║     AVAILABLE COMMANDS                 ║</div>
              <div className="text-cyan-400 font-bold">╚════════════════════════════════════════╝</div>
              <div className="ml-2 space-y-0.5 text-slate-400">
                <div><span className="text-emerald-400">neofetch</span> - Display system information</div>
                <div><span className="text-emerald-400">sudo projects</span> - List all projects</div>
                <div><span className="text-emerald-400">skills</span> - Show technical skills</div>
                <div><span className="text-emerald-400">whoami</span> - Display user info</div>
                <div><span className="text-emerald-400">ls</span> - List directories</div>
                <div><span className="text-emerald-400">cat [file]</span> - Read file (about/contact/education)</div>
                <div><span className="text-emerald-400">github</span> - Open GitHub profile</div>
                <div><span className="text-emerald-400">linkedin</span> - Open LinkedIn profile</div>
                <div><span className="text-emerald-400">email</span> - Show email address</div>
                <div><span className="text-emerald-400">theme</span> - Toggle dark/light mode</div>
                <div><span className="text-emerald-400">date</span> - Show current date</div>
                <div><span className="text-emerald-400">uptime</span> - Show system uptime</div>
                <div><span className="text-emerald-400">tree</span> - Show directory tree</div>
                <div><span className="text-emerald-400">banner</span> - Show ASCII art banner</div>
                <div><span className="text-emerald-400">quote</span> - Random coding quote</div>
                <div><span className="text-emerald-400">clear</span> - Clear terminal</div>
                <div><span className="text-emerald-400">help</span> - Show this help message</div>
              </div>
              <div className="text-purple-400 mt-2">💡 Tip: Use ↑/↓ arrows for command history</div>
            </div>
          )
        }]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'ls':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs space-y-1">
              <div className="flex gap-4 text-cyan-400">
                <span>about/</span>
                <span>projects/</span>
                <span>skills/</span>
                <span>contact/</span>
                <span>education/</span>
                <span>publications/</span>
              </div>
            </div>
          )
        }]);
        break;

      case 'whoami':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs space-y-1 animate-fadeIn">
              <div className="text-cyan-400">sayan@portfolio</div>
              <div className="text-slate-400">AI/ML Researcher | Full-Stack Developer</div>
              <div className="text-slate-400">M.Tech @ IIIT Delhi</div>
            </div>
          )
        }]);
        break;

      case 'cat':
        const file = args[0]?.toLowerCase();
        if (file === 'about' || file === 'about.txt') {
          setHistory(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-xs space-y-2 text-slate-400 animate-fadeIn">
                <div className="text-cyan-400">📄 about.txt</div>
                <div>Currently pursuing M.Tech in CSE at IIIT Delhi, specializing in AI/ML.</div>
                <div>Research interests: Deep Learning, Computer Vision, NLP</div>
                <div>Published researcher in computational biology and AI applications.</div>
              </div>
            )
          }]);
        } else if (file === 'contact' || file === 'contact.txt') {
          setHistory(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-xs space-y-1 text-slate-400 animate-fadeIn">
                <div className="text-cyan-400">📄 contact.txt</div>
                <div>📧 Email: sayan21593@iiitd.ac.in</div>
                <div>🐙 GitHub: github.com/Necromancer0912</div>
                <div>💼 LinkedIn: linkedin.com/in/necromancer</div>
              </div>
            )
          }]);
        } else if (file === 'education' || file === 'education.txt') {
          setHistory(prev => [...prev, {
            type: 'output',
            content: (
              <div className="text-xs space-y-1 text-slate-400 animate-fadeIn">
                <div className="text-cyan-400">📄 education.txt</div>
                <div>🎓 M.Tech in Computer Science - IIIT Delhi (2024-2026)</div>
                <div>🎓 B.Tech in Computer Science - MCKV Institute (2020-2024)</div>
              </div>
            )
          }]);
        } else {
          setHistory(prev => [...prev, {
            type: 'output',
            content: `cat: ${file || '[file]'}: No such file. Try: about, contact, education`
          }]);
        }
        break;

      case 'github':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs text-emerald-400 animate-fadeIn">
              Opening GitHub profile...
              <a href="https://github.com/Necromancer0912" target="_blank" rel="noopener noreferrer" className="ml-2 underline">
                github.com/Necromancer0912
              </a>
            </div>
          )
        }]);
        setTimeout(() => window.open('https://github.com/Necromancer0912', '_blank'), 500);
        break;

      case 'linkedin':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs text-blue-400 animate-fadeIn">
              Opening LinkedIn profile...
              <a href="https://www.linkedin.com/in/necromancer/" target="_blank" rel="noopener noreferrer" className="ml-2 underline">
                linkedin.com/in/necromancer
              </a>
            </div>
          )
        }]);
        setTimeout(() => window.open('https://www.linkedin.com/in/necromancer/', '_blank'), 500);
        break;

      case 'email':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs space-y-1 text-slate-400 animate-fadeIn">
              <div className="text-cyan-400">📧 Email Address:</div>
              <div>sayan21593@iiitd.ac.in</div>
              <div className="text-xs text-slate-600 mt-1">Click to copy</div>
            </div>
          )
        }]);
        break;

      case 'theme':
        setHistory(prev => [...prev, {
          type: 'output',
          content: <div className="text-xs text-purple-400">Theme toggle feature - Press the moon/sun icon in navbar!</div>
        }]);
        break;

      case 'date':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs text-cyan-400 animate-fadeIn">
              {new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
          )
        }]);
        break;

      case 'uptime':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs text-emerald-400 animate-fadeIn">
              System uptime: Portfolio running since 2025 🚀
            </div>
          )
        }]);
        break;

      case 'tree':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs text-slate-400 font-mono animate-fadeIn">
              <div className="text-cyan-400">portfolio/</div>
              <div>├── 📁 about/</div>
              <div>│   └── profile.json</div>
              <div>├── 📁 projects/</div>
              <div>│   ├── brain-tumor-classification/</div>
              <div>│   ├── 3d-unet-segmentation/</div>
              <div>│   ├── multi-modal-chatbot/</div>
              <div>│   └── neural-translation/</div>
              <div>├── 📁 skills/</div>
              <div>│   ├── languages.json</div>
              <div>│   ├── frameworks.json</div>
              <div>│   └── tools.json</div>
              <div>├── 📁 publications/</div>
              <div>│   ├── neuro-blood-flow.pdf</div>
              <div>│   └── ai-dairy-innovation.pdf</div>
              <div>└── 📁 contact/</div>
              <div>    └── links.json</div>
            </div>
          )
        }]);
        break;

      case 'banner':
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs font-mono animate-fadeIn">
              <pre className="text-cyan-400">
                {`
  ███████╗ █████╗ ██╗   ██╗ █████╗ ███╗   ██╗
  ██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║
  ███████╗███████║ ╚████╔╝ ███████║██╔██╗ ██║
  ╚════██║██╔══██║  ╚██╔╝  ██╔══██║██║╚██╗██║
  ███████║██║  ██║   ██║   ██║  ██║██║ ╚████║
  ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝
`}
              </pre>
              <div className="text-purple-400 text-center mt-2">AI/ML Researcher | Full-Stack Developer</div>
            </div>
          )
        }]);
        break;

      case 'quote':
        const quotes = [
          '"First, solve the problem. Then, write the code." - John Johnson',
          '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          '"The best error message is the one that never shows up." - Thomas Fuchs',
          '"Simplicity is the soul of efficiency." - Austin Freeman',
          '"Make it work, make it right, make it fast." - Kent Beck',
          '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setHistory(prev => [...prev, {
          type: 'output',
          content: (
            <div className="text-xs text-purple-400 italic animate-fadeIn">
              {randomQuote}
            </div>
          )
        }]);
        break;

      default:
        setHistory(prev => [...prev, {
          type: 'output',
          content: `Command not found: ${command}. Type 'help' for available commands.`
        }]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <>
      {/* Floating terminal button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={terminalIcon}
          alt="Terminal"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-cyan-400/50"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: 'fixed',
              left: position.x,
              top: position.y,
              zIndex: 100,
            }}
            className="w-[700px] max-w-[90vw]"
            onMouseDown={handleMouseDown}
          >
            <div className={`rounded-xl overflow-hidden border shadow-2xl ${isDarkMode
              ? 'glass-strong border-slate-700/50 shadow-cyan-500/20'
              : 'bg-white/95 border-slate-300 shadow-slate-500/20'
              }`}>
              {/* Terminal header */}
              <div className={`terminal-header px-4 py-3 flex items-center justify-between border-b cursor-move ${isDarkMode
                ? 'bg-slate-900/90 border-slate-700/50'
                : 'bg-slate-100 border-slate-200'
                }`}>
                <div className="flex gap-2">
                  <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                  <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                  <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal size={14} className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} />
                  <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>sayan@portfolio ~ zsh</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Terminal content */}
              <div className={`p-4 font-mono text-sm ${isDarkMode ? 'bg-slate-950/95' : 'bg-white'}`}>
                <div
                  ref={outputRef}
                  className="space-y-2 mb-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                >
                  <div className={`text-xs ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    Welcome to Interactive Terminal v1.0
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                    Type 'help' for available commands
                  </div>
                  {history.map((item, idx) => (
                    <div key={idx} className={item.type === 'command' ? (isDarkMode ? 'text-slate-300' : 'text-slate-700') : (isDarkMode ? 'text-slate-400' : 'text-slate-600')}>
                      {item.content}
                    </div>
                  ))}
                </div>

                {/* Input line */}
                <div className="flex items-center gap-2">
                  <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>sayan@portfolio</span>
                  <span className={isDarkMode ? 'text-slate-600' : 'text-slate-500'}>:</span>
                  <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>~</span>
                  <span className={isDarkMode ? 'text-slate-500' : 'text-slate-600'}>$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`flex-1 bg-transparent outline-none caret-cyan-400 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                    autoFocus
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </>
  );
}
