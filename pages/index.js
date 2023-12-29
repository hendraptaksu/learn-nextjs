import Hero from "@/components/site/hero";
import { Fragment } from "react";
import FeaturedPosts from "@/components/post/featured-posts";
import { getFeaturedPosts } from "@/util/post";
import Head from "next/head";

export default function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Hendra's Blog</title>
        <meta
          name="description"
          content="I post about programming and Go programming."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getFeaturedPosts(),
    },
  };
}
