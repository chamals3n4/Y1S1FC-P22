import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import Reminder from "../assets/images/Reminder.png";
import Reminder2 from "../assets/images/Reminders-pana.png";
import { AlarmClock } from "lucide-react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export default function MediAlarm() {
  const [cards, setCards] = useState([]);
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="flex-1 bg-pagebg space-y-4 p-8 pt-6">
      {/* Main Card */}
      <Card className="flex items-center bg-gray-900 rounded-medium shadow-none justify-between p-4">
        <div className="flex items-center space-x-4">
          {/* <div className="w-8 h-8 bg-blue-500 rounded-full"></div> */}
          <img
            src={Reminder}
            alt="reminder png "
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-lg text-white font-bold">
              Introducing the Choreo extension for Visual Studio Code
            </h1>
            <p className="text-sm text-white text-muted-foreground">
              You can now build, deploy, test, monitor and troubleshoot your
              cloud apps directly from VS Code.
            </p>
          </div>
        </div>

        {/* Dialog for editing profile */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-600">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Medication Name
                </Label>
                <Input id="name" className="col-span-2" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Dosage
                </Label>
                <Input id="name" className="col-span-2" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Frequency
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Daily</SelectItem>
                    <SelectItem value="dark">Weekly</SelectItem>
                    <SelectItem value="system">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Time of Day
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Morning</SelectItem>
                    <SelectItem value="dark">Afternoon</SelectItem>
                    <SelectItem value="system">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Date Range
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button type="button">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Card>

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex items-center hover:border-bgsidebar hover:bg-blue-50 border border-dashed text-sm rounded-medium shadow-none justify-between p-4"
          >
            <div className="flex items-center pl-5 space-x-4">
              <div>
                <h1 className="text-lg font-bold">{card.name}</h1>
                <p className="text-sm text-muted-foreground">{card.username}</p>
              </div>
            </div>
          </Card>
        ))}
      </div> */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex items-center hover:border-bgsidebar hover:bg-blue-50 border border-dashed text-sm rounded-medium shadow-none justify-between p-4"
          >
            <div className="flex items-center pl-5 space-x-4">
              <div>
                <h1 className="text-lg font-bold">{card.name}</h1>
                <p className="text-sm text-muted-foreground">{card.username}</p>
              </div>
            </div>
            <Switch className="ml-auto" checked={card.enabled} />
          </Card>
        ))}
      </div>
    </div>
  );
}
