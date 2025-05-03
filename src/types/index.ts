
export type EventType = 'hackathon' | 'tech_talk' | 'workshop' | 'conference' | 'social' | 'career';

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string; // ISO date string
  endDate?: string; // ISO date string for multi-day events
  location: string;
  college: string;
  type: EventType;
  url?: string;
  imageUrl?: string;
  organizer?: string;
  isVirtual: boolean;
}

export interface EventFilters {
  search: string;
  type: EventType | 'all';
  college: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  location: string;
}
