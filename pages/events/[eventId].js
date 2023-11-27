import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { EventDetail } from "@/components/event-detail/event-detail";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  if (!eventId) {
    return <div>Loading...</div>;
  }

  const event = getEventById(eventId);
  if (!event) {
    return <div>No event found!</div>;
  }

  return <EventDetail event={event} />;
}
