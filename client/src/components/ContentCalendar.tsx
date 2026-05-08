import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { contentCalendar, ContentItem } from "@/lib/contentCalendar";
import { CheckCircle2, Circle, Video, Image, MessageSquare } from "lucide-react";

export default function ContentCalendar() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleComplete = (day: number) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompleted(newCompleted);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "REEL":
        return <Video className="w-4 h-4" />;
      case "CAROUSEL":
        return <Image className="w-4 h-4" />;
      case "STORY":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "REEL":
        return "bg-purple-100 text-purple-800";
      case "CAROUSEL":
        return "bg-blue-100 text-blue-800";
      case "STORY":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalItems = contentCalendar.reduce((sum, week) => sum + week.items.length, 0);
  const completionRate = Math.round((completed.size / totalItems) * 100);

  return (
    <div className="space-y-8">
      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle>30-Day Content Calendar Progress</CardTitle>
          <CardDescription>
            Track your daily content creation journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Completion</span>
              <span className="text-2xl font-bold text-accent">{completionRate}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {completed.size} of {totalItems} content pieces completed
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Breakdown */}
      <div className="space-y-6">
        {contentCalendar.map((week) => (
          <Card key={week.week} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">
                    Week {week.week}: {week.title}
                  </CardTitle>
                  <CardDescription>{week.theme} Focus</CardDescription>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {week.items.filter((item) => completed.has(item.day)).length}/{week.items.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {week.items.map((item) => (
                  <div
                    key={item.day}
                    className={`flex gap-4 p-4 rounded-lg border transition-all ${
                      completed.has(item.day)
                        ? "bg-accent/5 border-accent/30"
                        : "bg-background border-border hover:border-primary/30"
                    }`}
                  >
                    {/* Checkbox */}
                    <div className="flex-shrink-0 pt-1">
                      <button
                        onClick={() => toggleComplete(item.day)}
                        className="focus:outline-none"
                      >
                        {completed.has(item.day) ? (
                          <CheckCircle2 className="w-6 h-6 text-accent" />
                        ) : (
                          <Circle className="w-6 h-6 text-muted-foreground hover:text-primary" />
                        )}
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h4
                            className={`font-semibold ${
                              completed.has(item.day)
                                ? "text-muted-foreground line-through"
                                : "text-foreground"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <Badge className={`flex-shrink-0 gap-1 ${getTypeBadgeColor(item.type)}`}>
                          {getTypeIcon(item.type)}
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">💡 Pro Tips</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 space-y-2">
          <p>
            • <strong>Batch Content:</strong> Create multiple posts in one session to save time
          </p>
          <p>
            • <strong>Schedule Ahead:</strong> Use Instagram's scheduling feature to post at optimal times
          </p>
          <p>
            • <strong>Engage Daily:</strong> Leave 10-15 genuine comments on niche accounts
          </p>
          <p>
            • <strong>Reply Fast:</strong> Respond to comments within the first hour for better reach
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
