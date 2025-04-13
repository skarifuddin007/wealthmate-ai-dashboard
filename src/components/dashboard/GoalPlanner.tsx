
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    target: 25000,
    current: 15000,
    dueDate: "Dec 2023",
    color: "bg-wealth-primary"
  },
  {
    id: 2,
    name: "Home Down Payment",
    target: 60000,
    current: 24000,
    dueDate: "Jun 2025",
    color: "bg-wealth-secondary"
  },
  {
    id: 3,
    name: "New Car",
    target: 35000,
    current: 8000,
    dueDate: "Aug 2024",
    color: "bg-wealth-accent"
  }
];

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const GoalPlanner = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Financial Goals</CardTitle>
          <CardDescription>Track progress towards your objectives</CardDescription>
        </div>
        <Link to="/goals">
          <Button size="sm" className="flex items-center gap-1 bg-gradient-to-r from-wealth-primary to-wealth-secondary">
            <Plus className="h-4 w-4" />
            <span>Add Goal</span>
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map(goal => {
            const percent = Math.round((goal.current / goal.target) * 100);
            
            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{goal.name}</p>
                    <p className="text-xs text-muted-foreground">Due {goal.dueDate}</p>
                  </div>
                  <p className="text-sm font-medium">{percent}%</p>
                </div>
                
                <Progress 
                  value={percent} 
                  className="h-2" 
                />
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatCurrency(goal.current)}</span>
                  <span>{formatCurrency(goal.target)}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <Link to="/goals" className="mt-6 inline-flex items-center text-sm text-wealth-primary hover:underline">
          View all goals 
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default GoalPlanner;
