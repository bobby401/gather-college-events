
import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import EventFilters from "@/components/EventFilters";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { mockEvents } from "@/data/events";
import { Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { EventFilters as EventFiltersType, Event } from "@/types";

const Index = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  const [filters, setFilters] = useState<EventFiltersType>({
    search: "",
    type: "all",
    college: "",
    dateRange: { start: null, end: null },
    location: "",
  });

  useEffect(() => {
    let result = [...events];

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (event) =>
          event.name.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          event.college.toLowerCase().includes(searchLower)
      );
    }

    // Filter by event type
    if (filters.type && filters.type !== "all") {
      result = result.filter((event) => event.type === filters.type);
    }

    // Filter by college
    if (filters.college) {
      result = result.filter((event) => event.college === filters.college);
    }

    // Filter by location
    if (filters.location) {
      if (filters.location === "Virtual") {
        result = result.filter((event) => event.isVirtual);
      } else {
        result = result.filter(
          (event) => !event.isVirtual && event.location.includes(filters.location)
        );
      }
    }

    // Filter by date range
    if (filters.dateRange.start) {
      const startDate = new Date(filters.dateRange.start);
      startDate.setHours(0, 0, 0, 0);
      result = result.filter((event) => new Date(event.date) >= startDate);
    }

    if (filters.dateRange.end) {
      const endDate = new Date(filters.dateRange.end);
      endDate.setHours(23, 59, 59, 999);
      result = result.filter((event) => new Date(event.date) <= endDate);
    }

    // Sort by date (nearest first)
    result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setFilteredEvents(result);
  }, [filters, events]);

  const handleFilterChange = (newFilters: EventFiltersType) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Campus Events</h1>
          <Link to="/add">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Event</span>
            </Button>
          </Link>
        </div>

        <EventFilters filters={filters} onFilterChange={handleFilterChange} />

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="mx-auto w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or add a new event
            </p>
            <Link to="/add">
              <Button>Add New Event</Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
