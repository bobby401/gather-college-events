
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Calendar className="h-5 w-5 text-brand-600" />
            <span className="text-lg font-semibold text-brand-800">CampusEvents</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
            <Link to="/add" className="hover:text-brand-600 transition-colors">
              Add Event
            </Link>
            <a href="#" className="hover:text-brand-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-brand-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} CampusEvents. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
