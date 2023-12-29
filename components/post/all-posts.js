import PostGrid from "./post-grid";
import classes from "./all-posts.module.css";

export default function AllPosts({ posts }) {
  return (
    <div className={classes.allposts}>
      <h2>All Posts</h2>
      <PostGrid posts={posts} />
    </div>
  );
}
