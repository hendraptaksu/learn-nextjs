import PostGrid from "./post-grid";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts({ posts }) {
  return (
    <div className={classes.featured}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </div>
  );
}
