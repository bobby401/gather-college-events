
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { mockEvents } from "@/data/events";
import { Calendar, MapPin, ArrowLeft, School, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Event } from "@/types";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundEvent = mockEvents.find((e) => e.id === id);
    
    setTimeout(() => {
      if (foundEvent) {
        setEvent(foundEvent);
      }
      setLoading(false);
    }, 500); // Simulate loading
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-12">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
            <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded mb-8"></div>
            <div className="h-20 bg-gray-200 rounded mb-8"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Event Not Found</h2>
          <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const formattedDate = format(eventDate, "EEEE, MMMM d, yyyy");
  const formattedTime = format(eventDate, "h:mm a");
  
  let formattedEndDate;
  let multiDay = false;
  
  if (event.endDate) {
    const endDate = new Date(event.endDate);
    formattedEndDate = format(endDate, "EEEE, MMMM d, yyyy");
    multiDay = format(eventDate, "yyyy-MM-dd") !== format(endDate, "yyyy-MM-dd");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img
              src={event.imageUrl || "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070"}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            {event.isVirtual && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/80 backdrop-blur-sm text-gray-800">
                  Virtual Event
                </Badge>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="border-brand-200 bg-brand-50 text-brand-800 hover:bg-brand-100">
                {event.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Badge>
              
              {event.organizer && (
                <Badge variant="outline" className="border-gray-200">
                  Organized by: {event.organizer}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{event.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-gray-600">{formattedDate}</p>
                  <p className="text-gray-600">{formattedTime}</p>
                  {multiDay && (
                    <>
                      <p className="text-gray-600 mt-1">Until:</p>
                      <p className="text-gray-600">{formattedEndDate}</p>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">
                    {event.isVirtual ? 'Online / Virtual Event' : event.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <School className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">College</p>
                  <p className="text-gray-600">{event.college}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">About This Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
            </div>

            {event.url && (
              <div className="flex justify-center">
                <Button asChild className="gap-2">
                  <a 
                    href={event.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Official Event Page
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
