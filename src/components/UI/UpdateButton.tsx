import React from 'react';
import { UpdateButtonProps } from '../../types';
import { RefreshCw, Clock } from 'lucide-react';

export const UpdateButton: React.FC<UpdateButtonProps> = ({
  isUpdating,
  lastUpdated,
  onUpdate,
  variant = 'primary'
}) => {
  const formatLastUpdated = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]';
      case 'secondary':
        return 'bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600';
      default:
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]';
    }
  };
  
  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={onUpdate}
        disabled={isUpdating}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all duration-300 
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center space-x-2 min-w-[140px] justify-center
          ${getVariantClasses()}
        `}
      >
        <RefreshCw 
          className={`w-4 h-4 ${isUpdating ? 'animate-spin' : ''}`} 
        />
        <span>
          {isUpdating ? 'Updating...' : 'Update Scores'}
        </span>
      </button>
      
      {lastUpdated && (
        <div className="flex items-center space-x-1 text-xs text-gray-400">
          <Clock className="w-3 h-3" />
          <span>Last updated {formatLastUpdated(lastUpdated)}</span>
        </div>
      )}
    </div>
  );
};
