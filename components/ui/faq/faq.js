import FaqAccordion from "@/components/ui/faqAccordion/faqAccordion";
import libre from "@/components/libre-font";

export default function Faq() {
  return (
    <section className="px-4 lg:px-16 py-20 sm:py-32 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 shrink-[2]">
          <h3
            className={`text-4xl text-nl_background text-center sm:text-left ${libre.className}`}
          >
            FAQ
          </h3>
        </div>
        <div className="flex-1 sm:min-w-[400px] shrink-0 mt-20 sm:mt-0">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
