import { Fragment } from "react";
import FeaturedPosts from "@/components/posts/featured-posts";
import Hero from "@/components/ui/hero";
import { getFeaturedPosts } from "@/util/post";

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
