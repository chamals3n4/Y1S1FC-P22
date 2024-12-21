import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const metrics = [
  {
    title: "Akon",
    value: "XXX",
    change: "Bro ipsum",
  },
  {
    title: "Bkon",
    value: "XXX",
    change: "Bro ipsum",
  },
  {
    title: "Ckon",
    value: "XXX",
    change: "Bro ipsum",
  },
  {
    title: "Dkon",
    value: "XXX",
    change: "Bro ipsum",
  },
  {
    title: "Ekon",
    value: "XXX",
    change: "Bro ipsum",
  },
  {
    title: "Fkon",
    value: "XXX",
    change: "Bro ipsum",
  },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function Analytics() {
  return (
    <div className="flex-1 bg-pagebg space-y-4 p-8 pt-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">View your analytics data here.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Overview</CardTitle>
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full rounded-lg bg-muted" />
        </CardContent>
      </Card>
    </div>
  );
}
