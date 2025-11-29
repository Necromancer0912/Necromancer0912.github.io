import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function TypingEffect({ text, speed = 50, className = '', delay = 0, style }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className} style={style}>
      {displayedText}
      {currentIndex < text.length && (
        <span className={`inline-block w-[2px] h-[1em] bg-cyan-400 ml-[2px] ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      )}
    </span>
  );
}
