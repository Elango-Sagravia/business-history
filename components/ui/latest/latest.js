import FancyCard from "../fancyCard/fancyCard";
import HeadingWithUnderline from "../headingWithUnderline/headingWithUnderline";
import blogs from "@/blogs";

export default function Latest() {
  const post = blogs.find((blog) => blog.slug === "first-blog");
  return (
    <div>
      <div className="px-8 py-16 md:px-16 max-w-7xl mx-auto">
        <HeadingWithUnderline text="Latest issue" />
        <FancyCard article={post} />
      </div>
    </div>
  );
}
