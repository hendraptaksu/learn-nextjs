import { Fragment, useRef } from "react";
import Head from "next/head";

export default function SubmitFeedbackPage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function handleSubmitFeedback(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    if (!email || !feedback) {
      // warn user about invalid form data
      console.log("Invalid email or feedback.");
      return;
    }

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        feedback: feedback,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("response data:", data));
  }

  return (
    <Fragment>
      <Head>
        <title>Feedback</title>
        <meta name="description" content="Submit feedback" />
      </Head>
      <form onSubmit={handleSubmitFeedback} className="center">
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <div>
            <label htmlFor="feedback">Your feedback</label>
          </div>
          <textarea id="feedback" rows={5} ref={feedbackRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
}
