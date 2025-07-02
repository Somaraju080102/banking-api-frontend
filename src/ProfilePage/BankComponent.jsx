import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

import SidebarProfile from "./SidebarProfile";
export default function BankComponent() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-6 border-r">
        <div className="text-xl font-bold mb-4">🏦 MyBank</div>

        {/* Profile Info */}
        <SidebarProfile />

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          <Button variant="ghost" asChild>
            <Link to="createaccount">Create Account</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="accounts">View Accounts</Link>
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white dark:bg-black text-foreground">
        <Outlet />
      </main>
    </div>
  );
}
