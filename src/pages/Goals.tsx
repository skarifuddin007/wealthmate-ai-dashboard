
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CircleDollarSign, PiggyBank, Target, Home, Car, GraduationCap, Plane, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const mockGoals = [
  {
    id: 1,
    name: "Emergency Fund",
    category: "savings",
    icon: <PiggyBank className="h-5 w-5" />,
    iconBg: "bg-wealth-primary/10",
    iconColor: "text-wealth-primary",
    targetAmount: 25000,
    currentAmount: 15000,
    monthlyContribution: 500,
    targetDate: new Date(2023, 11, 31)
  },
  {
    id: 2,
    name: "Down Payment",
    category: "home",
    icon: <Home className="h-5 w-5" />,
    iconBg: "bg-wealth-secondary/10",
    iconColor: "text-wealth-secondary",
    targetAmount: 60000,
    currentAmount: 24000,
    monthlyContribution: 1000,
    targetDate: new Date(2025, 5, 30)
  },
  {
    id: 3,
    name: "New Car",
    category: "vehicle",
    icon: <Car className="h-5 w-5" />,
    iconBg: "bg-wealth-accent/10",
    iconColor: "text-wealth-accent",
    targetAmount: 35000,
    currentAmount: 8000,
    monthlyContribution: 750,
    targetDate: new Date(2024, 8, 15)
  },
  {
    id: 4,
    name: "European Vacation",
    category: "travel",
    icon: <Plane className="h-5 w-5" />,
    iconBg: "bg-wealth-success/10",
    iconColor: "text-wealth-success",
    targetAmount: 8000,
    currentAmount: 2500,
    monthlyContribution: 300,
    targetDate: new Date(2023, 7, 15)
  },
  {
    id: 5,
    name: "Graduate School Fund",
    category: "education",
    icon: <GraduationCap className="h-5 w-5" />,
    iconBg: "bg-wealth-warning/10",
    iconColor: "text-wealth-warning",
    targetAmount: 42000,
    currentAmount: 5000,
    monthlyContribution: 800,
    targetDate: new Date(2026, 3, 30)
  }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
};

const calculateMonthsRemaining = (targetDate: Date) => {
  const now = new Date();
  const months = (targetDate.getFullYear() - now.getFullYear()) * 12 + 
                 (targetDate.getMonth() - now.getMonth());
  return Math.max(0, months);
};

const GoalCard = ({ goal }: { goal: typeof mockGoals[0] }) => {
  const percentComplete = Math.round((goal.currentAmount / goal.targetAmount) * 100);
  const monthsRemaining = calculateMonthsRemaining(goal.targetDate);
  
  const progressColor = () => {
    if (percentComplete < 25) return "bg-red-500";
    if (percentComplete < 50) return "bg-orange-500";
    if (percentComplete < 75) return "bg-yellow-500";
    return "bg-green-500";
  };
  
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`p-2 rounded-full ${goal.iconBg}`}>
              {goal.icon}
            </span>
            <CardTitle>{goal.name}</CardTitle>
          </div>
          <span className="text-sm font-medium">
            Target: {formatDate(goal.targetDate)}
          </span>
        </div>
        <CardDescription>{monthsRemaining} months remaining</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>{formatCurrency(goal.currentAmount)}</span>
              <span>{formatCurrency(goal.targetAmount)}</span>
            </div>
            <Progress value={percentComplete} className="h-2" />
            <p className="text-sm text-muted-foreground mt-1">
              {percentComplete}% complete • {formatCurrency(goal.targetAmount - goal.currentAmount)} remaining
            </p>
          </div>
          
          <div className="pt-2 border-t border-border">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CircleDollarSign className="h-4 w-4 text-wealth-primary" />
                <span className="text-sm">Monthly contribution:</span>
              </div>
              <span className="font-medium">{formatCurrency(goal.monthlyContribution)}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-border">
        <Button variant="ghost" size="sm">Edit</Button>
        <Button size="sm" className="bg-gradient-to-r from-wealth-primary to-wealth-secondary hover:opacity-90">
          Add Funds
        </Button>
      </CardFooter>
    </Card>
  );
};

const Goals = () => {
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [goalAmount, setGoalAmount] = useState(10000);
  const [timeframe, setTimeframe] = useState(24); // months
  
  // Recalculate when inputs change
  const calculateGoal = () => {
    const futureValue = monthlyContribution * timeframe;
    setCalculatedAmount(futureValue);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Financial Goals</h1>
              <p className="text-muted-foreground">Track and manage your financial targets</p>
            </div>
            <Button className="wealth-button mt-4 md:mt-0">
              <Target className="mr-2 h-4 w-4" />
              <span>Create New Goal</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {mockGoals.map(goal => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
          
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Goal Calculator</h2>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Plan Your Financial Goal</CardTitle>
                <CardDescription>Calculate how much you need to save monthly to reach your target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Goal amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                        <Input 
                          type="number" 
                          className="pl-8 glass-input" 
                          value={goalAmount}
                          onChange={(e) => setGoalAmount(Number(e.target.value))}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Monthly contribution</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                        <Input 
                          type="number" 
                          className="pl-8 glass-input" 
                          value={monthlyContribution}
                          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Time frame (months): {timeframe}</Label>
                      </div>
                      <Slider 
                        defaultValue={[24]} 
                        min={1} 
                        max={120}
                        step={1}
                        value={[timeframe]}
                        onValueChange={(value) => setTimeframe(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 month</span>
                        <span>10 years</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="wealth-button w-full"
                      onClick={calculateGoal}
                    >
                      Calculate
                    </Button>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-gradient-to-br from-wealth-primary/10 to-wealth-secondary/10 rounded-full p-8 mb-4">
                      <div className="bg-gradient-to-br from-wealth-primary/20 to-wealth-secondary/20 rounded-full p-8">
                        <div className="bg-gradient-to-br from-wealth-primary to-wealth-secondary rounded-full p-6 text-center">
                          <div className="text-white">
                            <p className="text-sm uppercase font-medium">You'll save</p>
                            <p className="text-3xl font-bold mt-1">{formatCurrency(calculatedAmount)}</p>
                            <p className="text-xs mt-1">After {timeframe} months</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center max-w-xs">
                      <p className="text-sm text-muted-foreground">
                        This simple calculation doesn't include interest or investment returns. 
                        Talk to a financial advisor for comprehensive planning.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Goals;
