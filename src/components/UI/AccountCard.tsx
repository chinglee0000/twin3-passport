import React, { useState } from 'react';
import { AccountCardProps } from '../../types';
import { Link, Unlink, RefreshCw, ExternalLink } from 'lucide-react';

export const AccountCard: React.FC<AccountCardProps> = ({
  account,
  onConnect,
  onDisconnect,
  onSync
}) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [username, setUsername] = useState('');
  
  const handleConnect = async () => {
    if (!username.trim()) return;
    
    setIsConnecting(true);
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 1500));
    onConnect?.(account.id);
    setIsConnecting(false);
    setUsername('');
  };
  
  const handleSync = async () => {
    setIsSyncing(true);
    // Simulate sync process
    await new Promise(resolve => setTimeout(resolve, 2000));
    onSync?.(account.id);
    setIsSyncing(false);
  };
  
  const formatLastSync = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };
  
  return (
    <div className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
      account.isConnected 
        ? 'border-green-500 bg-green-500 bg-opacity-10' 
        : 'border-gray-600 bg-gray-800'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{account.icon}</div>
          <div>
            <h3 className="font-semibold text-white text-sm">{account.platform}</h3>
            {account.isConnected ? (
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">@{account.username}</span>
                {account.contributionScore && (
                  <span className="text-xs bg-green-500 bg-opacity-20 text-green-400 px-2 py-1 rounded-full">
                    Score: {account.contributionScore}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs text-gray-500">Not connected</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          {account.isConnected ? (
            <Link className="w-5 h-5 text-green-400" />
          ) : (
            <Unlink className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
      
      {account.isConnected ? (
        <div className="space-y-3">
          {account.lastSync && (
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Last sync: {formatLastSync(account.lastSync)}</span>
              <button
                onClick={handleSync}
                disabled={isSyncing}
                className="flex items-center space-x-1 px-2 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-md transition-colors"
              >
                <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : 'Sync'}</span>
              </button>
            </div>
          )}
          
          <div className="flex space-x-2">
            <button
              onClick={() => onDisconnect?.(account.id)}
              className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition-colors"
            >
              Disconnect
            </button>
            <button className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded-md transition-colors flex items-center space-x-1">
              <ExternalLink className="w-3 h-3" />
              <span>View</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-xs placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleConnect}
            disabled={!username.trim() || isConnecting}
            className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white text-xs rounded-md transition-colors flex items-center justify-center space-x-1"
          >
            {isConnecting ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <Link className="w-3 h-3" />
                <span>Connect</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
