# Data Folder

This folder contains all static data files used throughout the KrowdKraft website. Each file exports TypeScript interfaces and data arrays that are dynamically imported into components.

## � Quick Reference

| Want to update... | Edit this file | Current count |
|------------------|----------------|---------------|
| Team members | `team.ts` | 6 members |
| Partner logos | `collaborators.ts` | 5 partners |
| Past events | `past-events.ts` | 5 events |
| Services offered | `services.ts` | 3 services |
| Community stats | `community-stats.ts` | 3 metrics |
| Community values | `community-values.ts` | 4 values |
| Upcoming events | `upcoming-events.ts` | 3 categories |

## �📁 File Structure

### Team & Collaborations
- **`team.ts`** - Team member information with profiles and social links
- **`collaborators.ts`** - Partner organizations and institutions
- **`past-events.ts`** - Historical events we've conducted

### Services
- **`services.ts`** - Service offerings (Community Design, Event Activations, Campus Waves)

### Community Data
- **`community-stats.ts`** - Community metrics and statistics (members, events, institutions)
- **`community-values.ts`** - Core community values and principles
- **`upcoming-events.ts`** - Future events and event categories

## 🔄 How Data is Used

### Example: Community Stats
```typescript
// data/community-stats.ts
export const communityStats = [
  {
    icon: "Users",
    title: "Community Members",
    metric: "900+",
    description: "Active members in our growing community"
  }
]

// components/sections/community.tsx
import { communityStats } from "@/data/community-stats"

// Dynamically render stats
{communityStats.map(stat => (
  <StatCard key={stat.title} {...stat} />
))}
```

## ✨ Benefits of This Approach

1. **Easy Updates**: Edit data files without touching component code
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Centralized Management**: All content in one place
4. **Reusability**: Same data can be used across multiple components
5. **Version Control**: Track changes to content separately from code

## 📝 Adding New Data

### To add a new team member:
1. Open `team.ts`
2. Add a new object to the `teamMembers` array
3. Follow the `TeamMember` interface structure
4. Add profile image to `/public/images/team/`
5. Appears on: Homepage - Team carousel slider

### To add a new event:
1. **For past events:** Open `past-events.ts`
   - Add a new object following the `PastEvent` interface
   - Add event image to `/public/images/events/`
   - Appears on: Community page - Past Events cork board
2. **For upcoming events:** Open `upcoming-events.ts`
   - Add to the `upcomingEvents` array following the `Event` interface
   - Appears on: Community page - Upcoming Events section

### To add a new collaborator:
1. Open `collaborators.ts`
2. Add a new object following the `Collaborator` interface
3. Add logo image to `/public/images/partners/`
4. Appears on: Community page - Past Collaborations section

## 🎨 Icon Mapping

Components use icon names as strings which are mapped to Lucide React icons:
```typescript
const iconMap = {
  Users,
  Calendar,
  GraduationCap,
  // ... other icons
}
```

Make sure the icon name in your data matches an available Lucide icon.

## 🔍 Where Each File is Used

| Data File | Component Path | Page/Section |
|-----------|---------------|--------------|
| **`team.ts`** | `src/components/sections/team.tsx` | Homepage - Team carousel slider |
| **`collaborators.ts`** | `src/components/sections/community/past-collaborations.tsx` | Community page - Partner logos grid |
| **`past-events.ts`** | `src/components/sections/community/past-events.tsx` | Community page - Cork board event cards |
| **`services.ts`** | `src/components/sections/services-preview.tsx`<br/>`src/app/services/page.tsx` | Homepage - Services preview<br/>Services page - Full service details |
| **`community-stats.ts`** | `src/components/sections/community.tsx` | Homepage - Community metrics cards |
| **`community-values.ts`** | `src/components/sections/community/about.tsx` | Community page - Core values section |
| **`upcoming-events.ts`** | `src/components/sections/community/upcoming-events.tsx` | Community page - Event categories |

### 📊 Component Details

#### **Homepage Components (`/`)**
- `team.tsx` → Uses `team.ts` (6 team members with social links)
- `community.tsx` → Uses `community-stats.ts` (3 stat cards: members, events, institutions)
- `services-preview.tsx` → Uses `services.ts` (3 service cards preview)

#### **Community Page Components (`/community`)**
- `past-collaborations.tsx` → Uses `collaborators.ts` (5 partners: 4 institutions + 1 community)
- `past-events.tsx` → Uses `past-events.ts` (5 past events in cork board layout)
- `about.tsx` → Uses `community-values.ts` (4 core values)
- `upcoming-events.tsx` → Uses `upcoming-events.ts` (3 event category cards)

#### **Services Page Components (`/services`)**
- `services/page.tsx` → Uses `services.ts` (Full service details with interactive tabs)

## 🚀 Best Practices

1. **Always define interfaces** for new data structures
2. **Use consistent naming** (camelCase for variables, PascalCase for types)
3. **Add descriptive comments** for complex data structures
4. **Keep data organized** by feature/section
5. **Export both interface and data** for maximum flexibility
6. **Test locally** after adding/modifying data

## 📦 Example: Adding a New Data File

```typescript
// data/testimonials.ts
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "CEO",
    company: "Tech Corp",
    quote: "Amazing community!",
    avatar: "/images/testimonials/john.jpg",
    rating: 5
  }
]
```

Then import in your component:
```typescript
import { testimonials } from "@/data/testimonials"
```

---

**Need Help?** Check existing data files for examples or reach out to the team!
