import { Themes } from '../types';

export const themes: Themes = {
  blue: {
    primary: 'bg-blue-600',
    secondary: 'bg-blue-500',
    accent: 'text-blue-400',
    gradient: 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500',
    neonGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)] border-blue-400'
  },
  orange: {
    primary: 'bg-orange-600',
    secondary: 'bg-orange-500',
    accent: 'text-orange-400',
    gradient: 'bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500',
    neonGlow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)] border-orange-400'
  },
  green: {
    primary: 'bg-green-600',
    secondary: 'bg-green-500',
    accent: 'text-green-400',
    gradient: 'bg-gradient-to-r from-green-600 via-green-500 to-emerald-500',
    neonGlow: 'shadow-[0_0_20px_rgba(34,197,94,0.5)] border-green-400'
  }
};

export const professionOptions = [
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    description: 'Build and maintain software systems',
    icon: '💻',
    traits: ['Problem Solving', 'Code Quality', 'System Design', 'Collaboration']
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    description: 'Extract insights from data',
    icon: '📊',
    traits: ['Statistical Analysis', 'Machine Learning', 'Data Visualization', 'Research']
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    description: 'Guide product development and strategy',
    icon: '🎯',
    traits: ['Strategic Thinking', 'User Empathy', 'Communication', 'Decision Making']
  },
  {
    id: 'designer',
    name: 'UX/UI Designer',
    description: 'Create user-centered design solutions',
    icon: '🎨',
    traits: ['Visual Design', 'User Research', 'Prototyping', 'Design Systems']
  },
  {
    id: 'marketing',
    name: 'Marketing Specialist',
    description: 'Drive growth and brand awareness',
    icon: '📈',
    traits: ['Content Creation', 'Analytics', 'Campaign Management', 'Brand Strategy']
  }
];

export const connectedAccountsData = [
  {
    id: 'github',
    platform: 'GitHub',
    username: '',
    isConnected: false,
    icon: '🐙',
    color: 'text-gray-800'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: '',
    isConnected: false,
    icon: '💼',
    color: 'text-blue-600'
  },
  {
    id: 'twitter',
    platform: 'Twitter',
    username: '',
    isConnected: false,
    icon: '🐦',
    color: 'text-blue-400'
  },
  {
    id: 'stackoverflow',
    platform: 'Stack Overflow',
    username: '',
    isConnected: false,
    icon: '📚',
    color: 'text-orange-500'
  },
  {
    id: 'medium',
    platform: 'Medium',
    username: '',
    isConnected: false,
    icon: '✍️',
    color: 'text-green-600'
  }
];
