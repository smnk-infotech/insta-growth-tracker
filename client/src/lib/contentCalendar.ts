export interface ContentItem {
  day: number;
  date: string;
  type: 'REEL' | 'CAROUSEL' | 'STORY';
  title: string;
  description: string;
  completed: boolean;
  metrics?: {
    likes?: number;
    comments?: number;
    shares?: number;
    reach?: number;
  };
}

export interface Week {
  week: number;
  title: string;
  theme: string;
  items: ContentItem[];
}

export const contentCalendar: Week[] = [
  {
    week: 1,
    title: "Establish Authority & Engagement",
    theme: "Foundation",
    items: [
      {
        day: 1,
        date: "Day 1-2",
        type: "REEL",
        title: "My Journey as a Google Student Ambassador: The Real Story",
        description: "Unscripted, raw, talking-head style with on-screen text. Focus on authenticity and relatability.",
        completed: false,
      },
      {
        day: 2,
        date: "Day 3-4",
        type: "CAROUSEL",
        title: "5 Essential AI Tools for Every Student",
        description: "Actionable tips, visually appealing slides, strong hook in the first slide. Encourage saves and shares.",
        completed: false,
      },
      {
        day: 3,
        date: "Day 5-6",
        type: "REEL",
        title: "Gemini AI Prompt Engineering Hack in 30 Seconds",
        description: "Fast edits, clear demonstration, trending audio.",
        completed: false,
      },
      {
        day: 4,
        date: "Day 7",
        type: "STORY",
        title: "Ask Me Anything - AI & GSA Life",
        description: "Host an 'Ask Me Anything' about AI, Google Student Ambassador life, or Cyber Security. Use Q&A sticker.",
        completed: false,
      },
    ],
  },
  {
    week: 2,
    title: "Deep Dive & Community Interaction",
    theme: "Engagement",
    items: [
      {
        day: 5,
        date: "Day 8-9",
        type: "CAROUSEL",
        title: "How AI is Transforming Cyber Security: A Mini Case Study",
        description: "Visually explain a concept or project you've worked on.",
        completed: false,
      },
      {
        day: 6,
        date: "Day 10-11",
        type: "REEL",
        title: "A Day in the Life of an AI Community Builder",
        description: "Behind-the-scenes, showing workshop prep, studying, etc. Use original audio if possible.",
        completed: false,
      },
      {
        day: 7,
        date: "Day 12-13",
        type: "CAROUSEL",
        title: "AI vs. Human Creativity: This or That?",
        description: "Engage audience with a fun, interactive game related to AI concepts.",
        completed: false,
      },
      {
        day: 8,
        date: "Day 14",
        type: "STORY",
        title: "Poll/Quiz - AI News & Concepts",
        description: "Create a poll or quiz related to recent AI news or a concept from your educational carousel.",
        completed: false,
      },
    ],
  },
  {
    week: 3,
    title: "Expand Reach & Personal Brand",
    theme: "Growth",
    items: [
      {
        day: 9,
        date: "Day 15-16",
        type: "REEL",
        title: "Collaboration/Interview Snippet",
        description: "Collaborate with another student or faculty member on a short AI discussion. Fast-paced, engaging dialogue.",
        completed: false,
      },
      {
        day: 10,
        date: "Day 17-18",
        type: "CAROUSEL",
        title: "Top 7 Free AI Learning Resources for Students",
        description: "Valuable, shareable content.",
        completed: false,
      },
      {
        day: 11,
        date: "Day 19-20",
        type: "REEL",
        title: "My Biggest AI Learning Mistake (and what I learned)",
        description: "Relatable personal story with on-screen text.",
        completed: false,
      },
      {
        day: 12,
        date: "Day 21",
        type: "STORY",
        title: "Add Yours Prompt",
        description: "Share Your Favorite AI Tool or What AI Challenge Are You Facing?",
        completed: false,
      },
    ],
  },
  {
    week: 4,
    title: "Reinforce Value & Future Outlook",
    theme: "Momentum",
    items: [
      {
        day: 13,
        date: "Day 22-23",
        type: "CAROUSEL",
        title: "Highlights from Our Latest Google Gemini Workshop",
        description: "Showcase community impact, tag participants/collaborators.",
        completed: false,
      },
      {
        day: 14,
        date: "Day 24-25",
        type: "REEL",
        title: "Why AI Education Matters for Your Future",
        description: "Short, impactful message with strong hook and trending audio.",
        completed: false,
      },
      {
        day: 15,
        date: "Day 26-27",
        type: "CAROUSEL",
        title: "Q&A/FAQ - AI, GSA & Cyber Security",
        description: "Address common questions in a visually engaging carousel.",
        completed: false,
      },
      {
        day: 16,
        date: "Day 28-30",
        type: "REEL",
        title: "What's Next for Our AI Community?",
        description: "Tease future workshops, projects, or initiatives. Use clear CTA to your link in bio.",
        completed: false,
      },
    ],
  },
];

export const accountMetrics = {
  followers: 166,
  following: 367,
  posts: 59,
  engagementRate: 42.77,
  averageReach: 874,
  topPostType: "CAROUSEL",
};

export const strategyTips = [
  {
    title: "Comment-Driven Growth",
    description: "Leave 10-15 genuine comments on niche accounts daily.",
    icon: "MessageCircle",
  },
  {
    title: "Rapid Response",
    description: "Reply to all comments within the first hour of posting.",
    icon: "Zap",
  },
  {
    title: "Interactive Stories",
    description: "Use polls, question stickers, and 'Add Yours' prompts.",
    icon: "Sparkles",
  },
  {
    title: "Original Audio",
    description: "Instagram prioritizes original audio. Mix trending songs with your own.",
    icon: "Music",
  },
];

export const bioOptimization = {
  current: "Nandhakumar Murugan | Google Student Ambassador\nLeading AI Awareness & Google Gemini Workshops Community Builder",
  suggested: "Nandhakumar Murugan | Google Student Ambassador 🚀\nAI & Cyber Security Enthusiast | Community Builder @ KGiSL\nEmpowering students with Google Gemini & AI Workshops.\n[Link to your latest workshop/resource/website]",
  rationale: [
    "Emojis add visual appeal and convey progress/innovation",
    "Keywords highlight your academic specialization",
    "Clear affiliation and role",
    "Direct value proposition",
    "Clear call to action with link",
  ],
};
