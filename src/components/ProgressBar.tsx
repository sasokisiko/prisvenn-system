
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep) / (totalSteps)) * 100;
  
  return (
    <div className="w-full mb-8 relative">
      <div className="progress-line"></div>
      <div 
        className="progress-line-active" 
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
