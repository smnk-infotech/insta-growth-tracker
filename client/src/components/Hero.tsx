import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663623259333/UPEysMaHp9bYWR2Thxcoez/hero_growth_tracker-YmyMqeHeHFEMkfTZwD5JxU.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-overlay" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-start container">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/40">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Your Instagram Growth Tracker
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Your GSA 2026{" "}
            <span className="text-accent">Performance Hub</span>
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Track Instagram growth, GSA points, monthly tasks, and rewards in one unified dashboard. Monitor your journey from Explorer to Celestial tier with real-time analytics.
          </p>

          <div className="flex gap-4 pt-4 flex-wrap">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white gap-2"
            >
              View Dashboard <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Learn About GSA
            </Button>
          </div>

          <div className="flex gap-6 pt-6 text-white/80 text-sm">
            <div>
              <p className="font-semibold text-white">166</p>
              <p>Followers</p>
            </div>
            <div>
              <p className="font-semibold text-white">25 pts</p>
              <p>Current Points</p>
            </div>
            <div>
              <p className="font-semibold text-white">3.2%</p>
              <p>Engagement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
