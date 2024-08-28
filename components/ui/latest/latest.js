import FancyCard from "../fancyCard/fancyCard";
import HeadingWithUnderline from "../headingWithUnderline/headingWithUnderline";

import { getDocuments } from "outstatic/server";

async function getData() {
  const blogs = getDocuments("blogs", [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "readTime",
    "latest",
  ]);

  return blogs;
}

export default async function Latest() {
  const blogs = await getData();

  const blog = blogs.find((blog) => blog.latest);
  return (
    <div>
      <div className="px-8 py-16 md:px-16 max-w-7xl mx-auto">
        <HeadingWithUnderline text="Latest issue" />
        <FancyCard article={blog} />
      </div>
    </div>
  );
}
