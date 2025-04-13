
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, PlusCircle } from "lucide-react";
import { useState } from "react";

// Mock data - would be replaced with real user data in production
const mockGoals = [
  {
    id: 1,
    name: "Emergency Fund",
    targetAmount: 25000,
    currentAmount: 15000,
    targetDate: new Date(2023, 11, 31),
    iconColor: "#0ea5e9"
  },
  {
    id: 2,
    name: "Down Payment",
    targetAmount: 60000,
    currentAmount: 24000,
    targetDate: new Date(2025, 5, 30),
    iconColor: "#8b5cf6"
  },
  {
    id: 3,
    name: "Vacation",
    targetAmount: 8000,
    currentAmount: 2500,
    targetDate: new Date(2023, 7, 15),
    iconColor: "#f97316"
  }
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
};

const GoalCard = ({ goal }: { goal: typeof mockGoals[0] }) => {
  const percentComplete = Math.round((goal.currentAmount / goal.targetAmount) * 100);
  const remaining = goal.targetAmount - goal.currentAmount;
  
  return (
    <div className="glass-card p-4 rounded-xl relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span 
            className="p-2 rounded-full" 
            style={{ backgroundColor: `${goal.iconColor}20` }}
          >
            <Target className="h-4 w-4" style={{ color: goal.iconColor }} />
          </span>
          <h4 className="font-medium">{goal.name}</h4>
        </div>
        <span className="text-xs text-muted-foreground">Target: {formatDate(goal.targetDate)}</span>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between mb-1 text-sm">
          <span>{formatter.format(goal.currentAmount)}</span>
          <span>{formatter.format(goal.targetAmount)}</span>
        </div>
        <Progress value={percentComplete} className="h-2" indicatorColor={goal.iconColor} />
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          {percentComplete}% • {formatter.format(remaining)} to go
        </span>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only">Add funds</span>
        </Button>
      </div>
    </div>
  );
};

const GoalPlanner = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Financial Goals</CardTitle>
        <CardDescription>Track your progress toward financial milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockGoals.map(goal => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Add New Goal</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GoalPlanner;
