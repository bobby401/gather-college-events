
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Search, School, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { EventType, EventFilters } from "@/types";
import { colleges, eventTypes, locations } from "@/data/events";

interface EventFiltersProps {
  filters: EventFilters;
  onFilterChange: (filters: EventFilters) => void;
}

const EventFiltersComponent = ({ filters, onFilterChange }: EventFiltersProps) => {
  const [dateFrom, setDateFrom] = useState<Date | null>(filters.dateRange.start);
  const [dateTo, setDateTo] = useState<Date | null>(filters.dateRange.end);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleTypeChange = (value: string) => {
    onFilterChange({ ...filters, type: value as EventType | 'all' });
  };

  const handleCollegeChange = (value: string) => {
    onFilterChange({ ...filters, college: value });
  };

  const handleLocationChange = (value: string) => {
    onFilterChange({ ...filters, location: value });
  };

  const handleDateFromChange = (date: Date | null) => {
    setDateFrom(date);
    onFilterChange({
      ...filters,
      dateRange: {
        ...filters.dateRange,
        start: date,
      },
    });
  };

  const handleDateToChange = (date: Date | null) => {
    setDateTo(date);
    onFilterChange({
      ...filters,
      dateRange: {
        ...filters.dateRange,
        end: date,
      },
    });
  };

  const handleClearFilters = () => {
    setDateFrom(null);
    setDateTo(null);
    onFilterChange({
      search: "",
      type: "all",
      college: "",
      dateRange: { start: null, end: null },
      location: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 animate-fade-up">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search events..."
            className="pl-9"
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div>
            <Select value={filters.type} onValueChange={handleTypeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={filters.college}
              onValueChange={handleCollegeChange}
            >
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <School className="h-3.5 w-3.5" />
                  <SelectValue placeholder="All Colleges" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Colleges</SelectItem>
                {colleges.map((college) => (
                  <SelectItem key={college} value={college}>
                    {college}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={filters.location}
              onValueChange={handleLocationChange}
            >
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <SelectValue placeholder="All Locations" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal w-full",
                      !dateFrom && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-3.5 w-3.5" />
                    {dateFrom ? format(dateFrom, "MM/dd") : "From"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={handleDateFromChange}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal w-full",
                      !dateTo && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-3.5 w-3.5" />
                    {dateTo ? format(dateTo, "MM/dd") : "To"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={handleDateToChange}
                    initialFocus
                    fromDate={dateFrom || undefined}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="outline" size="sm" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventFiltersComponent;
