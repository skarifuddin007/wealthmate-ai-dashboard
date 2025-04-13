
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NetWorthChart from "@/components/dashboard/NetWorthChart";
import MonthlyTracker from "@/components/dashboard/MonthlyTracker";
import FinancialTips from "@/components/dashboard/FinancialTips";
import GoalPlanner from "@/components/dashboard/GoalPlanner";
import AssetLiabilitySummary from "@/components/dashboard/AssetLiabilitySummary";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Your Financial Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's an overview of your finances.</p>
            </div>
            <Button className="wealth-button mt-4 md:mt-0">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Add New Asset</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NetWorthChart />
            </div>
            <div>
              <FinancialTips />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <MonthlyTracker />
            <AssetLiabilitySummary />
          </div>
          
          <div className="mt-6">
            <GoalPlanner />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
