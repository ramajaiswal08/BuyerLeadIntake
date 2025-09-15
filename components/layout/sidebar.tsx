"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Building2, Home, Users, Plus, FileText, LogOut } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "All Leads", href: "/buyers", icon: Users },
  { name: "Add Lead", href: "/buyers/new", icon: Plus },
  { name: "Import/Export", href: "/buyers/import-export", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-50">
      {/* Brand Header */}
      <div className="flex h-16 items-center px-6 border-b bg-white shadow-sm">
        <Building2 className="h-7 w-7 text-indigo-600" />
        <span className="ml-2 text-lg font-semibold text-gray-900">
          Lead CRM
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                isActive
                  ? "bg-indigo-100 text-indigo-700 border-l-4 border-indigo-600"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5",
                  isActive ? "text-indigo-600" : "text-gray-500"
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
