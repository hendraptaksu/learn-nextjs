import Head from "next/head";

import EventList from "@/components/events/event-list";
import EventFilter from "@/components/events/event-filter";
import classes from "./index-page.module.css";
import { getEvents } from "@/data/events";

export default function AllEventsPage(props) {
  return (
    <div className="justify-center">
      <Head>
        <title>All Events</title>
        <meta name="description" content="All events in this website..." />
      </Head>
      <h1>All Events</h1>
      <EventFilter className={classes.eventFilter} />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
