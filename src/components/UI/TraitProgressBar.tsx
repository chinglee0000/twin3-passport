import React from 'react';
import { TraitProgressBarProps } from '../../types';

export const TraitProgressBar: React.FC<TraitProgressBarProps> = ({
  trait,
  showLabel = true
}) => {
  const percentage = (trait.value / trait.maxValue) * 100;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical':
        return 'bg-blue-500';
      case 'soft':
        return 'bg-green-500';
      case 'leadership':
        return 'bg-purple-500';
      case 'domain':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getCategoryGlow = (category: string) => {
    switch (category) {
      case 'technical':
        return 'shadow-[0_0_10px_rgba(59,130,246,0.5)]';
      case 'soft':
        return 'shadow-[0_0_10px_rgba(34,197,94,0.5)]';
      case 'leadership':
        return 'shadow-[0_0_10px_rgba(147,51,234,0.5)]';
      case 'domain':
        return 'shadow-[0_0_10px_rgba(249,115,22,0.5)]';
      default:
        return '';
    }
  };
  
  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium text-white">{trait.name}</h4>
            <p className="text-xs text-gray-400">{trait.description}</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-white">
              {trait.value}/{trait.maxValue}
            </span>
            <div className={`text-xs px-2 py-1 rounded-full inline-block ml-2 ${getCategoryColor(trait.category)} bg-opacity-20 text-white`}>
              {trait.category}
            </div>
          </div>
        </div>
      )}
      
      <div className="relative">
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${getCategoryColor(trait.category)} ${getCategoryGlow(trait.category)} transition-all duration-700 ease-out rounded-full`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {/* Percentage indicator */}
        <div 
          className="absolute top-0 h-full flex items-center transition-all duration-700 ease-out"
          style={{ left: `${Math.max(percentage - 5, 0)}%` }}
        >
          <div className={`text-xs font-bold text-white bg-gray-800 px-2 py-1 rounded shadow-lg border ${getCategoryColor(trait.category)} border-opacity-50`}>
            {Math.round(percentage)}%
          </div>
        </div>
      </div>
    </div>
  );
};
