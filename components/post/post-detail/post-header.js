import Image from "next/image";

import classes from "./post-header.module.css";

export default function PostHeader({ post }) {
  return (
    <header className={classes.header}>
      <h1>{post.title}</h1>
      <Image
        src={`/images/posts/${post.slug}/${post.image}`}
        width={300}
        height={200}
        alt={post.title}
      />
    </header>
  );
}
