import React from 'react';
import { User } from '../../types';
import { Calendar, MapPin } from 'lucide-react';

interface WelcomeSectionProps {
  user: User;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ user }) => {
  const formatJoinDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const getDaysJoined = (joinDate: Date) => {
    const now = new Date();
    const diff = now.getTime() - joinDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };
  
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-xl border border-gray-700 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
            {user.avatar || '👤'}
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              {getGreeting()}, {user.name}! 👋
            </h1>
            <p className="text-gray-400 text-sm mb-2">
              Welcome back to your Twin3 Passport Dashboard
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Joined {formatJoinDate(user.joinDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{getDaysJoined(user.joinDate)} days with us</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="text-xs text-blue-100">Current Role</div>
            <div className="font-semibold">
              {user.currentProfession ? 
                user.currentProfession.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ') : 
                'Select Profession'
              }
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-3 text-center">
          <div className="text-blue-400 text-xs font-medium">Twin Matrix</div>
          <div className="text-white text-lg font-bold">Active</div>
        </div>
        <div className="bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-30 rounded-lg p-3 text-center">
          <div className="text-orange-400 text-xs font-medium">Humanity Trust</div>
          <div className="text-white text-lg font-bold">Growing</div>
        </div>
        <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg p-3 text-center">
          <div className="text-green-400 text-xs font-medium">Profession</div>
          <div className="text-white text-lg font-bold">Developing</div>
        </div>
      </div>
    </div>
  );
};
