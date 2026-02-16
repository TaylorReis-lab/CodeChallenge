import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div className={cn(
      'bg-white border border-slate-200 rounded-xl',
      hover && 'transition-all duration-200 hover:shadow-lg hover:border-slate-300 cursor-pointer',
      className
    )}>
      {children}
    </div>
  );
}
