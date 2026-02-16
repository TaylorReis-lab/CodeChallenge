import { cn } from '@/utils/cn';

interface ProgressProps {
  value: number;
  max: number;
  color?: 'emerald' | 'amber' | 'rose' | 'slate';
  showLabel?: boolean;
  className?: string;
}

export function Progress({ value, max, color = 'slate', showLabel = true, className }: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colors = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
    slate: 'bg-slate-500',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm text-slate-600 mb-1">
          <span>{value} de {max}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={cn('h-full rounded-full transition-all duration-500', colors[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
