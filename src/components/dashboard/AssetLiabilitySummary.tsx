
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

// Mock data - would be replaced with real user data in production
const mockAssets = [
  { name: "Cash", value: 25000, color: "#0ea5e9" },
  { name: "Investments", value: 45000, color: "#8b5cf6" },
  { name: "Property", value: 220000, color: "#f97316" },
  { name: "Other", value: 9000, color: "#22c55e" },
];

const mockLiabilities = [
  { name: "Mortgage", value: 175000, color: "#ef4444" },
  { name: "Car Loan", value: 12000, color: "#f59e0b" },
  { name: "Credit Cards", value: 3500, color: "#ec4899" },
  { name: "Student Loan", value: 9500, color: "#d946ef" },
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const totalAssets = mockAssets.reduce((sum, item) => sum + item.value, 0);
const totalLiabilities = mockLiabilities.reduce((sum, item) => sum + item.value, 0);
const netWorth = totalAssets - totalLiabilities;

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3">
        <p className="text-sm font-medium">{payload[0].name}</p>
        <p className="font-semibold" style={{ color: payload[0].color }}>
          {formatter.format(payload[0].value as number)}
        </p>
        <p className="text-xs text-muted-foreground">
          {Math.round((payload[0].value as number) / 
            (payload[0].dataKey === "value" ? totalAssets : totalLiabilities) * 100)}% of total
        </p>
      </div>
    );
  }
  return null;
};

const AssetLiabilitySummary = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-xl">Assets & Liabilities</CardTitle>
        <CardDescription>Breakdown of your financial components</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Assets</h4>
              <span className="text-lg font-medium text-wealth-success">
                {formatter.format(totalAssets)}
              </span>
            </div>
            
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockAssets}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {mockAssets.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right" 
                    wrapperStyle={{ fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Liabilities</h4>
              <span className="text-lg font-medium text-wealth-danger">
                {formatter.format(totalLiabilities)}
              </span>
            </div>
            
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockLiabilities}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {mockLiabilities.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    wrapperStyle={{ fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
          <h4 className="font-medium">Net Worth</h4>
          <span className={`text-xl font-bold ${netWorth >= 0 ? 'text-wealth-success' : 'text-wealth-danger'}`}>
            {formatter.format(netWorth)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetLiabilitySummary;
