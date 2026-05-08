import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import ContentCalendar from "@/components/ContentCalendar";
import Strategy from "@/components/Strategy";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="calendar">30-Day Calendar</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <Dashboard />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-8">
            <ContentCalendar />
          </TabsContent>

          <TabsContent value="strategy" className="space-y-8">
            <Strategy />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
