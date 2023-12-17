import Head from "next/head";

import EventList from "@/components/events/event-list";
import { getEvents } from "@/data/events";

export default function FeaturedEventsPage(props) {
  return (
    <div className="justify-center">
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="Featured events goes here..." />
      </Head>
      <h1>Featured Events</h1>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getEvents();

  return {
    props: {
      events: events.filter((e) => e.isFeatured),
    },
    revalidate: 60,
  };
}
