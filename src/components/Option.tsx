
import React from 'react';
import { cn } from '@/lib/utils';

interface OptionProps {
  text: string;
  selected?: boolean;
  onClick: () => void;
  className?: string;
}

const Option: React.FC<OptionProps> = ({ text, selected = false, onClick, className }) => {
  return (
    <button
      className={cn(
        "px-5 py-3 rounded-xl transition-all duration-300 text-center text-foreground",
        "relative overflow-hidden",
        selected 
          ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20 scale-[1.02]" 
          : "bg-secondary hover:bg-secondary/80 text-foreground",
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple opacity-50 animate-scale-in"></div>
      )}
    </button>
  );
};

export default Option;
