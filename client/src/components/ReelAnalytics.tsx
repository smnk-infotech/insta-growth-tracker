import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sampleReels } from "@/lib/gsaProgram";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Eye, Heart, MessageCircle, Share2, Zap } from "lucide-react";

export default function ReelAnalytics() {
  const totalViews = sampleReels.reduce((sum, reel) => sum + reel.views, 0);
  const totalEngagement = sampleReels.reduce(
    (sum, reel) => sum + reel.likes + reel.comments + reel.shares,
    0
  );
  const avgEngagementRate = (
    (totalEngagement / (totalViews || 1)) *
    100
  ).toFixed(2);

  const chartData = sampleReels.map((reel) => ({
    name: reel.title.substring(0, 15),
    views: reel.views,
    likes: reel.likes,
    comments: reel.comments,
    shares: reel.shares,
  }));

  const engagementData = sampleReels.map((reel) => ({
    name: reel.title.substring(0, 15),
    engagement: reel.likes + reel.comments + reel.shares,
    points: reel.pointsEarned,
  }));

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Total Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across {sampleReels.length} reels
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Total Likes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {sampleReels.reduce((sum, r) => sum + r.likes, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Average: {(sampleReels.reduce((sum, r) => sum + r.likes, 0) / sampleReels.length).toFixed(0)} per reel
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Total Comments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {sampleReels.reduce((sum, r) => sum + r.comments, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Engagement rate: {avgEngagementRate}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Points Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {sampleReels.reduce((sum, r) => sum + r.pointsEarned, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              From content creation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Reel Performance Comparison</CardTitle>
          <CardDescription>
            Views, likes, comments, and shares across your reels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#4F46E5" />
              <Bar dataKey="likes" fill="#EC4899" />
              <Bar dataKey="comments" fill="#10B981" />
              <Bar dataKey="shares" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Engagement Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement & Points Trend</CardTitle>
          <CardDescription>
            How engagement translates to GSA points
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="engagement"
                stroke="#4F46E5"
                name="Total Engagement"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="points"
                stroke="#EC4899"
                name="Points Earned"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Individual Reel Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Reels</h2>
        <div className="space-y-4">
          {sampleReels.map((reel) => {
            const engagementRate = ((reel.likes + reel.comments + reel.shares) / reel.views * 100).toFixed(2);
            return (
              <Card key={reel.reelId} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4">
                    {/* Reel Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-semibold">{reel.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Posted: {new Date(reel.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          {reel.featured && (
                            <Badge className="bg-accent">Featured</Badge>
                          )}
                          <Badge variant="secondary">
                            {reel.pointsEarned} pts
                          </Badge>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                        <div className="p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-1 text-xs text-blue-600 mb-1">
                            <Eye className="w-3 h-3" />
                            Views
                          </div>
                          <p className="font-bold text-blue-900">{reel.views.toLocaleString()}</p>
                        </div>
                        <div className="p-2 bg-pink-50 rounded">
                          <div className="flex items-center gap-1 text-xs text-pink-600 mb-1">
                            <Heart className="w-3 h-3" />
                            Likes
                          </div>
                          <p className="font-bold text-pink-900">{reel.likes}</p>
                        </div>
                        <div className="p-2 bg-green-50 rounded">
                          <div className="flex items-center gap-1 text-xs text-green-600 mb-1">
                            <MessageCircle className="w-3 h-3" />
                            Comments
                          </div>
                          <p className="font-bold text-green-900">{reel.comments}</p>
                        </div>
                        <div className="p-2 bg-amber-50 rounded">
                          <div className="flex items-center gap-1 text-xs text-amber-600 mb-1">
                            <Share2 className="w-3 h-3" />
                            Shares
                          </div>
                          <p className="font-bold text-amber-900">{reel.shares}</p>
                        </div>
                      </div>

                      {/* Engagement Rate */}
                      <div className="mt-3 p-2 bg-primary/10 rounded border border-primary/20">
                        <p className="text-xs text-muted-foreground">
                          Engagement Rate: <span className="font-bold text-primary">{engagementRate}%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Content Tips */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary/10">
        <CardHeader>
          <CardTitle>📊 Analytics Tips for GSA Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <strong>View Milestones:</strong> Reels with 1M+ views earn featured placement on official Google India Page
          </p>
          <p>
            <strong>Engagement Matters:</strong> Higher engagement rates lead to better algorithm visibility
          </p>
          <p>
            <strong>Monthly Winners:</strong> Top-performing reels each month get special recognition
          </p>
          <p>
            <strong>Point Incentives:</strong> Reach specific view thresholds (1k, 4k, 7k, 10k+) for bonus points
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
