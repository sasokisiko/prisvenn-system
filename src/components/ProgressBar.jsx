
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
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
