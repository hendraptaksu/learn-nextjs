import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import EventFilter from "@/components/events/event-filter";
import classes from "./index-page.module.css";

export default function AllEventsPage() {
  const allEvents = getAllEvents();

  return (
    <div className="justify-center">
      <h1>All Events</h1>
      <EventFilter className={classes.eventFilter} />
      <EventList items={allEvents} />
    </div>
  );
}
