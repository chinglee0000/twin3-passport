import React, { useState } from 'react';
import { useDashboardData } from '../../hooks/useDashboardData';
import {
  WelcomeSection,
  ScoreSection,
  ProfessionSelector,
  TaskSection,
  ConnectedAccounts,
  RewardsLog
} from './';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    data,
    isLoading,
    isUpdating,
    updateScores,
    completeTask,
    connectAccount,
    refreshData
  } = useDashboardData();
  
  const [selectedProfession, setSelectedProfession] = useState<string | undefined>(
    data?.user.currentProfession
  );
  
  const handleProfessionChange = (professionId: string) => {
    setSelectedProfession(professionId);
    // In a real app, this would update the user's profession in the backend
    console.log('Profession changed to:', professionId);
  };
  
  const handleTaskComplete = (taskId: string) => {
    completeTask(taskId);
  };
  
  const handleAccountConnect = (accountId: string, username: string) => {
    connectAccount(accountId, username);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Loading Dashboard</h2>
          <p className="text-gray-400">Fetching your Twin3 Passport data...</p>
        </div>
      </div>
    );
  }
  
  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Error Loading Data</h2>
          <p className="text-gray-400 mb-4">Unable to load your dashboard data</p>
          <button
            onClick={refreshData}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry</span>
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <WelcomeSection user={data.user} />
        </div>
        
        {/* Score Section */}
        <div className="mb-8">
          <ScoreSection
            twinMatrixScore={data.twinMatrixScore}
            humanityTrustScore={data.humanityTrustScore}
            professionTraits={data.professionTraits}
            isUpdating={isUpdating}
            onUpdate={updateScores}
          />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Profession Selector */}
            <ProfessionSelector
              currentProfession={selectedProfession}
              onProfessionChange={handleProfessionChange}
            />
            
            {/* Task Section */}
            <TaskSection
              tasks={data.tasks}
              onCompleteTask={handleTaskComplete}
              onStartTask={(taskId) => {
                // In a real app, this would start the task
                console.log('Starting task:', taskId);
              }}
            />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Connected Accounts */}
            <ConnectedAccounts
              accounts={data.connectedAccounts}
              onConnect={handleAccountConnect}
              onDisconnect={(accountId) => {
                // In a real app, this would disconnect the account
                console.log('Disconnecting account:', accountId);
              }}
              onSync={(accountId) => {
                // In a real app, this would sync the account
                console.log('Syncing account:', accountId);
              }}
            />
            
            {/* Rewards Log */}
            <RewardsLog rewardLog={data.rewardLog} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Twin3 Passport Dashboard - Your journey to AI-Human collaboration
          </p>
          <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-600">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};
