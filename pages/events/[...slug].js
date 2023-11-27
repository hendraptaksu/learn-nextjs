import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import classes from "./events-filtered.module.css";
import Button from "@/components/ui/button";

/**
 * Map of month in number to month's name. E.g 01 -> January, 12 -> Desember.
 */
const yearList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];

export default function FilteredEventsPage() {
  const router = useRouter();

  let month;
  let year;
  if (router.query.slug) {
    year = parseInt(router.query.slug[0]);
    month = parseInt(router.query.slug[1]);
  }

  if (isNaN(year) || year < 2020 || year > 2030) {
    return <div>Invalid year</div>;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    return <div>Invalid month</div>;
  }

  const filteredEvents = getFilteredEvents({
    year: year,
    month: month,
  });

  let eventList = <p>No event exist!</p>;
  if (filteredEvents.length > 0) {
    eventList = <EventList items={filteredEvents} />;
  }

  return (
    <div className={classes.filteredEvents}>
      <h1>Events in {`${yearList[month - 1]} ${year}`}</h1>
      <div className={classes.buttonWrapper}>
        <Button link={"/events"} className={classes.button}>
          Show All Events
        </Button>
      </div>
      {eventList}
    </div>
  );
}
