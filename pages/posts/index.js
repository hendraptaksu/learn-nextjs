import { Fragment } from "react";
import AllPosts from "@/components/post/all-posts";
import { getAllPosts } from "@/util/post";
import Head from "next/head";

export default function AllPostPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and blog posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
