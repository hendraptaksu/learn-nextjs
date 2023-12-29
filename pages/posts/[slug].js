import PostDetail from "@/components/post/post-detail/post-detail";
import { getPostData, getPostsFromDirectory } from "@/util/post";
import { Fragment } from "react";
import Head from "next/head";

export default function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostDetail post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;

  return {
    props: {
      post: getPostData(slug + ".md"),
    },
    revalidate: 1800,
  };
}

export function getStaticPaths() {
  const postFiles = getPostsFromDirectory();

  const pathParams = postFiles.map((pf) => {
    const slug = pf.replace(/\.md$/, "");
    return { params: { slug: slug } };
  });

  return {
    paths: pathParams,
    fallback: false,
  };
}
