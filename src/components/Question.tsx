
import React from 'react';

interface QuestionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Question: React.FC<QuestionProps> = ({ title, subtitle, children }) => {
  return (
    <div className="mb-8 animate-fade-in">
      <h2 className="text-center text-3xl font-semibold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default Question;
