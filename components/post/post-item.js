import Image from "next/image";

import classes from "./post-item.module.css";
import Link from "next/link";

/*
{
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt:
    "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
  date: "2022-02-10",
},

*/

export default function PostItem({ post }) {
  return (
    <div className={classes["post-item"]}>
      <Link href={"/posts/" + post.slug}>
        <Image
          src={`/images/posts/${post.slug}/${post.image}`}
          width={600}
          height={400}
          alt={post.title}
        />
        <div className={classes.content}>
          <h4>{post.title}</h4>
          <time>{post.date}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
