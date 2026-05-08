export interface RewardTier {
  tier: string;
  name: string;
  pointsRequired: number;
  eVoucher: string;
  physicalReward: string;
  badge: string;
  topPercentage?: string;
}

export interface Task {
  id: string;
  month: string;
  taskType: 'Must Do' | 'Booster';
  category: string;
  description: string;
  pointsFixed: number;
  pointsIncentive?: number;
  minParticipants?: number;
  maxParticipants?: number;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'submitted' | 'verified' | 'rejected';
  submissionDate?: string;
  pointsEarned?: number;
}

export interface ReelPerformance {
  reelId: string;
  title: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  pointsEarned: number;
  featured?: boolean;
}

export interface EventAttendance {
  eventId: string;
  eventName: string;
  date: string;
  participants: number;
  verified: boolean;
  pointsEarned: number;
}

export const rewardTiers: RewardTier[] = [
  {
    tier: "Bronze",
    name: "The Explorer",
    pointsRequired: 600,
    eVoucher: "₹500",
    physicalReward: "Premium Diary",
    badge: "Bronze Badge",
  },
  {
    tier: "Silver",
    name: "The Navigator",
    pointsRequired: 1200,
    eVoucher: "₹500",
    physicalReward: "Sling Bag",
    badge: "Silver Badge",
  },
  {
    tier: "Gold",
    name: "The Architect",
    pointsRequired: 1800,
    eVoucher: "₹1000",
    physicalReward: "Matt Black Bottle",
    badge: "Gold Badge",
  },
  {
    tier: "Sapphire",
    name: "The Visionary",
    pointsRequired: 2400,
    eVoucher: "₹1000",
    physicalReward: "Varsity Jacket",
    badge: "Sapphire Badge",
  },
  {
    tier: "Platinum",
    name: "The Titan",
    pointsRequired: 3000,
    eVoucher: "₹1000",
    physicalReward: "Laptop Bag",
    badge: "Platinum Badge",
  },
  {
    tier: "Diamond",
    name: "The Oracle",
    pointsRequired: 3600,
    eVoucher: "₹5000",
    physicalReward: "Pixel Buds 2a",
    badge: "Diamond Badge",
    topPercentage: "Top 50",
  },
  {
    tier: "Celestial",
    name: "The Catalyst",
    pointsRequired: 4200,
    eVoucher: "₹5000",
    physicalReward: "Pixel Phone 10a",
    badge: "Celestial Badge",
    topPercentage: "Top 10",
  },
];

export const gsaTasks: Task[] = [
  {
    id: "task-001",
    month: "April",
    taskType: "Must Do",
    category: "Product Trials",
    description: "Conduct product trial sessions with 10-30 participants",
    pointsFixed: 0,
    pointsIncentive: 10,
    minParticipants: 10,
    maxParticipants: 30,
    dueDate: "2026-04-30",
    status: "pending",
  },
  {
    id: "task-002",
    month: "April",
    taskType: "Must Do",
    category: "Content Creation",
    description: "Create 1 authenticated Reel + 1 LinkedIn Post",
    pointsFixed: 100,
    pointsIncentive: 100,
    dueDate: "2026-04-30",
    status: "pending",
  },
  {
    id: "task-003",
    month: "April",
    taskType: "Must Do",
    category: "Monthly Highlight",
    description: "Create 1 authenticated post + 1 LinkedIn post",
    pointsFixed: 100,
    dueDate: "2026-04-30",
    status: "pending",
  },
  {
    id: "task-004",
    month: "April",
    taskType: "Booster",
    category: "Campus Interviews",
    description: "Conduct 5-10 genuine campus interviews",
    pointsFixed: 0,
    pointsIncentive: 10,
    minParticipants: 5,
    maxParticipants: 10,
    dueDate: "2026-04-30",
    status: "pending",
  },
  {
    id: "task-005",
    month: "April",
    taskType: "Booster",
    category: "Product Understanding",
    description: "Conduct product understanding sessions with 10-25 participants",
    pointsFixed: 0,
    pointsIncentive: 2,
    minParticipants: 10,
    maxParticipants: 25,
    dueDate: "2026-04-30",
    status: "pending",
  },
];

export const sampleReels: ReelPerformance[] = [
  {
    reelId: "reel-001",
    title: "GSA 2026 Journey Begins 🚀",
    views: 1463,
    likes: 55,
    comments: 7,
    shares: 4,
    date: "2026-04-18",
    pointsEarned: 125,
    featured: false,
  },
  {
    reelId: "reel-002",
    title: "Gemini AI Prompt Engineering Hack",
    views: 1367,
    likes: 33,
    comments: 3,
    shares: 0,
    date: "2025-12-24",
    pointsEarned: 75,
    featured: false,
  },
];

export const gsaMetrics = {
  currentPoints: 25,
  currentTier: "The Explorer",
  nextTierPoints: 600,
  pointsToNextTier: 575,
  tasksCompleted: 0,
  tasksInProgress: 1,
  totalTasks: 5,
  reelsCreated: 0,
  eventsHosted: 0,
  totalParticipants: 0,
};

export const monthlyTaskTimeline = [
  { month: "April", startDate: "2026-04-01", endDate: "2026-04-30", status: "current" },
  { month: "May", startDate: "2026-05-01", endDate: "2026-05-31", status: "upcoming" },
  { month: "June", startDate: "2026-06-01", endDate: "2026-06-30", status: "upcoming" },
  { month: "July", startDate: "2026-07-01", endDate: "2026-07-31", status: "upcoming" },
  { month: "August", startDate: "2026-08-01", endDate: "2026-08-31", status: "upcoming" },
  { month: "September", startDate: "2026-09-01", endDate: "2026-09-30", status: "upcoming" },
];

export const specialAchievements = [
  {
    id: "achievement-001",
    title: "Content Creation Spotlight",
    description: "Reels with 1M+ views earn a chance to be featured on the official Google India Page",
    icon: "Sparkles",
  },
  {
    id: "achievement-002",
    title: "Monthly Highlights Recognition",
    description: "Ambassadors with Top Stories each month may be featured on official Google social channels",
    icon: "Star",
  },
  {
    id: "achievement-003",
    title: "Product Trial Monthly Winner",
    description: "The top entry per month for product trials wins a Pixel 10a",
    icon: "Trophy",
  },
];
