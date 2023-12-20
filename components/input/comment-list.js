import classes from "./comment-list.module.css";

function CommentList({ comments }) {
  let commentList = <p>No comments posted for this events.</p>;

  if (comments.length > 0) {
    commentList = comments.map((c) => (
      <li key={c._id}>
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
