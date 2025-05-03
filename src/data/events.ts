
import { Event, EventType } from "../types";

// Helper function to generate random IDs
const generateId = () => Math.random().toString(36).substring(2, 15);

export const mockEvents: Event[] = [
  {
    id: generateId(),
    name: "Annual Hackathon 2025",
    description: "Join us for 48 hours of coding, innovation, and fun! Build something amazing with fellow students and win exciting prizes. All skill levels welcome. Food and drinks provided.",
    date: "2025-06-15T09:00:00Z",
    endDate: "2025-06-17T17:00:00Z",
    location: "Engineering Building, Room 305",
    college: "MIT",
    type: "hackathon",
    url: "https://example.com/hackathon",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
    organizer: "MIT Tech Club",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "AI Ethics Workshop",
    description: "Explore the ethical implications of artificial intelligence in this hands-on workshop. Learn about bias in algorithms, privacy concerns, and responsible AI development practices.",
    date: "2025-05-10T14:00:00Z",
    location: "Virtual",
    college: "Stanford University",
    type: "workshop",
    url: "https://example.com/ai-ethics",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
    organizer: "Stanford AI Lab",
    isVirtual: true
  },
  {
    id: generateId(),
    name: "Future of Blockchain Tech Talk",
    description: "A comprehensive discussion on the future of blockchain technology and its applications beyond cryptocurrency. Industry experts share insights on emerging trends.",
    date: "2025-05-05T18:30:00Z",
    location: "Business School Auditorium",
    college: "Harvard University",
    type: "tech_talk",
    url: "https://example.com/blockchain-talk",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070",
    organizer: "Harvard Blockchain Club",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "Summer Internship Fair",
    description: "Connect with top tech companies recruiting for summer internships. Bring your resume and be prepared for on-the-spot interviews. Professional attire recommended.",
    date: "2025-05-20T10:00:00Z",
    endDate: "2025-05-20T16:00:00Z",
    location: "Student Union Building",
    college: "Berkeley",
    type: "career",
    url: "https://example.com/internship-fair",
    imageUrl: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070",
    organizer: "Berkeley Career Center",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "Mobile App Development Workshop",
    description: "Learn how to build cross-platform mobile applications using React Native. From setup to deployment, this hands-on workshop covers everything you need to create your first app.",
    date: "2025-05-25T13:00:00Z",
    location: "Computer Science Building, Lab 2",
    college: "UCLA",
    type: "workshop",
    url: "https://example.com/mobile-workshop",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    organizer: "UCLA Mobile Dev Club",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "Cybersecurity Conference",
    description: "A day-long conference featuring keynotes from leading cybersecurity experts, hands-on demonstrations of ethical hacking, and networking opportunities with industry professionals.",
    date: "2025-06-05T09:00:00Z",
    endDate: "2025-06-05T17:00:00Z",
    location: "Virtual",
    college: "Georgia Tech",
    type: "conference",
    url: "https://example.com/cybersec-conf",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068",
    organizer: "GT Security Research Group",
    isVirtual: true
  },
  {
    id: generateId(),
    name: "Tech Startup Mixer",
    description: "Network with founders of successful tech startups and venture capitalists looking for the next big idea. Pitch your concepts and get valuable feedback.",
    date: "2025-05-18T19:00:00Z",
    location: "Innovation Hub",
    college: "Cornell University",
    type: "social",
    url: "https://example.com/startup-mixer",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032",
    organizer: "Cornell Entrepreneurship Club",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "Data Science Symposium",
    description: "Explore the latest trends in data science and machine learning. Presentations on research breakthroughs, industry applications, and emerging technologies.",
    date: "2025-06-10T10:00:00Z",
    endDate: "2025-06-11T16:00:00Z",
    location: "Science Center",
    college: "Princeton University",
    type: "conference",
    url: "https://example.com/data-science",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076",
    organizer: "Princeton Data Science Initiative",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "Women in Tech Panel",
    description: "Inspiring talks from women leaders in technology discussing their career journeys, challenges, and advice for aspiring technologists. Q&A session and networking to follow.",
    date: "2025-05-12T17:00:00Z",
    location: "Digital Arts Building",
    college: "NYU",
    type: "tech_talk",
    url: "https://example.com/women-in-tech",
    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2074",
    organizer: "NYU Women in Computer Science",
    isVirtual: false
  },
  {
    id: generateId(),
    name: "Game Development Hackathon",
    description: "Design and build a game in 36 hours! Open to all skill levels, from beginners to experienced developers. Workshops on Unity, Unreal Engine, and more throughout the event.",
    date: "2025-07-01T12:00:00Z",
    endDate: "2025-07-03T00:00:00Z",
    location: "Media Lab",
    college: "Carnegie Mellon University",
    type: "hackathon",
    url: "https://example.com/game-jam",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070",
    organizer: "CMU Game Creation Society",
    isVirtual: false
  },
];

export const colleges = Array.from(new Set(mockEvents.map(event => event.college))).sort();

export const eventTypes: { value: EventType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Events' },
  { value: 'hackathon', label: 'Hackathons' },
  { value: 'tech_talk', label: 'Tech Talks' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'conference', label: 'Conferences' },
  { value: 'social', label: 'Social Events' },
  { value: 'career', label: 'Career Events' },
];

export const locations = Array.from(
  new Set(mockEvents.map(event => event.isVirtual ? 'Virtual' : event.location.split(',')[0].trim()))
).sort();

