
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Event } from "@/types";
import { Calendar, MapPin, School } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface EventCardProps {
  event: Event;
}

const EventTypeColors: Record<string, string> = {
  hackathon: "bg-purple-100 text-purple-800 border-purple-200",
  tech_talk: "bg-blue-100 text-blue-800 border-blue-200",
  workshop: "bg-green-100 text-green-800 border-green-200",
  conference: "bg-orange-100 text-orange-800 border-orange-200",
  social: "bg-pink-100 text-pink-800 border-pink-200",
  career: "bg-amber-100 text-amber-800 border-amber-200",
};

const EventTypeBadge = ({ type }: { type: string }) => {
  const baseClasses = "rounded-full px-2 py-1 text-xs font-medium border";
  const colorClasses = EventTypeColors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  
  return <span className={`${baseClasses} ${colorClasses}`}>
    {type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
  </span>;
};

const EventCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date);
  const formattedDate = format(eventDate, "MMM d, yyyy");
  const formattedTime = format(eventDate, "h:mm a");
  
  return (
    <Card className="event-card h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
          <img
            src={event.imageUrl || "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070"}
            alt={event.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <EventTypeBadge type={event.type} />
          </div>
          {event.isVirtual && (
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">Virtual</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg line-clamp-1 mb-1">{event.name}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <Calendar className="h-3.5 w-3.5" />
          <span>{formattedDate} at {formattedTime}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <School className="h-3.5 w-3.5" />
          <span>{event.college}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{event.isVirtual ? 'Online' : event.location}</span>
        </div>
        <p className="mt-3 text-sm line-clamp-2 text-gray-600">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/event/${event.id}`} 
          className="w-full inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-md transition-colors"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
