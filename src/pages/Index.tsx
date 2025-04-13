
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, ChevronRight, Coins, Download, LineChart, RotateCcw, ShieldCheck, Star, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with animated gradient background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wealth-dark via-wealth-primary/30 to-wealth-secondary/20 z-0"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-wealth-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-wealth-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <Badge className="bg-wealth-primary/20 text-wealth-primary border-wealth-primary/20 px-3 py-1 text-sm mb-4">
                Financial Freedom Starts Here
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Your Smart <span className="text-wealth-accent">Financial Assistant</span> Powered by AI
              </h1>
              
              <p className="text-lg text-white/80 max-w-md">
                Track your net worth, set achievable goals, and receive personalized insights to grow your wealth efficiently.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/login?signup=true">
                  <Button className="wealth-button text-md group">
                    <span>Start Free Trial</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/dashboard">
                  <Button variant="outline" className="wealth-button-outline text-md">
                    <span>View Demo</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background w-8 h-8">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&auto=format&fit=crop" alt="User" />
                  </Avatar>
                  <Avatar className="border-2 border-background w-8 h-8">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=128&h=128&auto=format&fit=crop" alt="User" />
                  </Avatar>
                  <Avatar className="border-2 border-background w-8 h-8">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&auto=format&fit=crop" alt="User" />
                  </Avatar>
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-bold">5,000+</span> users tracking their wealth
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Main dashboard preview */}
                <div className="glass-card p-6 rounded-2xl shadow-2xl shadow-wealth-primary/20">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <TrendingUp className="mr-2 text-wealth-accent" /> Your Financial Dashboard
                  </h3>
                  
                  <div className="p-4 rounded-lg mb-6 bg-gradient-to-r from-wealth-primary/10 to-wealth-secondary/10">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm text-wealth-accent">Net Worth</span>
                      <span className="text-3xl font-bold">$127,840</span>
                    </div>
                    
                    <div className="h-40 bg-white/5 backdrop-blur-sm rounded-lg flex items-end p-2">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i}
                          className="flex-1 bg-gradient-to-t from-wealth-primary to-wealth-secondary rounded-t-sm mx-0.5"
                          style={{ 
                            height: `${20 + Math.sin(i / 2) * 10 + i * 3}%`,
                            opacity: i === 11 ? 1 : 0.7
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 bg-wealth-success/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium">Assets</span>
                        <LineChart className="h-3 w-3 text-wealth-success" />
                      </div>
                      <p className="font-medium">$182,450</p>
                    </div>
                    <div className="flex-1 p-3 bg-wealth-danger/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium">Liabilities</span>
                        <LineChart className="h-3 w-3 text-wealth-danger" />
                      </div>
                      <p className="font-medium">$54,610</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating AI insights card */}
                <div className="glass-card p-4 absolute -bottom-6 -left-6 animate-float" style={{animationDelay: "1s"}}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-wealth-accent/20 rounded-full">
                      <Brain className="h-5 w-5 text-wealth-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-wealth-accent">AI Insight</p>
                      <p className="text-sm font-medium">Rebalance portfolio for +4.2% potential</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating goal tracker card */}
                <div className="glass-card p-4 absolute -top-6 -right-6 animate-float" style={{animationDelay: "2s"}}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-wealth-primary/20 rounded-full">
                      <Target className="h-5 w-5 text-wealth-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-wealth-primary">Goal Progress</p>
                      <p className="text-sm font-medium">Vacation: 72% saved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 bg-white dark:bg-wealth-dark">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-wealth-secondary/10 text-wealth-secondary mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
              Everything You Need To Build Wealth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive toolkit gives you everything needed to track, plan, and grow your wealth with intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-wealth-primary/10 mb-5">
                  <BarChart3 className="h-6 w-6 text-wealth-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Net Worth Tracking</h3>
                <p className="text-muted-foreground">
                  Automatically calculate and visualize your entire financial picture in one place with customizable charts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-wealth-secondary/10 mb-5">
                  <Brain className="h-6 w-6 text-wealth-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Financial Advisor</h3>
                <p className="text-muted-foreground">
                  Get smart, personalized recommendations based on your unique financial situation and goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-wealth-accent/10 mb-5">
                  <Target className="h-6 w-6 text-wealth-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Goal Setting & Planning</h3>
                <p className="text-muted-foreground">
                  Define financial goals and get a detailed roadmap with monthly milestones to achieve them on schedule.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-wealth-success/10 mb-5">
                  <Coins className="h-6 w-6 text-wealth-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Asset Breakdown</h3>
                <p className="text-muted-foreground">
                  Visualize asset allocation and identify opportunities for optimization to maximize returns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-wealth-warning/10 mb-5">
                  <RotateCcw className="h-6 w-6 text-wealth-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Financial Projections</h3>
                <p className="text-muted-foreground">
                  See your financial future with AI-powered projections that adapt to your changing habits and market conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-wealth-danger/10 mb-5">
                  <ShieldCheck className="h-6 w-6 text-wealth-danger" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
                <p className="text-muted-foreground">
                  Your financial data is protected with enterprise-grade encryption and strict security protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-br from-wealth-primary/5 to-wealth-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-wealth-primary/10 text-wealth-primary mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Trusted by Thousands</h2>
            <p className="text-muted-foreground">See what our users say about WealthMate AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-5 w-5 text-wealth-accent fill-wealth-accent" />
                  ))}
                </div>
                <p className="mb-4 italic">"WealthMate has transformed how I track my investments. The AI insights helped me optimize my portfolio and I've seen a 12% increase in returns!"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&auto=format&fit=crop" alt="User" />
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Financial Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-5 w-5 text-wealth-accent fill-wealth-accent" />
                  ))}
                </div>
                <p className="mb-4 italic">"The goal planner is incredibly intuitive. I'm saving for a house and WealthMate has made it so easy to stay on track and visualize my progress."</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=128&h=128&auto=format&fit=crop" alt="User" />
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-5 w-5 text-wealth-accent fill-wealth-accent" />
                  ))}
                </div>
                <p className="mb-4 italic">"As someone who was overwhelmed by finances, WealthMate's clean interface and AI guidance have been game-changers. I finally feel in control!"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&auto=format&fit=crop" alt="User" />
                  </Avatar>
                  <div>
                    <p className="font-medium">Jessica Rivera</p>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-wealth-primary to-wealth-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="glass-card bg-white/10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Financial Future?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
              Join thousands of users who are taking control of their finances with WealthMate AI. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login?signup=true">
                <Button className="bg-white text-wealth-primary hover:bg-white/90 font-medium text-md px-6 py-6">
                  <span>Create Free Account</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-md px-6 py-6">
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download Mobile App</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-wealth-dark">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-wealth-primary">5,000+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-wealth-secondary">$450M+</p>
              <p className="text-sm text-muted-foreground">Assets Tracked</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-wealth-accent">12K+</p>
              <p className="text-sm text-muted-foreground">Financial Goals Set</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-wealth-success">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
