import PostItem from "./post-item";
import classes from "./post-grid.module.css";

export default function PostGrid({ posts }) {
  return (
    <div className={classes["post-grid"]}>
      {posts.map((p) => (
        <PostItem key={p.slug} post={p} />
      ))}
    </div>
  );
}
