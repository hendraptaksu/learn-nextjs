import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendMessage(messageData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong!");
  }

  return data;
}

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState();

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  async function handleSubmitMessage(e) {
    e.preventDefault();

    setNotification({
      title: "Sending!",
      message: "Sending message...",
      status: "pending",
    });
    try {
      const data = await sendMessage({
        name,
        email,
        message,
      });
      clearFormInput();
      setNotification({
        title: "Success!",
        message: data.message,
        status: "success",
      });
    } catch (err) {
      setNotification({
        title: "Error!",
        message: err.message || "Some error occurred!",
        status: "error",
      });
    }
  }

  function handleDismissNotification() {
    setNotification(null);
  }

  function clearFormInput() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I Help You?</h1>
      <form className={classes.form} onSubmit={handleSubmitMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
          onClick={handleDismissNotification}
        />
      )}
    </section>
  );
}
