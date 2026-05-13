import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { simplifiedCalendar, calendarStats, getTodayTask, getUpcomingTasks } from "@/lib/simplifiedCalendar";
import { CheckCircle2, Calendar, Target, Zap, ArrowRight, AlertCircle } from "lucide-react";

export default function SimplifiedHome() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set([1]));
  const todayTask = getTodayTask();
  const upcomingTasks = getUpcomingTasks(7);

  const toggleComplete = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const progressPercentage = Math.round((completedDays.size / 30) * 100);
  const pointsEarned = Array.from(completedDays).reduce((total, day) => {
    const task = simplifiedCalendar.find((t) => t.day === day);
    return total + (task ? task.pointsValue : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-primary/20 p-6">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Your GSA 2026 Content Hub</h1>
          <p className="text-muted-foreground">
            30-Day Instagram Growth Plan • Track your daily tasks and progress
          </p>
        </div>
      </div>

      <div className="container py-8 space-y-8">
        {/* TODAY'S TASK - HERO SECTION */}
        {todayTask ? (
          <Card className="border-accent/50 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2">Today's Task</Badge>
                  <CardTitle className="text-2xl">{todayTask.title}</CardTitle>
                  <CardDescription className="mt-2">{todayTask.date}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-accent">+{todayTask.pointsValue}</div>
                  <p className="text-xs text-muted-foreground">Points</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{todayTask.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Content Type</p>
                  <p className="font-semibold">{todayTask.contentType}</p>
                </div>
                <div className="p-3 bg-background rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Time Needed</p>
                  <p className="font-semibold">{todayTask.timeNeeded}</p>
                </div>
                <div className="p-3 bg-background rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Difficulty</p>
                  <p className="font-semibold">
                    {todayTask.pointsValue >= 100 ? "Medium-High" : "Easy"}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Content Ideas:</h4>
                <ul className="space-y-2">
                  {todayTask.ideas.map((idea, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="text-accent">✓</span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hashtags to Use:</h4>
                <div className="flex flex-wrap gap-2">
                  {todayTask.hashtags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={() => toggleComplete(todayTask.day)}
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {completedDays.has(todayTask.day) ? "Mark as Incomplete" : "Mark as Complete"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <CardTitle>No Task for Today</CardTitle>
                  <CardDescription>
                    You've completed all planned tasks! Check upcoming tasks below.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        )}

        {/* PROGRESS OVERVIEW */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Days Completed</p>
                <p className="text-3xl font-bold text-primary">
                  {completedDays.size}/{simplifiedCalendar.length}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{progressPercentage}% done</p>
              </div>

              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground mb-1">Points Earned</p>
                <p className="text-3xl font-bold text-accent">{pointsEarned}</p>
                <p className="text-xs text-muted-foreground mt-1">of {calendarStats.totalPoints}</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-muted-foreground mb-1">Content Pieces</p>
                <p className="text-3xl font-bold text-blue-600">{completedDays.size}</p>
                <p className="text-xs text-muted-foreground mt-1">posts created</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-muted-foreground mb-1">Expected Reach</p>
                <p className="text-3xl font-bold text-green-600">+2.4K</p>
                <p className="text-xs text-muted-foreground mt-1">followers</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Overall Progress</span>
                <span className="text-sm text-muted-foreground">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* UPCOMING TASKS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Next 7 Days
            </CardTitle>
            <CardDescription>Your upcoming content tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.day}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{task.title}</span>
                        <Badge variant="outline" className="text-xs">
                          {task.contentType}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          +{task.pointsValue} pts
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{task.date}</p>
                    </div>
                    <Button
                      size="sm"
                      variant={completedDays.has(task.day) ? "default" : "outline"}
                      onClick={() => toggleComplete(task.day)}
                    >
                      {completedDays.has(task.day) ? "✓ Done" : "Mark Done"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* TABS FOR DETAILED VIEW */}
        <Tabs defaultValue="all-tasks" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all-tasks">All Tasks (30)</TabsTrigger>
            <TabsTrigger value="by-type">By Type</TabsTrigger>
            <TabsTrigger value="tips">Tips & Best Practices</TabsTrigger>
          </TabsList>

          {/* All Tasks */}
          <TabsContent value="all-tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All 30-Day Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {simplifiedCalendar.map((task) => (
                    <div
                      key={task.day}
                      className={`p-3 rounded-lg border transition-colors ${
                        completedDays.has(task.day)
                          ? "bg-green-50 border-green-200"
                          : "bg-background border-border hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-sm">
                            Day {task.day}: {task.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {task.date} • {task.contentType}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-accent">
                            +{task.pointsValue}
                          </span>
                          <input
                            type="checkbox"
                            checked={completedDays.has(task.day)}
                            onChange={() => toggleComplete(task.day)}
                            className="w-4 h-4 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* By Type */}
          <TabsContent value="by-type" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(calendarStats.contentBreakdown).map(([type, count]) => (
                  <div key={type}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold capitalize">{type}</span>
                      <span className="text-sm text-muted-foreground">{count} pieces</span>
                    </div>
                    <Progress value={(count / 30) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tips */}
          <TabsContent value="tips" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Best Practices & Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">⏰ Best Posting Times</p>
                  <p className="text-sm text-blue-800">{calendarStats.bestTime}</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-2">📅 Best Days to Post</p>
                  <p className="text-sm text-green-800">{calendarStats.bestDays.join(", ")}</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-2">💡 Pro Tips</p>
                  <ul className="text-sm text-purple-800 space-y-2">
                    <li>• Respond to comments within 1 hour for better engagement</li>
                    <li>• Use all recommended hashtags to maximize reach</li>
                    <li>• Engage with 5-10 other creators daily</li>
                    <li>• Save drafts before posting for last-minute edits</li>
                    <li>• Track which content types perform best</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-900 mb-2">🎯 Goals</p>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Total Reach: 30,000-45,000 accounts</li>
                    <li>• Total Engagement: 2,500-4,000 interactions</li>
                    <li>• Follower Growth: +200-300 followers</li>
                    <li>• Points Earned: Up to 2,500 GSA points</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
