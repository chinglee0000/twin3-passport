import React from 'react';
import { ConnectedAccount } from '../../types';
import { AccountCard } from '../UI';
import { Link2, Shield, Zap } from 'lucide-react';

interface ConnectedAccountsProps {
  accounts: ConnectedAccount[];
  onConnect: (accountId: string, username: string) => void;
  onDisconnect?: (accountId: string) => void;
  onSync?: (accountId: string) => void;
}

export const ConnectedAccounts: React.FC<ConnectedAccountsProps> = ({
  accounts,
  onConnect,
  onDisconnect,
  onSync
}) => {
  const connectedCount = accounts.filter(account => account.isConnected).length;
  const totalScore = accounts
    .filter(account => account.isConnected && account.contributionScore)
    .reduce((sum, account) => sum + (account.contributionScore || 0), 0);
  
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-500 bg-opacity-20 rounded-lg">
            <Link2 className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Connected Accounts</h2>
            <p className="text-gray-400 text-sm">Link your professional profiles</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">{connectedCount}/{accounts.length}</div>
          <div className="text-xs text-gray-400">Connected</div>
        </div>
      </div>
      
      {/* Connection Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-400">{connectedCount}</div>
          <div className="text-xs text-green-300">Connected</div>
        </div>
        <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-400">{totalScore}</div>
          <div className="text-xs text-blue-300">Total Score</div>
        </div>
        <div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-400">
            {Math.round((connectedCount / accounts.length) * 100)}%
          </div>
          <div className="text-xs text-purple-300">Coverage</div>
        </div>
      </div>
      
      {/* Benefits Info */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-10 border border-blue-500 border-opacity-30 p-4 rounded-lg mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="w-5 h-5 text-blue-400" />
          <span className="text-blue-300 font-medium">Connection Benefits</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">Auto score updates</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-gray-300">Verified contributions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Link2 className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">Cross-platform insights</span>
          </div>
        </div>
      </div>
      
      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
            onConnect={(accountId) => {
              // This would typically open a modal or redirect to OAuth
              const username = prompt(`Enter your ${account.platform} username:`);
              if (username) {
                onConnect(accountId, username);
              }
            }}
            onDisconnect={onDisconnect}
            onSync={onSync}
          />
        ))}
      </div>
      
      {/* Connection Progress */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Connection Progress</span>
          <span className="text-sm text-gray-400">{connectedCount}/{accounts.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${(connectedCount / accounts.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Connect more accounts to unlock additional features and improve score accuracy
        </p>
      </div>
    </div>
  );
};
