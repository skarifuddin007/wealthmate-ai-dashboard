
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

// Mock data - would be replaced with real user data in production
const mockMonthlyData = [
  { month: 'Jul', assets: 85000, liabilities: 30200, netWorth: 54800 },
  { month: 'Aug', assets: 88500, liabilities: 31300, netWorth: 57200 },
  { month: 'Sep', assets: 91000, liabilities: 31500, netWorth: 59500 },
  { month: 'Oct', assets: 93800, liabilities: 32000, netWorth: 61800 },
  { month: 'Nov', assets: 96500, liabilities: 31300, netWorth: 65200 },
  { month: 'Dec', assets: 99000, liabilities: 31000, netWorth: 68000 },
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
        <p className="text-sm font-medium mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm flex justify-between">
            <span>{entry.name}:</span>
            <span className="font-semibold ml-4">
              {formatter.format(entry.value as number)}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MonthlyTracker = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-xl">Monthly Tracker</CardTitle>
        <CardDescription>Track your assets and liabilities month by month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={mockMonthlyData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              barGap={0}
            >
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
              <Legend />
              <Bar 
                dataKey="assets" 
                name="Assets" 
                fill="#22c55e" 
                radius={[4, 4, 0, 0]} 
              />
              <Bar 
                dataKey="liabilities" 
                name="Liabilities" 
                fill="#ef4444" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyTracker;
