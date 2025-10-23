import { Event } from "@/types"

export interface UpcomingEventCategory {
  icon: string
  title: string
  description: string
}

export const upcomingEventCategories: UpcomingEventCategory[] = [
  {
    icon: "Calendar",
    title: "Workshops",
    description: "Hands-on learning experiences"
  },
  {
    icon: "Clock",
    title: "Seminars",
    description: "Expert insights and discussions"
  },
  {
    icon: "MapPin",
    title: "Competitions",
    description: "Showcase your skills and win"
  }
]

// Array of upcoming events - currently empty, add events here as they are planned
export const upcomingEvents: Event[] = [
  // Example structure:
  // {
  //   id: "event-1",
  //   title: "AI & Machine Learning Workshop",
  //   description: "Deep dive into AI and ML fundamentals with hands-on projects",
  //   shortDescription: "Learn AI/ML with practical projects",
  //   date: "2025-11-15",
  //   time: "10:00 AM",
  //   endTime: "4:00 PM",
  //   location: "Bengaluru",
  //   city: "Bengaluru",
  //   venue: "MSRIT Campus",
  //   image: "/images/events/ai-workshop.jpg",
  //   category: "workshop",
  //   tags: ["AI", "Machine Learning", "Python"],
  //   price: 0,
  //   maxAttendees: 100,
  //   currentAttendees: 0,
  //   organizer: {
  //     id: "krowdkraft",
  //     name: "KrowdKraft",
  //     bio: "Community-driven events platform",
  //     avatar: "/logo.png",
  //     events: [],
  //     verified: true
  //   },
  //   speakers: [],
  //   schedule: [],
  //   tickets: [],
  //   status: "published",
  //   featured: true,
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString()
  // }
]
