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

/*
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },

*/
