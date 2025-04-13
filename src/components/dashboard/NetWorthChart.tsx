
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { useState } from "react";

// Mock data - would be replaced with real user data in production
const mockNetWorthData = [
  { month: 'Jan', netWorth: 42000 },
  { month: 'Feb', netWorth: 44500 },
  { month: 'Mar', netWorth: 43800 },
  { month: 'Apr', netWorth: 46200 },
  { month: 'May', netWorth: 48500 },
  { month: 'Jun', netWorth: 52000 },
  { month: 'Jul', netWorth: 54800 },
  { month: 'Aug', netWorth: 57200 },
  { month: 'Sep', netWorth: 59500 },
  { month: 'Oct', netWorth: 61800 },
  { month: 'Nov', netWorth: 65200 },
  { month: 'Dec', netWorth: 68000 },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-wealth-primary font-semibold">
          {formatter.format(payload[0].value as number)}
        </p>
      </div>
    );
  }
  return null;
};

const NetWorthChart = () => {
  const [timeRange, setTimeRange] = useState<'1M' | '3M' | '6M' | '1Y' | 'ALL'>('1Y');
  
  const currentNetWorth = mockNetWorthData[mockNetWorthData.length - 1].netWorth;
  const firstNetWorth = mockNetWorthData[0].netWorth;
  const change = currentNetWorth - firstNetWorth;
  const percentChange = (change / firstNetWorth) * 100;
  
  const isPositiveChange = change >= 0;
  
  // Filter data based on selected time range
  // In production, this would fetch different data sets from the API
  const filteredData = mockNetWorthData; // For now, showing all data
  
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Net Worth</CardTitle>
            <CardDescription>Track your total financial position over time</CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-lg bg-secondary/10 p-1">
            {['1M', '3M', '6M', '1Y', 'ALL'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range as any)}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  timeRange === range 
                    ? 'bg-wealth-primary text-white' 
                    : 'hover:bg-secondary/20'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-3 mb-6">
          <span className="text-3xl font-bold">{formatter.format(currentNetWorth)}</span>
          <span className={`text-sm font-medium ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
            {isPositiveChange ? '↑' : '↓'} {formatter.format(Math.abs(change))} ({percentChange.toFixed(1)}%)
          </span>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={filteredData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="netWorthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                stroke="rgba(255,255,255,0.2)"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="rgba(255,255,255,0.2)"
                tickFormatter={(value) => `$${value/1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="netWorth"
                stroke="url(#netWorthGradient)"
                strokeWidth={3}
                dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#0ea5e9', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetWorthChart;
