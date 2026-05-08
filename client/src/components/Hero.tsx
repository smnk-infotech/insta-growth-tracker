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
            Track. Analyze.{" "}
            <span className="text-accent">Grow.</span>
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Monitor your Instagram growth with a 30-day interactive content calendar, real-time metrics, and proven growth strategies tailored for student creators.
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white gap-2"
            >
              Start Tracking <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              View Strategy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
