import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import content from "@/content/content";

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible="true">
      {content.contactPage.faqSection.list.map((el, index) => (
        <AccordionItem
          value={`item-${index}`}
          className={`${index === 0 && "pt-0"}`}
          key={`faq-item-${index}`}
        >
          <AccordionTrigger
            className={`text-left font-normal no-underline ${
              index === 0 && "pt-0"
            }`}
          >
            {el.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm">{el.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
