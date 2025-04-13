
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, ChevronRight, Coins, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Track Your <span className="text-wealth-accent">Financial Journey</span> With AI Guidance
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-md">
                WealthMate AI helps you monitor your net worth, set achievable goals, and get personalized insights to grow your wealth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login?signup=true">
                  <Button className="wealth-button text-md">
                    <span>Start Your Free Trial</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="wealth-button-outline text-md text-white border-white">
                    <span>Explore Demo</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="glass-card p-6 lg:p-8 animate-float">
                  <h3 className="text-xl font-semibold mb-4">Your Net Worth</h3>
                  <div className="p-4 bg-white/20 dark:bg-white/5 rounded-lg mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm text-wealth-accent">Total</span>
                      <span className="text-2xl font-bold">$68,000</span>
                    </div>
                    <div className="h-32 bg-gradient-to-r from-wealth-primary/20 to-wealth-secondary/20 rounded-lg flex items-end">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i}
                          className="flex-1 bg-gradient-to-t from-wealth-primary to-wealth-secondary rounded-t-sm mx-0.5"
                          style={{ 
                            height: `${20 + Math.sin(i / 2) * 10 + i * 5}%`,
                            opacity: i === 11 ? 1 : 0.7
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>↑ 12% from last year</span>
                    <Link 
                      to="/dashboard" 
                      className="flex items-center text-wealth-primary hover:underline"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                
                <div className="glass-card p-4 absolute -bottom-6 -left-6 animate-float" style={{animationDelay: "1s"}}>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-wealth-success/20 rounded-full">
                      <TrendingUp className="h-5 w-5 text-wealth-success" />
                    </div>
                    <div>
                      <p className="text-xs text-wealth-success">AI Insight</p>
                      <p className="text-sm font-medium">Investments +8.2%</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 absolute -top-6 -right-6 animate-float" style={{animationDelay: "2s"}}>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-wealth-accent/20 rounded-full">
                      <Target className="h-5 w-5 text-wealth-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-wealth-accent">Goal Progress</p>
                      <p className="text-sm font-medium">Home: 40% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white dark:bg-wealth-dark">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-heading mb-4">Everything You Need to Build Wealth</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to track your net worth, set financial goals, and get AI-powered insights to make smarter money moves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="p-2 bg-wealth-primary/10 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-wealth-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Net Worth Tracker</h3>
              <p className="text-muted-foreground">
                Automatically calculate and visualize your net worth over time to track your financial progress.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="p-2 bg-wealth-secondary/10 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-wealth-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal Planner</h3>
              <p className="text-muted-foreground">
                Set financial goals and get a personalized roadmap to achieve them on your timeline.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="p-2 bg-wealth-accent/10 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-wealth-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Financial Advisor</h3>
              <p className="text-muted-foreground">
                Get smart, personalized financial recommendations based on your unique financial situation.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="p-2 bg-wealth-success/10 rounded-lg w-fit mb-4">
                <Coins className="h-6 w-6 text-wealth-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Asset Breakdown</h3>
              <p className="text-muted-foreground">
                Visualize your assets and liabilities to understand where your money is and identify opportunities.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="p-2 bg-wealth-warning/10 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-wealth-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Projections</h3>
              <p className="text-muted-foreground">
                See into your financial future with AI-powered projections based on your current habits.
              </p>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="p-2 bg-wealth-danger/10 rounded-lg w-fit mb-4">
                <ShieldCheck className="h-6 w-6 text-wealth-danger" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
              <p className="text-muted-foreground">
                Your financial data is protected with enterprise-grade encryption and security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-wealth-primary/10 to-wealth-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of users who are taking control of their finances with WealthMate AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login?signup=true">
                <Button className="wealth-button text-md">
                  <span>Create Free Account</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="wealth-button-outline text-md">
                  <span>Explore Features</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
