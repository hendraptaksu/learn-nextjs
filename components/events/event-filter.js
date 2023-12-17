import { useRef } from "react";

import Button from "../ui/button";
import classes from "./event-filter.module.css";
import { useRouter } from "next/router";

export default function EventFilter({ onSearch, className }) {
  const monthRef = useRef();
  const yearRef = useRef();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    const year = yearRef.current.value;
    const month = monthRef.current.value;

    router.push(`events/${year}/${month}`);
  }

  return (
    <div className={`${classes.formWrapper} ${className}`}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formControl}>
          <label>Year</label>
          <select ref={yearRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.formControl}>
          <label>Month</label>
          <select ref={monthRef}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button className={classes.button}>Find Events</Button>
      </form>
    </div>
  );
}
