import GridContainer from "../gridContainer/gridContainer";
import HeadingWithUnderline from "../headingWithUnderline/headingWithUnderline";
import blogs from "@/blogs";

export default function ArchiveHome() {
  return (
    <div className="px-8 pb-36 md:px-16 pt-8">
      <HeadingWithUnderline text="Archive" />
      <GridContainer hideButton={false} articles={blogs} />
    </div>
  );
}
