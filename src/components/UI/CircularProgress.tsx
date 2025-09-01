import React from 'react';
import { CircularProgressProps } from '../../types';
import { themes } from '../../constants/themes';

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  maxValue = 100,
  size = 'md',
  color = 'blue',
  showValue = true,
  label
}) => {
  const percentage = Math.min((value / maxValue) * 100, 100);
  const theme = themes[color];
  
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  };
  
  const strokeWidth = size === 'sm' ? 3 : size === 'md' ? 4 : 6;
  const radius = size === 'sm' ? 20 : size === 'md' ? 30 : 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative flex flex-col items-center">
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          className="transform -rotate-90 w-full h-full"
          viewBox={`0 0 ${radius * 2 + strokeWidth * 2} ${radius * 2 + strokeWidth * 2}`}
        >
          {/* Background circle */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`${theme.accent} transition-all duration-500 ease-out`}
            style={{
              filter: `drop-shadow(0 0 6px ${color === 'blue' ? '#3b82f6' : color === 'orange' ? '#f97316' : '#22c55e'})`
            }}
          />
        </svg>
        
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-bold ${textSizeClasses[size]} ${theme.accent}`}>
              {Math.round(value)}
            </span>
          </div>
        )}
      </div>
      
      {label && (
        <span className={`mt-2 text-center ${textSizeClasses[size]} text-gray-300`}>
          {label}
        </span>
      )}
    </div>
  );
};
