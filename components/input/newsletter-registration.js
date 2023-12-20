import { useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { toast } from "react-toastify";

function NewsletterRegistration() {
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    if (!email) {
      return alert("Invalid email");
    }

    fetch("/api/newsletter/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.message) {
          toast.success("Your are signed up for newsletter!");
        }
      })
      .catch((err) => {
        console.log("newsletter signup err:", err);
        toast.error(err);
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
