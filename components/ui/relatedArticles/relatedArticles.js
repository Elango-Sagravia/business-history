import HeadingWithUnderline from "@/components/ui/headingWithUnderline/headingWithUnderline";
import GridContainer from "../gridContainer/gridContainer";

function RelatedArticles({ articles }) {
  return (
    <div className="mt-16">
      <HeadingWithUnderline text="Related articles" />
      <GridContainer md_col={1} lg_col={2} articles={articles} />
    </div>
  );
}

export default RelatedArticles;
