import EventItem from "./event-item";

export default function EventList({ items }) {
  return (
    <div>
      {items.map((e) => (
        <EventItem key={e.id} event={e} />
      ))}
    </div>
  );
}
