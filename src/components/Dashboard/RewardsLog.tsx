import React, { useState } from 'react';
import { RewardLogEntry } from '../../types';
import { Gift, TrendingUp, Filter, Calendar } from 'lucide-react';

interface RewardsLogProps {
  rewardLog: RewardLogEntry[];
}

export const RewardsLog: React.FC<RewardsLogProps> = ({ rewardLog }) => {
  const [filter, setFilter] = useState<'all' | 'twin_matrix' | 'humanity_trust' | 'profession_trait'>('all');
  const [timeFilter, setTimeFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  
  const filteredRewards = rewardLog.filter(reward => {
    const typeMatch = filter === 'all' || reward.type === filter;
    
    let timeMatch = true;
    if (timeFilter !== 'all') {
      const now = new Date();
      const rewardDate = new Date(reward.timestamp);
      
      switch (timeFilter) {
        case 'today':
          timeMatch = rewardDate.toDateString() === now.toDateString();
          break;
        case 'week':
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          timeMatch = rewardDate >= weekAgo;
          break;
        case 'month':
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          timeMatch = rewardDate >= monthAgo;
          break;
      }
    }
    
    return typeMatch && timeMatch;
  });
  
  const getRewardStats = () => {
    const twinMatrix = rewardLog.filter(r => r.type === 'twin_matrix').reduce((sum, r) => sum + r.amount, 0);
    const humanityTrust = rewardLog.filter(r => r.type === 'humanity_trust').reduce((sum, r) => sum + r.amount, 0);
    const professionTrait = rewardLog.filter(r => r.type === 'profession_trait').reduce((sum, r) => sum + r.amount, 0);
    
    return { twinMatrix, humanityTrust, professionTrait };
  };
  
  const stats = getRewardStats();
  
  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'twin_matrix':
        return '🧠';
      case 'humanity_trust':
        return '❤️';
      case 'profession_trait':
        return '💼';
      default:
        return '🎁';
    }
  };
  
  const getRewardColor = (type: string) => {
    switch (type) {
      case 'twin_matrix':
        return 'text-blue-400 bg-blue-500 bg-opacity-10 border-blue-500 border-opacity-30';
      case 'humanity_trust':
        return 'text-orange-400 bg-orange-500 bg-opacity-10 border-orange-500 border-opacity-30';
      case 'profession_trait':
        return 'text-green-400 bg-green-500 bg-opacity-10 border-green-500 border-opacity-30';
      default:
        return 'text-gray-400 bg-gray-500 bg-opacity-10 border-gray-500 border-opacity-30';
    }
  };
  
  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };
  
  const getFilterButtonClass = (currentFilter: string, buttonFilter: string) => {
    return `px-3 py-1 rounded-full text-xs font-medium transition-colors ${
      currentFilter === buttonFilter
        ? 'bg-purple-600 text-white'
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
    }`;
  };
  
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg">
            <Gift className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Rewards Log</h2>
            <p className="text-gray-400 text-sm">Track your earned rewards</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 text-sm font-medium">
            {filteredRewards.reduce((sum, r) => sum + r.amount, 0)} total points
          </span>
        </div>
      </div>
      
      {/* Reward Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.twinMatrix}</div>
          <div className="text-xs text-blue-300">Twin Matrix</div>
        </div>
        <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.humanityTrust}</div>
          <div className="text-xs text-orange-300">Humanity Trust</div>
        </div>
        <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-400">{stats.professionTrait}</div>
          <div className="text-xs text-green-300">Profession Traits</div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Type:</span>
          <div className="flex space-x-2">
            {['all', 'twin_matrix', 'humanity_trust', 'profession_trait'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={getFilterButtonClass(filter, type)}
              >
                {type.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Time:</span>
          <div className="flex space-x-2">
            {['all', 'today', 'week', 'month'].map((time) => (
              <button
                key={time}
                onClick={() => setTimeFilter(time as any)}
                className={getFilterButtonClass(timeFilter, time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Rewards List */}
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {filteredRewards.length > 0 ? (
          filteredRewards.map((reward) => (
            <div
              key={reward.id}
              className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${getRewardColor(reward.type)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{getRewardIcon(reward.type)}</div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{reward.description}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-400">{reward.source}</span>
                      {reward.trait && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          {reward.trait}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-lg font-bold ${getRewardColor(reward.type).split(' ')[0]}`}>
                    +{reward.amount}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTimestamp(reward.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <Gift className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400">No rewards found</p>
            <p className="text-gray-500 text-sm">Complete tasks to start earning rewards</p>
          </div>
        )}
      </div>
    </div>
  );
};
