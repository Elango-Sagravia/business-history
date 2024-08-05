import PrimaryLinkButton from "../PrimaryLinkButton/PrimaryLinkButton";
import { ArrowRight } from "lucide-react";

export default function AdvertiseQuestion() {
  return (
    <section className="px-4 md:px-16 py-24">
      <div className="flex flex-col items-center">
        <h5 className="text-nl_background text-5xl leading-[3rem] text-center">
          Still got questions?
        </h5>
        <PrimaryLinkButton className="max-w-40 mt-20" href="/contact">
          <ArrowRight size={18} color="hsl(2.69 73.58% 41.57%)" />
          <span className="px-2">Contact Us</span>
        </PrimaryLinkButton>
      </div>
    </section>
  );
}
