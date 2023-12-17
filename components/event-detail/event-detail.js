import Image from "next/image";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import Card from "../ui/card";
import classes from "./event-detail.module.css";

export function EventDetail({ event }) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  return (
    <div>
      <div className={classes.titleWrapper}>
        <h1>{event.title}</h1>
      </div>
      <div>
        <Card className={classes.card}>
          <div className={classes.imageWrapper}>
            <Image
              src={"/" + event.image}
              className={classes.image}
              fill
              alt={event.title}
            />
          </div>
          <div className={classes.info}>
            <div className={classes.date}>
              <span>
                <DateIcon />
              </span>
              <div className={classes.dateText}>{humanReadableDate}</div>
            </div>
            <div className={classes.address}>
              <span>
                <AddressIcon />
              </span>
              <div className={classes.addressText}>{formattedAddress}</div>
            </div>
          </div>
        </Card>
        <p className={classes.description}>{event.description}</p>
      </div>
    </div>
  );
}
