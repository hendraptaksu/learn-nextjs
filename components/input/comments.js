import { useState, useEffect } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { toast } from "react-toastify";

async function fetchComments(eventId) {
  const resp = await fetch("/api/comments?eventId=" + eventId);
  const data = await resp.json();

  return data.comments;
}

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetch comments when this component gets rendered
    if (showComments) {
      fetchComments(eventId).then((comments) => {
        setComments(comments);
      });
    }
  }, [showComments, eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: commentData.email,
        name: commentData.name,
        comment: commentData.text,
        eventId: eventId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.message) {
          toast.success("Comment added!");
          // fetch comments when adding comment successful
          fetchComments(eventId).then((comments) => {
            setComments(comments);
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err);
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
