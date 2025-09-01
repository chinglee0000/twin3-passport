import React, { useState } from 'react';
import { Task } from '../../types';
import { TaskCard } from '../UI';
import { CheckSquare, Filter, Calendar, Trophy } from 'lucide-react';

interface TaskSectionProps {
  tasks: Task[];
  onCompleteTask: (taskId: string) => void;
  onStartTask?: (taskId: string) => void;
}

export const TaskSection: React.FC<TaskSectionProps> = ({
  tasks,
  onCompleteTask,
  onStartTask
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'in_progress' | 'completed'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'daily' | 'weekly' | 'achievement' | 'profession'>('all');
  
  const filteredTasks = tasks.filter(task => {
    const statusMatch = filter === 'all' || task.status === filter;
    const typeMatch = typeFilter === 'all' || task.type === typeFilter;
    return statusMatch && typeMatch;
  });
  
  const getTaskStats = () => {
    const pending = tasks.filter(t => t.status === 'pending').length;
    const inProgress = tasks.filter(t => t.status === 'in_progress').length;
    const completed = tasks.filter(t => t.status === 'completed').length;
    const total = tasks.length;
    
    return { pending, inProgress, completed, total };
  };
  
  const stats = getTaskStats();
  
  const getFilterButtonClass = (currentFilter: string, buttonFilter: string) => {
    return `px-3 py-1 rounded-full text-xs font-medium transition-colors ${
      currentFilter === buttonFilter
        ? 'bg-blue-600 text-white'
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
    }`;
  };
  
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg">
            <CheckSquare className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Task Management</h2>
            <p className="text-gray-400 text-sm">Complete tasks to earn rewards</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm">Filters</span>
        </div>
      </div>
      
      {/* Task Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>
        <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
          <div className="text-xs text-yellow-300">Pending</div>
        </div>
        <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.inProgress}</div>
          <div className="text-xs text-blue-300">In Progress</div>
        </div>
        <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
          <div className="text-xs text-green-300">Completed</div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Status:</span>
          <div className="flex space-x-2">
            {['all', 'pending', 'in_progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={getFilterButtonClass(filter, status)}
              >
                {status.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Type:</span>
          <div className="flex space-x-2">
            {['all', 'daily', 'weekly', 'achievement', 'profession'].map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type as any)}
                className={getFilterButtonClass(typeFilter, type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Task List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onCompleteTask}
              onStart={onStartTask}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400">No tasks found with current filters</p>
            <p className="text-gray-500 text-sm">Try adjusting your filter settings</p>
          </div>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Trophy className="w-4 h-4" />
            <span>Complete tasks to earn rewards and improve your scores</span>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
            View All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};
