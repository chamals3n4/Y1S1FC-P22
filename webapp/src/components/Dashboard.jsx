import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Settings,
  BarChart,
  Menu,
  ChevronLeft,
  MessageCircle,
  ChartScatterIcon,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "../assets/images/BodySQLBlack.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
3;
const menuItems = [
  { icon: Home, label: "Overview", to: "/" },
  { icon: BarChart, label: "Analytics", to: "/analytics" },
  { icon: MessageCircle, label: "Chat", to: "/chat" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

function Dashboard({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 z-50 flex flex-col transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          "bg-bgsidebar text-white"
        )}
      >
        {/* Sidebar Header */}
        <div className="border-b border-blue-500 bg-white text-black px-3 py-2">
          <div className="flex h-12 items-center justify-left">
            <img src={Logo} className="w-[150px]" alt="BodySQL Logo" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-sans transition-all",
                  "hover:bg-bgnavlink hover:text-white",
                  isActive
                    ? "bg-bgnavlink text-white"
                    : "text-blue-200 hover:text-white",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          collapsed ? "ml-16" : "ml-64"
        )}
      >
        <div className="sticky top-0 z-40 border-b bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            {/* Left side (Logo) */}
            <div>{/* Your existing logo or title */}</div>

            {/* Right side (Avatar with Dropdown) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    /* Navigate to Profile */
                  }}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    /* Navigate to Settings */
                  }}
                >
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    /* Handle Logout */
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}

export default Dashboard;
