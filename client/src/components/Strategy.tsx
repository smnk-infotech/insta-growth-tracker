import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

export default function Strategy() {
  return (
    <div className="space-y-8">
      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-5 h-5" />
              Your Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>✓ High engagement rate (42.77%) - well above industry average</p>
            <p>✓ Strong carousel performance with 11.2% interaction-to-reach ratio</p>
            <p>✓ Clear niche focus (AI, Google Student Ambassador, Cyber Security)</p>
            <p>✓ Authentic, mission-driven content resonates with audience</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <AlertCircle className="w-5 h-5" />
              Areas to Improve
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Reels reach is lower than carousels (avg 724 vs 1,103)</p>
            <p>• Posting frequency could be increased for better algorithm visibility</p>
            <p>• Cross-platform promotion (LinkedIn, Twitter) underutilized</p>
            <p>• Engagement with other creators' content could be more consistent</p>
          </CardContent>
        </Card>
      </div>

      {/* Strategy Breakdown */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Content Strategy</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Tactics</TabsTrigger>
          <TabsTrigger value="growth">Growth Hacks</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Mix Recommendation</CardTitle>
              <CardDescription>
                Optimal posting strategy for maximum reach and engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Carousels (Educational)</span>
                    <span className="text-sm text-muted-foreground">40%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "40%" }} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your strongest format. Use for deep dives, tutorials, and resource lists.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Reels (Entertaining/Quick Tips)</span>
                    <span className="text-sm text-muted-foreground">40%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: "40%" }} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focus on YAP format (unscripted, authentic). Fast edits, strong hooks.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Stories (Community Building)</span>
                    <span className="text-sm text-muted-foreground">20%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-pink-500 h-full rounded-full" style={{ width: "20%" }} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use Q&A stickers, polls, and "Add Yours" prompts for engagement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2026 Trending Formats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <p className="font-semibold text-sm text-blue-900">YAP Format</p>
                <p className="text-sm text-blue-800">Selfie videos, off-the-cuff, minimal editing. Counters over-polished content.</p>
              </div>
              <div className="p-3 bg-purple-50 rounded border border-purple-200">
                <p className="font-semibold text-sm text-purple-900">Fast Edits</p>
                <p className="text-sm text-purple-800">8-15 rapid cuts in 30 seconds. No dead air. Timed text synced with audio.</p>
              </div>
              <div className="p-3 bg-pink-50 rounded border border-pink-200">
                <p className="font-semibold text-sm text-pink-900">Game Formats</p>
                <p className="text-sm text-pink-800">This-or-that, blind rankings, side-by-side edits. Highly interactive.</p>
              </div>
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <p className="font-semibold text-sm text-green-900">Personalized Memes</p>
                <p className="text-sm text-green-800">Use yourself or personal elements in trending meme formats.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Engagement Routine</CardTitle>
              <CardDescription>
                Spend 30-45 minutes daily on these activities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-4 p-3 bg-background border border-border rounded">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-sm text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Leave Genuine Comments (15 min)</p>
                    <p className="text-sm text-muted-foreground">
                      Comment on 10-15 posts from niche accounts (other student ambassadors, AI educators, tech communities). Write thoughtful, relevant comments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 bg-background border border-border rounded">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-bold text-sm text-accent">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Respond to Comments (10 min)</p>
                    <p className="text-sm text-muted-foreground">
                      Reply to ALL comments on your posts within the first hour. Use this to build relationships and boost engagement metrics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 bg-background border border-border rounded">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-sm text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Engage with Stories (10 min)</p>
                    <p className="text-sm text-muted-foreground">
                      Reply to stories from followers and niche accounts. Use the "Add Yours" sticker on trending story templates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 bg-background border border-border rounded">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-bold text-sm text-accent">4</span>
                  </div>
                  <div>
                    <p className="font-semibold">Engage with DMs (5 min)</p>
                    <p className="text-sm text-muted-foreground">
                      Respond to direct messages from followers. Foster deeper connections and gather feedback.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Growth Wins</CardTitle>
              <CardDescription>
                Implement these tactics immediately for faster growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-green-200 bg-green-50">
                <Lightbulb className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-900">Optimize Your Bio</AlertTitle>
                <AlertDescription className="text-green-800">
                  Update your bio with emojis, clear value proposition, and a link to your latest resource or workshop. This is your first impression.
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900">Cross-Platform Promotion</AlertTitle>
                <AlertDescription className="text-blue-800">
                  Share your Instagram content on LinkedIn (professional angle) and Twitter (quick tips). Link back to your Instagram profile.
                </AlertDescription>
              </Alert>

              <Alert className="border-purple-200 bg-purple-50">
                <Lightbulb className="h-4 w-4 text-purple-600" />
                <AlertTitle className="text-purple-900">Collaborate with Other Creators</AlertTitle>
                <AlertDescription className="text-purple-800">
                  Partner with other student ambassadors or tech creators for duets, shoutouts, or joint content. This exposes you to their audiences.
                </AlertDescription>
              </Alert>

              <Alert className="border-pink-200 bg-pink-50">
                <Lightbulb className="h-4 w-4 text-pink-600" />
                <AlertTitle className="text-pink-900">Use Trending Audio Strategically</AlertTitle>
                <AlertDescription className="text-pink-800">
                  Mix trending songs with original audio. Instagram prioritizes original audio, so remixing popular tracks is a winning strategy.
                </AlertDescription>
              </Alert>

              <Alert className="border-amber-200 bg-amber-50">
                <Lightbulb className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-900">Post Consistently</AlertTitle>
                <AlertDescription className="text-amber-800">
                  Aim for 3-4 posts per week (mix of Reels, Carousels, Stories). Consistency signals to the algorithm that you're an active creator.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metrics to Track Weekly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>📊 <strong>Reach:</strong> How many unique accounts saw your content?</p>
              <p>❤️ <strong>Engagement Rate:</strong> (Likes + Comments + Shares) / Reach × 100</p>
              <p>👥 <strong>Follower Growth:</strong> Net new followers per week</p>
              <p>💬 <strong>Comment Quality:</strong> Are people having meaningful conversations?</p>
              <p>🔗 <strong>Link Clicks:</strong> If using link in bio, track clicks to your resources</p>
              <p>🎯 <strong>Saves:</strong> How many people saved your content? (High-value metric)</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary to-accent text-white border-0">
        <CardHeader>
          <CardTitle className="text-white">Ready to Grow?</CardTitle>
          <CardDescription className="text-white/90">
            Start with Week 1 of your 30-day calendar and commit to the daily engagement routine.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/90">
            Track your progress, measure your metrics, and adjust your strategy based on what works. Remember: consistency and authenticity are your superpowers.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
