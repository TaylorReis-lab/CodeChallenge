import { useState } from 'react';
import { cn } from '@/utils/cn';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ children, text, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div 
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={cn(
          'absolute z-50 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap',
          positions[position]
        )}>
          {text}
          <div className="absolute w-2 h-2 bg-slate-800 rotate-45 -mt-1" 
            style={{ 
              left: position === 'left' ? '100%' : position === 'right' ? 'auto' : '50%',
              right: position === 'right' ? '100%' : 'auto',
              transform: 'translate-x-1/2'
            }}
          />
        </div>
      )}
    </div>
  );
}
