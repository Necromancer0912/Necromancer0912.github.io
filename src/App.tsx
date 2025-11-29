import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Certifications } from './components/Certifications';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GradientBlobs } from './components/GradientBlobs';
import { MatrixRain } from './components/MatrixRain';
import { ScrollIndicator } from './components/ScrollIndicator';
import { FloatingCodeTips } from './components/FloatingCodeTips';
import { KeyboardShortcuts } from './components/KeyboardShortcuts';
import { GitStatus } from './components/GitStatus';
import { EasterEgg } from './components/EasterEgg';
import { LoadingBar } from './components/LoadingBar';
import { FPSCounter } from './components/FPSCounter';
import { CommandPalette } from './components/CommandPalette';
import { SystemMonitor } from './components/SystemMonitor';
import { NetworkIndicator } from './components/NetworkIndicator';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Console Easter Egg
  useState(() => {
    console.log(
      '%c🚀 Welcome to Sayan Das\'s Portfolio!',
      'color: #06B6D4; font-size: 20px; font-weight: bold; font-family: monospace;'
    );
    console.log(
      '%c💻 Built with React + TypeScript + Tailwind CSS',
      'color: #10B981; font-size: 14px; font-family: monospace;'
    );
    console.log(
      '%c🎨 Featuring: Matrix Rain, Glassmorphism, Terminal Effects',
      'color: #6366F1; font-size: 12px; font-family: monospace;'
    );
    console.log(
      '%c✨ Easter Eggs & Shortcuts:',
      'color: #EC4899; font-size: 14px; font-weight: bold; font-family: monospace;'
    );
    console.log(
      '%c   - Press Ctrl+` for interactive terminal',
      'color: #06B6D4; font-size: 12px; font-family: monospace;'
    );
    console.log(
      '%c   - Type "debug" to reveal ASCII art',
      'color: #F59E0B; font-size: 12px; font-family: monospace;'
    );
    console.log(
      '%c   - Press Shift+F to toggle FPS counter',
      'color: #F59E0B; font-size: 12px; font-family: monospace;'
    );
    console.log(
      '%c   - Press Ctrl+K for command palette',
      'color: #F59E0B; font-size: 12px; font-family: monospace;'
    );
    console.log(
      '%c   - Press ? for keyboard shortcuts',
      'color: #F59E0B; font-size: 12px; font-family: monospace;'
    );
    console.log(
      '%c\n👨‍💻 Want to connect? Scroll down to the contact section!',
      'color: #06B6D4; font-size: 14px; font-family: monospace;'
    );
  });

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#0B1221] text-white' 
        : 'light-theme bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900'
    }`}>
      {/* Loading Bar */}
      <LoadingBar />
      
      {/* Matrix Rain Background - only in dark mode */}
      {isDarkMode && <MatrixRain />}
      
      {/* Grid Background */}
      <div className={`fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500 ${
        isDarkMode ? 'grid-bg opacity-100' : 'opacity-0'
      }`} />
      
      {/* Gradient Blobs */}
      {isDarkMode && <GradientBlobs />}
      
      {/* Cool Developer Touches */}
      <ScrollIndicator />
      <FloatingCodeTips isDarkMode={isDarkMode} />
      <KeyboardShortcuts isDarkMode={isDarkMode} />
      <GitStatus isDarkMode={isDarkMode} />
      <NetworkIndicator isDarkMode={isDarkMode} />
      <EasterEgg />
      <FPSCounter />
      <CommandPalette />
      <SystemMonitor />
      <InteractiveTerminal isDarkMode={isDarkMode} />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Publications isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <TechStack isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
