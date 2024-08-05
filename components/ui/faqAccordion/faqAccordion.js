import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <Accordion type="multiple" collapsible="true">
      <AccordionItem value="item-1" className="pt-0">
        <AccordionTrigger className="font-normal no-underline pt-0">
          How do I subscribe to the newsletter?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          Our newsletters are sent out weekly, ensuring you stay updated with
          the latest articles, news, and exclusive content without overwhelming
          your inbox. Occasionally, we might send special editions or important
          updates, but we promise not to spam you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-normal no-underline">
          How do I subscribe to the newsletter?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          Our newsletters are sent out weekly, ensuring you stay updated with
          the latest articles, news, and exclusive content without overwhelming
          your inbox. Occasionally, we might send special editions or important
          updates, but we promise not to spam you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-normal no-underline">
          How do I subscribe to the newsletter?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          Our newsletters are sent out weekly, ensuring you stay updated with
          the latest articles, news, and exclusive content without overwhelming
          your inbox. Occasionally, we might send special editions or important
          updates, but we promise not to spam you.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
