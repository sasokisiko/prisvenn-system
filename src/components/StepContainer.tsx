
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface StepContainerProps {
  children: React.ReactNode;
  onBack?: () => void;
  showBackButton?: boolean;
}

const StepContainer: React.FC<StepContainerProps> = ({ 
  children, 
  onBack, 
  showBackButton = true 
}) => {
  return (
    <div className="py-8 px-4 min-h-[500px] flex flex-col items-center justify-center relative">
      {showBackButton && onBack && (
        <button 
          onClick={onBack}
          className="absolute left-0 top-0 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 p-2"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Forrige</span>
        </button>
      )}
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
};

export default StepContainer;
