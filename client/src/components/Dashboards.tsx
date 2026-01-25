import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

/**
 * Dashboard Component
 * Showcases analytical skills with interactive data visualizations
 * Based on Kaggle datasets: E-commerce, Marketing, Startup Funding
 */

// Dashboard 1: Sales & Revenue Analytics
const salesData = [
  { month: "Jan", revenue: 45000, orders: 320, avgOrderValue: 140 },
  { month: "Feb", revenue: 52000, orders: 380, avgOrderValue: 137 },
  { month: "Mar", revenue: 48000, orders: 350, avgOrderValue: 137 },
  { month: "Apr", revenue: 61000, orders: 420, avgOrderValue: 145 },
  { month: "May", revenue: 55000, orders: 400, avgOrderValue: 138 },
  { month: "Jun", revenue: 67000, orders: 480, avgOrderValue: 140 },
];

const productData = [
  { name: "Electronics", value: 35, sales: 125000 },
  { name: "Fashion", value: 25, sales: 89000 },
  { name: "Home & Garden", value: 20, sales: 71000 },
  { name: "Sports", value: 12, sales: 43000 },
  { name: "Books", value: 8, sales: 28000 },
];

// Dashboard 2: Marketing Performance
const marketingData = [
  { month: "Jan", google: 15000, meta: 12000, tiktok: 8000 },
  { month: "Feb", google: 18000, meta: 14000, tiktok: 11000 },
  { month: "Mar", google: 16000, meta: 13000, tiktok: 9500 },
  { month: "Apr", google: 22000, meta: 18000, tiktok: 14000 },
  { month: "May", google: 20000, meta: 17000, tiktok: 12000 },
  { month: "Jun", google: 25000, meta: 21000, tiktok: 16000 },
];

const platformROI = [
  { platform: "Google", spend: 15000, revenue: 85000, roi: 467 },
  { platform: "Meta", spend: 12000, revenue: 72000, roi: 500 },
  { platform: "TikTok", spend: 8000, revenue: 56000, roi: 600 },
];

// Dashboard 3: Investment Trends
const fundingData = [
  { year: 2020, seed: 2500, seriesA: 1800, seriesB: 950, seriesC: 450 },
  { year: 2021, seed: 3200, seriesA: 2400, seriesB: 1400, seriesC: 700 },
  { year: 2022, seed: 2800, seriesA: 2100, seriesB: 1200, seriesC: 650 },
  { year: 2023, seed: 3500, seriesA: 2800, seriesB: 1600, seriesC: 900 },
  { year: 2024, seed: 4100, seriesA: 3200, seriesB: 1900, seriesC: 1100 },
];

const fundingByStage = [
  { name: "Seed", value: 45, amount: 16100 },
  { name: "Series A", value: 28, amount: 12300 },
  { name: "Series B", value: 18, amount: 7150 },
  { name: "Series C", value: 9, amount: 3800 },
];

const COLORS = ["#667eea", "#764ba2", "#f093fb", "#4facfe", "#00f2fe"];

export function SalesRevenueDashboard() {
  const totalRevenue = salesData.reduce((sum, d) => sum + d.revenue, 0);
  const totalOrders = salesData.reduce((sum, d) => sum + d.orders, 0);
  const avgRevenue = Math.round(totalRevenue / salesData.length);

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <div className="text-sm text-muted-foreground font-semibold">Total Revenue</div>
          <div className="text-3xl font-bold text-indigo-600 mt-2">${(totalRevenue / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">6-month period</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="text-sm text-muted-foreground font-semibold">Total Orders</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">{totalOrders.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground mt-2">Average: {Math.round(totalOrders / 6)} orders/month</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-pink-50 to-red-50 border-pink-200">
          <div className="text-sm text-muted-foreground font-semibold">Avg Monthly Revenue</div>
          <div className="text-3xl font-bold text-pink-600 mt-2">${(avgRevenue / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">Consistent growth trend</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Revenue & Order Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${(Number(value) / 1000).toFixed(0)}K`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#667eea"
                strokeWidth={2}
                dot={{ fill: "#667eea", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#764ba2"
                strokeWidth={2}
                dot={{ fill: "#764ba2", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Product Category Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Products */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Top Products by Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${(Number(value) / 1000).toFixed(0)}K`}
              />
              <Bar dataKey="sales" fill="#667eea" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Average Order Value */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Average Order Value Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${Number(value).toFixed(2)}`}
              />
              <Bar dataKey="avgOrderValue" fill="#764ba2" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}

export function MarketingPerformanceDashboard() {
  const totalSpend = platformROI.reduce((sum, d) => sum + d.spend, 0);
  const totalRevenue = platformROI.reduce((sum, d) => sum + d.revenue, 0);
  const avgROI = Math.round(platformROI.reduce((sum, d) => sum + d.roi, 0) / platformROI.length);

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <div className="text-sm text-muted-foreground font-semibold">Total Ad Spend</div>
          <div className="text-3xl font-bold text-indigo-600 mt-2">${(totalSpend / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">Across all platforms</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="text-sm text-muted-foreground font-semibold">Total Revenue</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">${(totalRevenue / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">From ad campaigns</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-pink-50 to-red-50 border-pink-200">
          <div className="text-sm text-muted-foreground font-semibold">Average ROI</div>
          <div className="text-3xl font-bold text-pink-600 mt-2">{avgROI}%</div>
          <div className="text-xs text-muted-foreground mt-2">Return on investment</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Spend Trend */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Ad Spend by Platform</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${Number(value).toLocaleString()}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="google"
                stroke="#667eea"
                strokeWidth={2}
                dot={{ fill: "#667eea", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="meta"
                stroke="#764ba2"
                strokeWidth={2}
                dot={{ fill: "#764ba2", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="tiktok"
                stroke="#f093fb"
                strokeWidth={2}
                dot={{ fill: "#f093fb", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* ROI Comparison */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">ROI by Platform</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformROI}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="platform" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `${Number(value)}%`}
              />
              <Bar dataKey="roi" fill="#667eea" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Spend vs Revenue */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Spend vs Revenue by Platform</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformROI}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="platform" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${Number(value).toLocaleString()}`}
              />
              <Legend />
              <Bar dataKey="spend" fill="#764ba2" radius={[8, 8, 0, 0]} />
              <Bar dataKey="revenue" fill="#667eea" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Efficiency Scatter */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Spend Efficiency</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="spend" stroke="#666" type="number" name="Spend ($)" />
              <YAxis dataKey="revenue" stroke="#666" type="number" name="Revenue ($)" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                cursor={{ strokeDasharray: "3 3" }}
                formatter={(value: any) => `$${Number(value).toLocaleString()}`}
              />
              <Scatter name="Platforms" data={platformROI} fill="#667eea" />
            </ScatterChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}

export function InvestmentTrendsDashboard() {
  const totalFunding = fundingData.reduce(
    (sum, d) => sum + d.seed + d.seriesA + d.seriesB + d.seriesC,
    0
  );
  const avgFunding = Math.round(totalFunding / fundingData.length);
  const latestYear = fundingData[fundingData.length - 1];
  const latestTotal = latestYear.seed + latestYear.seriesA + latestYear.seriesB + latestYear.seriesC;

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <div className="text-sm text-muted-foreground font-semibold">Total Funding (5 years)</div>
          <div className="text-3xl font-bold text-indigo-600 mt-2">${(totalFunding / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">Across all stages</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <div className="text-sm text-muted-foreground font-semibold">Average Annual Funding</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">${(avgFunding / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">Per year</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-pink-50 to-red-50 border-pink-200">
          <div className="text-sm text-muted-foreground font-semibold">Latest Year (2024)</div>
          <div className="text-3xl font-bold text-pink-600 mt-2">${(latestTotal / 1000).toFixed(0)}K</div>
          <div className="text-xs text-muted-foreground mt-2">Highest on record</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funding by Stage Over Time */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Funding by Stage (2020-2024)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fundingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="year" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${(Number(value) / 1000).toFixed(0)}K`}
              />
              <Legend />
              <Bar dataKey="seed" fill="#667eea" radius={[8, 8, 0, 0]} />
              <Bar dataKey="seriesA" fill="#764ba2" radius={[8, 8, 0, 0]} />
              <Bar dataKey="seriesB" fill="#f093fb" radius={[8, 8, 0, 0]} />
              <Bar dataKey="seriesC" fill="#4facfe" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Funding Distribution by Stage */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Funding Distribution by Stage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={fundingByStage}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {fundingByStage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Funding Trend Line */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Total Funding Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={fundingData.map((d) => ({
                year: d.year,
                total: d.seed + d.seriesA + d.seriesB + d.seriesC,
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="year" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${(Number(value) / 1000).toFixed(0)}K`}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#667eea"
                strokeWidth={3}
                dot={{ fill: "#667eea", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Stage Comparison */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Average Funding by Stage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fundingByStage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e8eaed" }}
                formatter={(value: any) => `$${(Number(value) / 1000).toFixed(0)}K`}
              />
              <Bar dataKey="amount" fill="#764ba2" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
