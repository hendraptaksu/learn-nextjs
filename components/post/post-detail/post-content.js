import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import classes from "./post-content.module.css";

export default function PostContent({ post }) {
  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(props) {
      const { children, className, node, ...rest } = props;
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={atomDark}
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
  );
}
