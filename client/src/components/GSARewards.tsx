import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rewardTiers, specialAchievements } from "@/lib/gsaProgram";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function GSARewards() {
  const getTierColor = (index: number) => {
    const colors = [
      "from-amber-400 to-amber-600",
      "from-slate-300 to-slate-500",
      "from-yellow-400 to-yellow-600",
      "from-blue-400 to-blue-600",
      "from-purple-400 to-purple-600",
      "from-cyan-400 to-cyan-600",
      "from-pink-400 to-pink-600",
    ];
    return colors[index] || colors[0];
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663623259333/UPEysMaHp9bYWR2Thxcoez/gsa_rewards_showcase-eUpLnZag9oN5Tq6NppVqwU.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        <div className="relative h-full flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold text-white mb-2">Earn. Level Up. Reward.</h2>
          <p className="text-white/90 max-w-lg">
            Every task completed brings you closer to exclusive rewards and recognition.
          </p>
        </div>
      </div>

      {/* Reward Tiers Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Reward Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewardTiers.map((tier, idx) => (
            <Card key={tier.tier} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${getTierColor(idx)}`} />
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    <CardDescription className="text-xs">{tier.tier}</CardDescription>
                  </div>
                  <Trophy className={`w-5 h-5 text-${getTierColor(idx).split(" ")[1]}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-2 bg-primary/10 rounded">
                  <p className="text-2xl font-bold text-primary">{tier.pointsRequired}</p>
                  <p className="text-xs text-muted-foreground">Points Required</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-xs">E-Voucher</p>
                      <p className="text-muted-foreground">{tier.eVoucher}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-xs">Physical Reward</p>
                      <p className="text-muted-foreground">{tier.physicalReward}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-xs">Digital Badge</p>
                      <p className="text-muted-foreground">{tier.badge}</p>
                    </div>
                  </div>
                </div>

                {tier.topPercentage && (
                  <Badge variant="outline" className="w-full justify-center text-xs">
                    {tier.topPercentage}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Special Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specialAchievements.map((achievement) => (
            <Card key={achievement.id} className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Rewards Breakdown */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle>How Rewards Work</CardTitle>
          <CardDescription>
            Understanding the reward system and point accumulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-bold text-sm text-primary">1</span>
              </div>
              <div>
                <p className="font-semibold">Complete Tasks</p>
                <p className="text-sm text-muted-foreground">
                  Finish monthly must-do and booster tasks as assigned
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-bold text-sm text-accent">2</span>
              </div>
              <div>
                <p className="font-semibold">Earn Points</p>
                <p className="text-sm text-muted-foreground">
                  Points awarded after monthly verification cycle
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-bold text-sm text-primary">3</span>
              </div>
              <div>
                <p className="font-semibold">Reach Tiers</p>
                <p className="text-sm text-muted-foreground">
                  Accumulate points to unlock reward tiers
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-bold text-sm text-accent">4</span>
              </div>
              <div>
                <p className="font-semibold">Claim Rewards</p>
                <p className="text-sm text-muted-foreground">
                  Receive e-vouchers, physical rewards, and digital badges
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Program Duration */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Program Duration</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 space-y-2">
          <p>
            <strong>Duration:</strong> April to September 2026
          </p>
          <p>
            <strong>Verification:</strong> Points awarded at the end of each monthly cycle
          </p>
          <p>
            <strong>Certificates:</strong> Issued upon completion of the program
          </p>
          <p className="pt-2 border-t border-blue-200">
            💡 <strong>Tip:</strong> Submit tasks on time and maintain high quality for faster verification and rewards!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
