import GridContainer from "../gridContainer/gridContainer";
import HeadingWithUnderline from "../headingWithUnderline/headingWithUnderline";
// import blogs from "@/blogs";
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
  ]);

  return blogs;
}

export default async function ArchiveHome() {
  const blogs = await getData();

  return (
    <div className="px-8 pb-36 md:px-16 pt-8 max-w-7xl mx-auto">
      <HeadingWithUnderline text="Archives" />
      <GridContainer hideButton={false} articles={blogs.splice(0, 9)} />
    </div>
  );
}
