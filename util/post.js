import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dirPath = path.join(process.cwd(), "posts");

/**
 * Get list of posts' file name from posts directory.
 */
export function getPostsFromDirectory() {
  return fs.readdirSync(dirPath);
}

/**
 * Get all posts from posts directory. Returns list of posts data.
 */
export function getAllPosts() {
  const postFiles = getPostsFromDirectory();

  const sortedPosts = postFiles
    .map((pf) => getPostData(pf))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const posts = getAllPosts();
  return posts.filter((post) => post.isFeatured);
}

/**
 * Get post data from a file
 * @param {string} fileName
 */
export function getPostData(fileName) {
  const fileContent = fs.readFileSync(path.join(dirPath, fileName), "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: path.parse(fileName).name,
    ...data,
    content: content,
  };
}
