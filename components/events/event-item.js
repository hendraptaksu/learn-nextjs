import Image from "next/image";

import Card from "../ui/card";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

export default function EventItem({ event }) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  return (
    <Card className={classes.card}>
      <div className={classes.imageWrapper}>
        <Image
          src={"/" + event.image}
          alt={event.title}
          className={classes.image}
          fill
        />
      </div>
      <div className={classes.info}>
        <h3>{event.title}</h3>
        <div className={classes.date}>
          <span className={classes.icon}>
            <DateIcon />
          </span>
          <span>{humanReadableDate}</span>
        </div>
        <div className={classes.address}>
          <span className={classes.icon}>
            <AddressIcon />
          </span>
          <span>{formattedAddress}</span>
        </div>

        <Button className={classes.button} link={`/events/${event.id}`}>
          Explore event
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </Card>
  );
}
