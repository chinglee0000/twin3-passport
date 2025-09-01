import { useState, useEffect } from 'react';
import { DashboardData, Task, ConnectedAccount, RewardLogEntry } from '../types';
import { connectedAccountsData } from '../constants/themes';

// Mock data generator
const generateMockData = (): DashboardData => {
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  return {
    user: {
      id: '1',
      name: 'Alex Chen',
      avatar: '👨‍💻',
      email: 'alex.chen@example.com',
      joinDate: new Date('2024-01-15'),
      currentProfession: 'software-engineer'
    },
    twinMatrixScore: {
      overall: 78,
      creativity: 85,
      logic: 92,
      empathy: 67,
      resilience: 74,
      lastUpdated: lastWeek
    },
    humanityTrustScore: {
      overall: 82,
      authenticity: 88,
      reliability: 79,
      transparency: 85,
      ethics: 76,
      lastUpdated: lastWeek
    },
    professionTraits: {
      profession: 'Software Engineer',
      overallProgress: 73,
      lastUpdated: lastWeek,
      traits: [
        {
          name: 'Problem Solving',
          value: 85,
          maxValue: 100,
          description: 'Ability to analyze and solve complex problems',
          category: 'technical'
        },
        {
          name: 'Code Quality',
          value: 78,
          maxValue: 100,
          description: 'Writing clean, maintainable, and efficient code',
          category: 'technical'
        },
        {
          name: 'System Design',
          value: 65,
          maxValue: 100,
          description: 'Designing scalable and robust systems',
          category: 'technical'
        },
        {
          name: 'Collaboration',
          value: 72,
          maxValue: 100,
          description: 'Working effectively with team members',
          category: 'soft'
        }
      ]
    },
    tasks: [
      {
        id: '1',
        title: 'Complete Code Review',
        description: 'Review 3 pull requests from team members',
        type: 'daily',
        status: 'pending',
        progress: 1,
        maxProgress: 3,
        reward: {
          type: 'profession_trait',
          amount: 5,
          trait: 'Collaboration'
        },
        deadline: new Date(now.getTime() + 24 * 60 * 60 * 1000),
        createdAt: now
      },
      {
        id: '2',
        title: 'Solve Algorithm Challenge',
        description: 'Complete a medium-level algorithm problem',
        type: 'weekly',
        status: 'in_progress',
        progress: 50,
        maxProgress: 100,
        reward: {
          type: 'twin_matrix',
          amount: 10
        },
        deadline: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000),
        createdAt: lastWeek
      },
      {
        id: '3',
        title: 'Write Technical Blog Post',
        description: 'Share knowledge with the community',
        type: 'achievement',
        status: 'pending',
        progress: 0,
        maxProgress: 100,
        reward: {
          type: 'humanity_trust',
          amount: 15
        },
        createdAt: now
      }
    ],
    connectedAccounts: connectedAccountsData.map(account => ({
      ...account,
      username: account.id === 'github' ? 'alexchen' : '',
      isConnected: account.id === 'github',
      lastSync: account.id === 'github' ? lastWeek : undefined,
      contributionScore: account.id === 'github' ? 85 : undefined
    })),
    rewardLog: [
      {
        id: '1',
        type: 'profession_trait',
        amount: 5,
        source: 'Task Completion',
        description: 'Completed daily code review task',
        trait: 'Collaboration',
        timestamp: lastWeek
      },
      {
        id: '2',
        type: 'twin_matrix',
        amount: 8,
        source: 'GitHub Activity',
        description: 'Contributed to open source project',
        timestamp: new Date(lastWeek.getTime() - 24 * 60 * 60 * 1000)
      },
      {
        id: '3',
        type: 'humanity_trust',
        amount: 12,
        source: 'Community Help',
        description: 'Helped junior developer on Stack Overflow',
        timestamp: new Date(lastWeek.getTime() - 2 * 24 * 60 * 60 * 1000)
      }
    ]
  };
};

export const useDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setData(generateMockData());
    setIsLoading(false);
  };

  const updateScores = async () => {
    if (!data) return;
    
    setIsUpdating(true);
    // Simulate score update
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const updatedData = { ...data };
    const now = new Date();
    
    // Simulate small score improvements
    updatedData.twinMatrixScore = {
      ...updatedData.twinMatrixScore,
      overall: Math.min(100, updatedData.twinMatrixScore.overall + Math.floor(Math.random() * 3)),
      lastUpdated: now
    };
    
    updatedData.humanityTrustScore = {
      ...updatedData.humanityTrustScore,
      overall: Math.min(100, updatedData.humanityTrustScore.overall + Math.floor(Math.random() * 3)),
      lastUpdated: now
    };
    
    setData(updatedData);
    setIsUpdating(false);
  };

  const completeTask = (taskId: string) => {
    if (!data) return;
    
    const updatedTasks = data.tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: 'completed' as const, progress: task.maxProgress, completedAt: new Date() }
        : task
    );
    
    setData({ ...data, tasks: updatedTasks });
  };

  const connectAccount = (accountId: string, username: string) => {
    if (!data) return;
    
    const updatedAccounts = data.connectedAccounts.map(account =>
      account.id === accountId
        ? { ...account, isConnected: true, username, lastSync: new Date() }
        : account
    );
    
    setData({ ...data, connectedAccounts: updatedAccounts });
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
    isLoading,
    isUpdating,
    updateScores,
    completeTask,
    connectAccount,
    refreshData: loadData
  };
};
