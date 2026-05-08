import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { gsaMetrics, rewardTiers } from "@/lib/gsaProgram";
import { TrendingUp, Award, Target, Zap } from "lucide-react";

export default function GSAPointsTracker() {
  const currentTierIndex = rewardTiers.findIndex(
    (tier) => tier.name === gsaMetrics.currentTier
  );
  const nextTier = rewardTiers[currentTierIndex + 1];
  const progressToNextTier = (
    (gsaMetrics.currentPoints / gsaMetrics.nextTierPoints) *
    100
  ).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Main Points Card */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">
                {gsaMetrics.currentPoints} Points
              </CardTitle>
              <CardDescription>Current GSA Program Points</CardDescription>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">{gsaMetrics.currentTier}</span>
              <span className="text-sm text-muted-foreground">
                {gsaMetrics.currentPoints} / {gsaMetrics.nextTierPoints} pts
              </span>
            </div>
            <Progress value={parseFloat(progressToNextTier)} className="h-3" />
          </div>
          {nextTier && (
            <p className="text-sm text-muted-foreground">
              {gsaMetrics.pointsToNextTier} points to reach{" "}
              <span className="font-semibold text-foreground">{nextTier.name}</span>
            </p>
          )}
        </CardContent>
      </Card>

      {/* Tier Progression */}
      <Card>
        <CardHeader>
          <CardTitle>Tier Progression</CardTitle>
          <CardDescription>Your journey through the reward tiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rewardTiers.map((tier, idx) => {
              const isCurrentTier = tier.name === gsaMetrics.currentTier;
              const isCompleted = gsaMetrics.currentPoints >= tier.pointsRequired;
              const isNext =
                idx === currentTierIndex + 1 &&
                gsaMetrics.currentPoints < tier.pointsRequired;

              return (
                <div
                  key={tier.tier}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    isCurrentTier
                      ? "bg-primary/10 border-primary/50"
                      : isCompleted
                        ? "bg-green-50 border-green-200"
                        : isNext
                          ? "bg-accent/10 border-accent/50"
                          : "bg-muted/30 border-border"
                  }`}
                >
                  {/* Tier Badge */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      isCurrentTier
                        ? "bg-gradient-to-br from-primary to-accent"
                        : isCompleted
                          ? "bg-green-500"
                          : isNext
                            ? "bg-accent"
                            : "bg-muted-foreground"
                    }`}
                  >
                    {idx + 1}
                  </div>

                  {/* Tier Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{tier.name}</h4>
                      <Badge
                        variant={isCurrentTier ? "default" : "secondary"}
                        className={
                          isCurrentTier
                            ? "bg-primary"
                            : isCompleted
                              ? "bg-green-500"
                              : ""
                        }
                      >
                        {tier.tier}
                      </Badge>
                      {tier.topPercentage && (
                        <Badge variant="outline" className="text-xs">
                          {tier.topPercentage}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tier.pointsRequired} points • {tier.eVoucher} e-voucher •{" "}
                      {tier.physicalReward}
                    </p>
                  </div>

                  {/* Status Icon */}
                  {isCompleted && (
                    <div className="flex-shrink-0">
                      <Award className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                  {isCurrentTier && (
                    <div className="flex-shrink-0">
                      <Zap className="w-5 h-5 text-accent animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Points Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tasks Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {gsaMetrics.tasksCompleted}/{gsaMetrics.totalTasks}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {gsaMetrics.tasksInProgress} in progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Reels Created
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{gsaMetrics.reelsCreated}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Content creation ongoing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Events Hosted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{gsaMetrics.eventsHosted}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {gsaMetrics.totalParticipants} total participants
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Rewards Info */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-600" />
            Next Milestone
          </CardTitle>
        </CardHeader>
        <CardContent>
          {nextTier ? (
            <div className="space-y-3">
              <p className="text-sm text-amber-900">
                Reach <span className="font-bold">{nextTier.name}</span> to unlock:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 bg-white rounded border border-amber-200">
                  <p className="font-semibold text-amber-900">E-Voucher</p>
                  <p className="text-amber-700">{nextTier.eVoucher}</p>
                </div>
                <div className="p-2 bg-white rounded border border-amber-200">
                  <p className="font-semibold text-amber-900">Physical Reward</p>
                  <p className="text-amber-700">{nextTier.physicalReward}</p>
                </div>
              </div>
              <p className="text-xs text-amber-700 mt-2">
                📌 You need {gsaMetrics.pointsToNextTier} more points to reach this tier!
              </p>
            </div>
          ) : (
            <p className="text-sm text-amber-900">
              🎉 You've reached the highest tier! Keep maintaining your excellence.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
