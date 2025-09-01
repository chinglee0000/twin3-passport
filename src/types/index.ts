// Twin3 Passport Dashboard Types

export interface User {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  joinDate: Date;
  currentProfession?: string;
}

export interface TwinMatrixScore {
  overall: number;
  creativity: number;
  logic: number;
  empathy: number;
  resilience: number;
  lastUpdated: Date;
}

export interface HumanityTrustScore {
  overall: number;
  authenticity: number;
  reliability: number;
  transparency: number;
  ethics: number;
  lastUpdated: Date;
}

export interface ProfessionTrait {
  name: string;
  value: number;
  maxValue: number;
  description: string;
  category: 'technical' | 'soft' | 'leadership' | 'domain';
}

export interface ProfessionTraits {
  profession: string;
  traits: ProfessionTrait[];
  overallProgress: number;
  lastUpdated: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'achievement' | 'profession';
  status: 'pending' | 'in_progress' | 'completed' | 'expired';
  progress: number;
  maxProgress: number;
  reward: {
    type: 'twin_matrix' | 'humanity_trust' | 'profession_trait';
    amount: number;
    trait?: string;
  };
  deadline?: Date;
  createdAt: Date;
  completedAt?: Date;
}

export interface ConnectedAccount {
  id: string;
  platform: string;
  username: string;
  avatar?: string;
  isConnected: boolean;
  lastSync?: Date;
  contributionScore?: number;
  icon: string;
  color: string;
}

export interface RewardLogEntry {
  id: string;
  type: 'twin_matrix' | 'humanity_trust' | 'profession_trait';
  amount: number;
  source: string;
  description: string;
  trait?: string;
  timestamp: Date;
}

export interface DashboardData {
  user: User;
  twinMatrixScore: TwinMatrixScore;
  humanityTrustScore: HumanityTrustScore;
  professionTraits: ProfessionTraits;
  tasks: Task[];
  connectedAccounts: ConnectedAccount[];
  rewardLog: RewardLogEntry[];
}

export interface ProfessionOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  traits: string[];
}

// Component Props Types
export interface CircularProgressProps {
  value: number;
  maxValue?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'orange' | 'green';
  showValue?: boolean;
  label?: string;
}

export interface TraitProgressBarProps {
  trait: ProfessionTrait;
  showLabel?: boolean;
}

export interface TaskCardProps {
  task: Task;
  onComplete?: (taskId: string) => void;
  onStart?: (taskId: string) => void;
}

export interface AccountCardProps {
  account: ConnectedAccount;
  onConnect?: (accountId: string) => void;
  onDisconnect?: (accountId: string) => void;
  onSync?: (accountId: string) => void;
}

export interface UpdateButtonProps {
  isUpdating: boolean;
  lastUpdated?: Date;
  onUpdate: () => void;
  variant?: 'primary' | 'secondary';
}

// Theme Types
export type ThemeColor = 'blue' | 'orange' | 'green';

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  neonGlow: string;
}

export type Themes = Record<ThemeColor, ThemeConfig>;
