import ArchiveHeader from "@/components/ui/archiveHeader/archiveHeader";
import GridContainer from "@/components/ui/gridContainer/gridContainer";
import Subscribe from "@/components/ui/subscribe/subscribe";
import blogs from "@/blogs";

export default function archive() {
  return (
    <main>
      <ArchiveHeader />
      <section className="px-8 md:px-16 py-32">
        <GridContainer hideButton={true} articles={blogs} />
      </section>
      <Subscribe />
    </main>
  );
}
