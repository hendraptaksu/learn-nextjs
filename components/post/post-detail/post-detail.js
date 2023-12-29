import PostContent from "./post-content";
import PostHeader from "./post-header";

import classes from "./post-detail.module.css";

export default function PostDetail({ post }) {
  return (
    <div className={classes.post}>
      <PostHeader post={post} />
      <PostContent post={post} />
    </div>
  );
}
