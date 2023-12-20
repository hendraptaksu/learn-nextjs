import { useEffect, useState } from "react";
import classes from "./comment-list.module.css";

function CommentList({ eventId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await fetch("/api/comments?eventId=" + eventId);
      const data = await resp.json();
      setComments(data.comments);
    })();
  }, []);

  let commentList = <p>No comments posted for this events.</p>;

  if (comments.length > 0) {
    commentList = comments.map((c) => (
      <li key={c.id}>
        <p>{c.comment}</p>
        <div>
          By <address>{c.name}</address>
        </div>
      </li>
    ));
  }

  return <ul className={classes.comments}>{commentList}</ul>;
}

export default CommentList;
