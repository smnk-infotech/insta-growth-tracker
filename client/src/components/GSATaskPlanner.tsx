import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gsaTasks, monthlyTaskTimeline } from "@/lib/gsaProgram";
import { CheckCircle2, Circle, AlertCircle, Clock, Users } from "lucide-react";

export default function GSATaskPlanner() {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const monthTasks = gsaTasks.filter((task) => task.month === selectedMonth);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "submitted":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "in-progress":
        return <Circle className="w-5 h-5 text-accent" />;
      case "rejected":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800";
      case "submitted":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-accent/20 text-accent";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTaskTypeColor = (taskType: string) => {
    return taskType === "Must Do"
      ? "bg-purple-100 text-purple-800"
      : "bg-blue-100 text-blue-800";
  };

  return (
    <div className="space-y-8">
      {/* Month Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Task Timeline</CardTitle>
          <CardDescription>
            Select a month to view tasks and deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {monthlyTaskTimeline.map((month) => (
              <button
                key={month.month}
                onClick={() => setSelectedMonth(month.month)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedMonth === month.month
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-sm">{month.month}</p>
                <p className="text-xs text-muted-foreground">
                  {month.status === "current"
                    ? "Current"
                    : month.status === "upcoming"
                      ? "Upcoming"
                      : "Past"}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tasks for Selected Month */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{selectedMonth} 2026 Tasks</h2>
          <Badge variant="secondary">
            {monthTasks.filter((t) => t.status === "verified").length}/{monthTasks.length} Verified
          </Badge>
        </div>

        {monthTasks.map((task) => (
          <Card key={task.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex gap-4 p-4">
                {/* Status Icon */}
                <div className="flex-shrink-0 pt-1">
                  {getStatusIcon(task.status)}
                </div>

                {/* Task Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {task.description}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {task.category}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Badge className={getTaskTypeColor(task.taskType)}>
                        {task.taskType}
                      </Badge>
                      <Badge className={getStatusBadgeColor(task.status)}>
                        {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                      </Badge>
                    </div>
                  </div>

                  {/* Task Metadata */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                    {task.minParticipants && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>
                          {task.minParticipants}-{task.maxParticipants} participants
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="font-semibold text-primary">
                      {task.pointsFixed > 0 && `${task.pointsFixed} pts fixed`}
                      {task.pointsIncentive && ` + ${task.pointsIncentive} pts incentive`}
                    </div>
                  </div>

                  {/* Points Earned */}
                  {task.pointsEarned && (
                    <div className="mt-3 p-2 bg-green-50 rounded border border-green-200">
                      <p className="text-sm text-green-800">
                        ✓ Earned {task.pointsEarned} points
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Task Categories Legend */}
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-lg">Task Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-background rounded border border-border">
              <p className="font-semibold text-sm mb-1">Must Do Tasks (3)</p>
              <p className="text-xs text-muted-foreground">
                Mandatory tasks required for program participation. Completion is essential for tier progression.
              </p>
            </div>
            <div className="p-3 bg-background rounded border border-border">
              <p className="font-semibold text-sm mb-1">Booster Tasks (2)</p>
              <p className="text-xs text-muted-foreground">
                Optional tasks to accelerate your points and tier progression. Great for ambitious ambassadors.
              </p>
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-900 font-semibold mb-2">💡 Pro Tips:</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Submit tasks before the deadline for timely verification</li>
              <li>• Ensure all submissions follow the defined formats</li>
              <li>• Points are awarded after monthly verification cycle</li>
              <li>• Collaborate with other ambassadors (submit work individually)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
