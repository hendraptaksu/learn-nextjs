import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function FeaturedEventsPage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className="justify-center">
      <h1>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
