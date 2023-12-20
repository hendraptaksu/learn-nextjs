import { Fragment } from "react";
import Head from "next/head";

import { EventDetail } from "@/components/event-detail/event-detail";
import { getEvents } from "@/data/events";
import Comments from "@/components/input/comments";

export default function EventDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.event.title}</title>
        <meta name="description" content={props.event.description} />
      </Head>
      <EventDetail event={props.event} />;
      <Comments eventId={props.event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const events = await getEvents();
  const event = events.find((e) => e.id === eventId);
  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event: event,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const events = await getEvents();

  const eventPathParams = events.map((e) => ({ params: { eventId: e.id } }));

  return {
    paths: eventPathParams,
    fallback: "blocking",
  };
}
