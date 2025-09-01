import React from 'react';
import { TaskCardProps } from '../../types';
import { Clock, CheckCircle, Play, Trophy } from 'lucide-react';

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onComplete,
  onStart
}) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in_progress':
        return <Play className="w-5 h-5 text-blue-400" />;
      case 'expired':
        return <Clock className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };
  
  const getStatusColor = () => {
    switch (task.status) {
      case 'completed':
        return 'border-green-500 bg-green-500 bg-opacity-10';
      case 'in_progress':
        return 'border-blue-500 bg-blue-500 bg-opacity-10';
      case 'expired':
        return 'border-red-500 bg-red-500 bg-opacity-10';
      default:
        return 'border-gray-600 bg-gray-800';
    }
  };
  
  const getTypeColor = () => {
    switch (task.type) {
      case 'daily':
        return 'bg-blue-500 text-blue-100';
      case 'weekly':
        return 'bg-purple-500 text-purple-100';
      case 'achievement':
        return 'bg-yellow-500 text-yellow-100';
      case 'profession':
        return 'bg-green-500 text-green-100';
      default:
        return 'bg-gray-500 text-gray-100';
    }
  };
  
  const getRewardColor = () => {
    switch (task.reward.type) {
      case 'twin_matrix':
        return 'text-blue-400';
      case 'humanity_trust':
        return 'text-orange-400';
      case 'profession_trait':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };
  
  const progressPercentage = (task.progress / task.maxProgress) * 100;
  const isExpired = task.deadline && new Date() > task.deadline;
  const canComplete = task.status === 'in_progress' && task.progress >= task.maxProgress;
  const canStart = task.status === 'pending';
  
  const formatDeadline = (deadline: Date) => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 0) return 'Expired';
    if (hours < 24) return `${hours}h left`;
    const days = Math.floor(hours / 24);
    return `${days}d left`;
  };
  
  return (
    <div className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${getStatusColor()}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <div>
            <h3 className="font-semibold text-white text-sm">{task.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{task.description}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end space-y-1">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor()}`}>
            {task.type}
          </span>
          {task.deadline && (
            <span className={`text-xs ${isExpired ? 'text-red-400' : 'text-gray-400'}`}>
              {formatDeadline(task.deadline)}
            </span>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>{task.progress}/{task.maxProgress}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              task.status === 'completed' ? 'bg-green-500' : 
              task.status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-500'
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      
      {/* Reward and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Trophy className={`w-4 h-4 ${getRewardColor()}`} />
          <span className={`text-xs font-medium ${getRewardColor()}`}>
            +{task.reward.amount} {task.reward.trait || task.reward.type.replace('_', ' ')}
          </span>
        </div>
        
        <div className="flex space-x-2">
          {canStart && onStart && (
            <button
              onClick={() => onStart(task.id)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition-colors"
            >
              Start
            </button>
          )}
          {canComplete && onComplete && (
            <button
              onClick={() => onComplete(task.id)}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-md transition-colors"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
