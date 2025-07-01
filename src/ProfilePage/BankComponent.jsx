import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
export default function BankComponent() {
    return(
       <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 dark:bg-gray-900 p-6 border-r">
        <div className="text-xl font-bold mb-8">🏦 MyBank</div>
        <nav className="flex flex-col gap-4">
          <Button variant="ghost" asChild>
            <Link to="profile">Profile</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="createaccount">Create Account</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="accounts">View Accounts</Link>
          </Button>
          <Button variant="destructive" asChild>
            <Link to="/logout">Logout</Link>
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white dark:bg-black text-foreground">
        <Outlet />
      </main>
    </div>
  );
    

}