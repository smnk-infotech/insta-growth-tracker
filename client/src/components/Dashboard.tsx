import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { accountMetrics, strategyTips } from "@/lib/contentCalendar";
import { Users, Heart, TrendingUp, Target } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Followers",
      value: accountMetrics.followers,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Avg. Reach",
      value: accountMetrics.averageReach,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Engagement Rate",
      value: `${accountMetrics.engagementRate.toFixed(1)}%`,
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Total Posts",
      value: accountMetrics.posts,
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Account Overview</h2>
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
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Growth Goal */}
      <Card>
        <CardHeader>
          <CardTitle>30-Day Growth Goal</CardTitle>
          <CardDescription>
            Target: 250+ followers | Engagement Rate: 50%+
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Follower Growth</span>
              <span className="text-sm text-muted-foreground">166 → 250</span>
            </div>
            <Progress value={66} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Engagement Target</span>
              <span className="text-sm text-muted-foreground">42.8% → 50%</span>
            </div>
            <Progress value={85} className="h-2" />
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

      {/* Bio Optimization */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
        <CardHeader>
          <CardTitle>Bio Optimization</CardTitle>
          <CardDescription>
            Suggested improvements to your Instagram bio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">Current Bio:</p>
            <p className="text-sm p-3 bg-background rounded border border-border">
              {accountMetrics.followers > 0 && "Nandhakumar Murugan | Google Student Ambassador\nLeading AI Awareness & Google Gemini Workshops Community Builder"}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">Suggested Bio:</p>
            <p className="text-sm p-3 bg-background rounded border border-border">
              Nandhakumar Murugan | Google Student Ambassador 🚀<br/>
              AI & Cyber Security Enthusiast | Community Builder @ KGiSL<br/>
              Empowering students with Google Gemini & AI Workshops.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
