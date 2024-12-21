import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Email notifications",
    description: "Receive emails about your account activity.",
  },
  {
    title: "Push notifications",
    description: "Receive push notifications about your account activity.",
  },
  {
    title: "SMS notifications",
    description: "Receive SMS about your account activity.",
  },
];

export default function Settings() {
  return (
    <div className="flex-1 bg-pagebg space-y-4 p-8 pt-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your dashboard settings here.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <Button className="bg-bgsidebar">Update Informations</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {notifications.map((notification) => (
              <div
                key={notification.title}
                className="flex items-center justify-between space-x-2"
              >
                <div className="space-y-0.5">
                  <Label className="text-base">{notification.title}</Label>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
                <Switch className="fill-bgsidebar" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
