// src/components/SidebarProfile.jsx
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react"; // optional icons from lucide-react
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../ContextSetup/UserContext";

export default function SidebarProfile() {
  const { user, handlelogout } = useContext(Context);

  if (!user) {
  return (
    <div className="flex items-center justify-between mb-6">
      <span className="text-sm text-muted-foreground italic">Not logged in</span>
      <Button
        variant="outline"
        className="text-blue-500 text-xs px-2 py-1"
        asChild
      >
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}


  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {user}
        </span>
      </div>
      <Button
        variant="ghost"
        className="text-red-500 text-xs px-2 py-1"
        onClick={handlelogout}
      >
        <LogOut className="h-4 w-4 mr-1" />
        Logout
      </Button>
    </div>
  );
}
