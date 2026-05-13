import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  detailedCalendar,
  calendarSummary,
  getProgressPercentage,
  getPointsEarned,
  getWeekProgress,
  CalendarDay,
} from "@/lib/detailedCalendar";
import {
  ChevronDown,
  ChevronUp,
  Check,
  Clock,
  Target,
  Zap,
  Video,
  Grid3x3,
  Image,
  MessageSquare,
  Users,
  TrendingUp,
} from "lucide-react";

export default function DetailedContentCalendar() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [completedDays, setCompletedDays] = useState<Set<number>>(
    new Set(detailedCalendar.filter((d) => d.completed).map((d) => d.day))
  );
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const toggleDayCompletion = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const completedCount = completedDays.size;
  const progressPercentage = getProgressPercentage(completedCount);
  const pointsEarned = detailedCalendar.reduce((total, day) => {
    return total + (completedDays.has(day.day) ? day.pointsValue : 0);
  }, 0);

  const getContentIcon = (type: string) => {
    switch (type) {
      case "REEL":
        return <Video className="w-4 h-4 text-red-500" />;
      case "CAROUSEL":
        return <Grid3x3 className="w-4 h-4 text-blue-500" />;
      case "STATIC":
        return <Image className="w-4 h-4 text-purple-500" />;
      case "STORY":
        return <MessageSquare className="w-4 h-4 text-green-500" />;
      case "ENGAGEMENT":
        return <Users className="w-4 h-4 text-orange-500" />;
      default:
        return null;
    }
  };

  const getContentTypeLabel = (type: string) => {
    switch (type) {
      case "REEL":
        return "Reel (60-90 min)";
      case "CAROUSEL":
        return "Carousel (60-90 min)";
      case "STATIC":
        return "Static Post (30-45 min)";
      case "STORY":
        return "Story (20-30 min)";
      case "ENGAGEMENT":
        return "Engagement (20-45 min)";
      default:
        return type;
    }
  };

  const filteredDays = detailedCalendar.filter((day) => day.week === selectedWeek);
  const weekProgress = getWeekProgress(selectedWeek, detailedCalendar);

  return (
    <div className="space-y-8">
      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            30-Day Content Calendar Progress
          </CardTitle>
          <CardDescription>Track your content creation journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Progress Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Days Completed</p>
              <p className="text-3xl font-bold text-primary">{completedCount}/31</p>
              <p className="text-xs text-muted-foreground mt-1">{progressPercentage}% complete</p>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Points Earned</p>
              <p className="text-3xl font-bold text-accent">{pointsEarned}</p>
              <p className="text-xs text-muted-foreground mt-1">
                of {calendarSummary.totalPointsAvailable}
              </p>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Content Pieces</p>
              <p className="text-3xl font-bold text-blue-600">
                {detailedCalendar.filter((d) => completedDays.has(d.day)).length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">of 31 pieces</p>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Estimated Reach</p>
              <p className="text-3xl font-bold text-green-600">+2.4K</p>
              <p className="text-xs text-muted-foreground mt-1">followers expected</p>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">Overall Progress</span>
              <span className="text-sm text-muted-foreground">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Content Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-1">
                <Video className="w-4 h-4 text-red-500" />
                <span className="text-xs font-semibold text-red-900">Reels</span>
              </div>
              <p className="text-lg font-bold text-red-600">5</p>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <Grid3x3 className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold text-blue-900">Carousels</span>
              </div>
              <p className="text-lg font-bold text-blue-600">10</p>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <Image className="w-4 h-4 text-purple-500" />
                <span className="text-xs font-semibold text-purple-900">Static</span>
              </div>
              <p className="text-lg font-bold text-purple-600">5</p>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-green-900">Stories</span>
              </div>
              <p className="text-lg font-bold text-green-600">5</p>
            </div>

            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-orange-900">Engagement</span>
              </div>
              <p className="text-lg font-bold text-orange-600">6</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Week Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Select Week to View Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((week) => (
              <Button
                key={week}
                variant={selectedWeek === week ? "default" : "outline"}
                onClick={() => setSelectedWeek(week)}
                className="w-full"
              >
                Week {week}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Week Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Week {selectedWeek} Progress</CardTitle>
          <CardDescription>
            {filteredDays.length} days planned • {weekProgress}% complete
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={weekProgress} className="h-3" />
        </CardContent>
      </Card>

      {/* Daily Tasks */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Week {selectedWeek} Daily Tasks</h3>
        {filteredDays.map((day) => (
          <Card
            key={day.day}
            className={`cursor-pointer transition-all ${
              completedDays.has(day.day) ? "bg-green-50 border-green-200" : "hover:shadow-md"
            }`}
          >
            <div
              className="p-4"
              onClick={() =>
                setExpandedDay(expandedDay === day.day ? null : day.day)
              }
            >
              {/* Day Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <Checkbox
                    checked={completedDays.has(day.day)}
                    onCheckedChange={() => toggleDayCompletion(day.day)}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1"
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-sm">
                        Day {day.day} • {day.date}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {day.dayOfWeek}
                      </Badge>
                      {completedDays.has(day.day) && (
                        <Badge className="bg-green-600 text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>

                    <h4 className="font-semibold text-base mb-1">{day.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {day.description}
                    </p>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        {getContentIcon(day.contentType)}
                        <span>{getContentTypeLabel(day.contentType)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{day.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        <span>{day.expectedReach}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span>{day.pointsValue} pts</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="ml-4 text-muted-foreground hover:text-foreground">
                  {expandedDay === day.day ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Expanded Details */}
              {expandedDay === day.day && (
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  {/* Theme & Type */}
                  <div>
                    <p className="text-sm font-semibold mb-2">Theme & Content Type</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{day.theme}</Badge>
                      <Badge>{day.contentType}</Badge>
                    </div>
                  </div>

                  {/* Objectives */}
                  <div>
                    <p className="text-sm font-semibold mb-2">Objectives</p>
                    <ul className="space-y-1">
                      {day.objectives.map((obj, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Content Ideas */}
                  <div>
                    <p className="text-sm font-semibold mb-2">Content Ideas</p>
                    <ul className="space-y-1">
                      {day.contentIdeas.map((idea, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent">→</span>
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <p className="text-sm font-semibold mb-2">Recommended Hashtags</p>
                    <div className="flex flex-wrap gap-2">
                      {day.hashtags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Time Required</p>
                      <p className="font-semibold text-sm">{day.estimatedTime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expected Reach</p>
                      <p className="font-semibold text-sm">{day.expectedReach}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Points Value</p>
                      <p className="font-semibold text-sm text-yellow-600">+{day.pointsValue}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="font-semibold text-sm">
                        {completedDays.has(day.day) ? "✓ Done" : "Pending"}
                      </p>
                    </div>
                  </div>

                  {/* Notes */}
                  {day.notes && (
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs font-semibold text-blue-900 mb-1">💡 Tip:</p>
                      <p className="text-sm text-blue-800">{day.notes}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant={completedDays.has(day.day) ? "outline" : "default"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDayCompletion(day.day);
                      }}
                    >
                      {completedDays.has(day.day) ? "Mark Incomplete" : "Mark Complete"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
        <CardHeader>
          <CardTitle>Calendar Summary & Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-background rounded border border-border">
              <p className="font-semibold text-sm mb-2">📊 Expected Results</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Total Reach: 30,000-45,000 accounts</li>
                <li>• Total Engagement: 2,500-4,000 interactions</li>
                <li>• Follower Growth: +200-300 followers</li>
                <li>• Points Earned: Up to 2,650 GSA points</li>
              </ul>
            </div>

            <div className="p-3 bg-background rounded border border-border">
              <p className="font-semibold text-sm mb-2">⏰ Best Practices</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Post on: Tue, Wed, Thu, Fri (best days)</li>
                <li>• Time: 6-9 PM IST (peak engagement)</li>
                <li>• Consistency: 1 post per day minimum</li>
                <li>• Engagement: Respond to comments within 1 hour</li>
              </ul>
            </div>
          </div>

          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="font-semibold text-sm text-yellow-900 mb-2">⚡ Pro Tips</p>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>
                • Use the bonus days (29-31) for trending opportunities or makeup content
              </li>
              <li>
                • Save drafts for all content before posting - allows last-minute edits
              </li>
              <li>
                • Engage with 5-10 other creators daily for cross-promotion
              </li>
              <li>
                • Track which content types perform best and adjust accordingly
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
