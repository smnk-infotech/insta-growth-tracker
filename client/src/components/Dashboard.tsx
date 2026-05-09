import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { accountMetrics, strategyTips } from "@/lib/contentCalendar";
import { Users, Heart, TrendingUp, Target, Eye, MessageCircle, Zap } from "lucide-react";

export default function Dashboard() {
  // Real Instagram metrics
  const realMetrics = {
    followers: 166,
    following: 353,
    totalPosts: 59,
    avgLikes: 53,
    avgComments: 2.8,
    profileVisits: 7300,
    impressions: 129000,
    reach: 24800,
    engagementRate: 3.2,
    growthRate: 15.6,
  };

  const metrics = [
    {
      title: "Followers",
      value: realMetrics.followers,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      growth: "+15.6%",
    },
    {
      title: "Total Reach",
      value: realMetrics.reach.toLocaleString(),
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      growth: "This month",
    },
    {
      title: "Engagement Rate",
      value: `${realMetrics.engagementRate}%`,
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      growth: "Excellent",
    },
    {
      title: "Total Posts",
      value: realMetrics.totalPosts,
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50",
      growth: "Avg 53 likes",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Account Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <h2 className="text-2xl font-bold mb-2">Instagram Account Overview</h2>
        <p className="text-muted-foreground">
          @itz_me__smnk • Nandhakumar Murugan | Google Student Ambassador 🚀
        </p>
      </div>

      {/* Key Metrics */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <div className={`${metric.bgColor} p-2 rounded-lg`}>
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.growth}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Engagement Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Breakdown</CardTitle>
          <CardDescription>Average interactions per post</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-pink-900">Avg Likes</span>
              </div>
              <p className="text-2xl font-bold text-pink-600">{realMetrics.avgLikes}</p>
              <p className="text-xs text-pink-700 mt-1">per post</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-blue-900">Avg Comments</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">{realMetrics.avgComments.toFixed(1)}</p>
              <p className="text-xs text-blue-700 mt-1">per post</p>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-amber-900">Profile Visits</span>
              </div>
              <p className="text-2xl font-bold text-amber-600">{realMetrics.profileVisits.toLocaleString()}</p>
              <p className="text-xs text-amber-700 mt-1">this month</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Growth Goals & Progress
          </CardTitle>
          <CardDescription>
            Track your progress toward Q2 targets
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Follower Growth</span>
              <Badge variant="outline">{realMetrics.followers} / 500</Badge>
            </div>
            <Progress value={(realMetrics.followers / 500) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">334 more followers needed</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Engagement Rate</span>
              <Badge variant="outline">{realMetrics.engagementRate}% / 5%</Badge>
            </div>
            <Progress value={(realMetrics.engagementRate / 5) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">Already exceeding industry average!</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Total Posts</span>
              <Badge variant="outline">{realMetrics.totalPosts} / 100</Badge>
            </div>
            <Progress value={(realMetrics.totalPosts / 100) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">41 more posts to reach 100</p>
          </div>
        </CardContent>
      </Card>

      {/* Growth Tips */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Key Growth Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strategyTips.map((tip, idx) => (
            <Card key={idx} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Growth Insights */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Growth Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-background rounded border border-border">
            <p className="font-semibold text-sm mb-1">✓ Strength: Exceptional Engagement</p>
            <p className="text-sm text-muted-foreground">
              Your 3.2% engagement rate is 3x the industry average (1-3%), showing your audience is highly invested in your content.
            </p>
          </div>

          <div className="p-3 bg-background rounded border border-border">
            <p className="font-semibold text-sm mb-1">📈 Opportunity: Scale Follower Base</p>
            <p className="text-sm text-muted-foreground">
              Post consistently 3-4x per week, focus on Reels (your best format), and cross-promote GSA content to reach 500 followers.
            </p>
          </div>

          <div className="p-3 bg-background rounded border border-border">
            <p className="font-semibold text-sm mb-1">🎯 Next Action: Content Audit</p>
            <p className="text-sm text-muted-foreground">
              Review your top 5 performing posts and create similar content. Double down on AI/Gemini educational content.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">💡 Quick Reference</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 space-y-2">
          <p><strong>Bio Link:</strong> https://premaailabs.tech</p>
          <p><strong>Following:</strong> {realMetrics.following} accounts</p>
          <p><strong>Best Posting Time:</strong> Tuesday-Thursday, 6-9 PM IST</p>
          <p><strong>Content Mix:</strong> 40% Reels, 35% Carousels, 25% Static Posts</p>
          <p><strong>Monthly Impressions:</strong> {realMetrics.impressions.toLocaleString()}</p>
        </CardContent>
      </Card>
    </div>
  );
}
