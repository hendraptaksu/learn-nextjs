import Head from "next/head";

import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import { getEvents } from "@/data/events";
import classes from "./events-filtered.module.css";

/**
 * yearList is a list of months.
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

export default function FilteredEventsPage(props) {
  const { filteredEvents, error } = props;
  const { month, year } = props.filter;

  if (error) {
    return (
      <div className="center">
        <Head>
          <title>Filtered Events</title>
          <meta
            name="description"
            content={`Error ocurred when fetching events.`}
          />
        </Head>
        <p>{error}</p>
        <Button link={"/events"} className={classes.button}>
          Show All Events
        </Button>
      </div>
    );
  }

  let eventList = <p>No event found</p>;
  if (filteredEvents.length > 0) {
    eventList = <EventList items={filteredEvents} />;
  }

  return (
    <div className={classes.filteredEvents}>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`Events held in ${month}/${year}`} />
      </Head>
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

export async function getServerSideProps(context) {
  let year = 0;
  let month = 0;
  let error = "";
  if (context.params.slug) {
    year = parseInt(context.params.slug[0]);
    month = parseInt(context.params.slug[1]);
  }

  if (isNaN(year) || year < 2020 || year > 2030) {
    error = "Invalid year";
  }

  if (isNaN(month) || month < 1 || month > 12) {
    error = "Invalid month";
  }

  if (error) {
    return {
      props: {
        error: error,
        filter: {
          month: month,
          year: year,
        },
      },
    };
  }

  const events = await getEvents();
  const filteredEvents = events.filter((e) => {
    const eventDate = new Date(e.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return {
    props: {
      filteredEvents: filteredEvents,
      filter: {
        month: month,
        year: year,
      },
    },
  };
}
