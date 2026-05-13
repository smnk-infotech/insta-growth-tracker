import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import ContentCalendar from "@/components/ContentCalendar";
import DetailedContentCalendar from "@/components/DetailedContentCalendar";
import Strategy from "@/components/Strategy";
import GSAPointsTracker from "@/components/GSAPointsTracker";
import GSATaskPlanner from "@/components/GSATaskPlanner";
import GSARewards from "@/components/GSARewards";
import ReelAnalytics from "@/components/ReelAnalytics";

export default function Home() {
  const [activeTab, setActiveTab] = useState("gsa-overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="gsa-overview" className="text-xs lg:text-sm">
              GSA Overview
            </TabsTrigger>
            <TabsTrigger value="points" className="text-xs lg:text-sm">
              Points
            </TabsTrigger>
            <TabsTrigger value="tasks" className="text-xs lg:text-sm">
              Tasks
            </TabsTrigger>
            <TabsTrigger value="rewards" className="text-xs lg:text-sm">
              Rewards
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs lg:text-sm">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="instagram" className="text-xs lg:text-sm">
              Instagram
            </TabsTrigger>
            <TabsTrigger value="calendar" className="text-xs lg:text-sm">
              Calendar
            </TabsTrigger>
            <TabsTrigger value="strategy" className="text-xs lg:text-sm">
              Strategy
            </TabsTrigger>
          </TabsList>

          {/* GSA Overview */}
          <TabsContent value="gsa-overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Dashboard />
              </div>
              <div>
                <GSAPointsTracker />
              </div>
            </div>
          </TabsContent>

          {/* Points Tracker */}
          <TabsContent value="points" className="space-y-8">
            <GSAPointsTracker />
          </TabsContent>

          {/* Task Planner */}
          <TabsContent value="tasks" className="space-y-8">
            <GSATaskPlanner />
          </TabsContent>

          {/* Rewards */}
          <TabsContent value="rewards" className="space-y-8">
            <GSARewards />
          </TabsContent>

          {/* Reel Analytics */}
          <TabsContent value="analytics" className="space-y-8">
            <ReelAnalytics />
          </TabsContent>

          {/* Instagram Growth */}
          <TabsContent value="instagram" className="space-y-8">
            <Dashboard />
          </TabsContent>

          {/* Content Calendar */}
          <TabsContent value="calendar" className="space-y-8">
            <DetailedContentCalendar />
          </TabsContent>

          {/* Growth Strategy */}
          <TabsContent value="strategy" className="space-y-8">
            <Strategy />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
