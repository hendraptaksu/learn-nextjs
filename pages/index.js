import Head from "next/head";

import EventList from "@/components/events/event-list";
import { getEvents } from "@/data/events";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export default function FeaturedEventsPage(props) {
  return (
    <div className="justify-center">
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="Featured events goes here..." />
      </Head>
      <NewsletterRegistration />
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
