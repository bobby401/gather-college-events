
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm border-b animate-fade-in">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-brand-600" />
          <Link to="/" className="text-xl font-bold text-brand-800">
            CampusEvents
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Events
          </Link>
          <Link to="/add" className="hidden sm:block">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Event</span>
            </Button>
          </Link>
          <Link to="/add" className="sm:hidden">
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
