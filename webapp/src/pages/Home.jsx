import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import supabase from "@/config/supabase";

const stats = [
  {
    name: "Latest Pulse Reading",
    value: "85 bpm",
    change: "+20.1% from last month",
  },
  {
    name: " Body Temperature",
    value: "37.2°C",
    change: "+20.1% from last month",
  },
  {
    name: "Health Status Summary",
    value: "Normal",
    change: "+20.1% from last month",
  },
  {
    name: "Data Uptime or Reliability",
    value: "+467",
    change: "+20.1% from last month",
  },
];

const activities = [
  {
    name: "Activity 1",
    description: "Description for activity 1",
    time: "2h ago",
  },
  {
    name: "Activity 2",
    description: "Description for activity 2",
    time: "2h ago",
  },
  {
    name: "Activity 3",
    description: "Description for activity 3",
    time: "2h ago",
  },
];

export default function Home() {
  return (
    <div className="flex-1 bg-pagebg space-y-4 p-8 pt-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-serif tracking-tight">
          Welcome Chamal Senarathna 👋🏻
        </h2>
        <p className="text-muted-foreground">
          This is the home page of your dashboard.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card className="border-bgsidebar" key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Badge className="mt-2" variant="success">
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
