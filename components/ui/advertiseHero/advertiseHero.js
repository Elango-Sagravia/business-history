import PrimaryInterLinkButton from "../PrimaryInterLinkButton/PrimaryInterLinkButton";
import { ArrowDown } from "lucide-react";
import libre from "@/components/libre-font";
import Image from "next/image";
import content from "@/content/content";
import { cn } from "@/lib/utils";

export default function AdvertiseHero() {
  return (
    <div>
      <div className="flex px-4 md:px-16 py-28 min-h-[650px] max-w-7xl mx-auto">
        <div className="flex-1">
          <h1
            className={`${cn(
              `text-nl_background text-4xl sm:text-5xl ${libre.className} leading-tight sm:leading-tight`
            )}`}
          >
            {content.advertise.hero.title}
          </h1>
          <p className="pt-4 pb-8">{content.advertise.hero.subTitle}</p>
          <PrimaryInterLinkButton>
            <ArrowDown size={18} color="hsl(10 62% 34%)" />
            <span className="px-2">{content.advertise.hero.buttonText}</span>
          </PrimaryInterLinkButton>
        </div>
        <div className="hidden flex-1 lg:block relative">
          <Image
            src={"/sdvertise-hero.svg"}
            layout="fill"
            objectFit="cover"
            alt="Home screen banner image"
          />
        </div>
      </div>
    </div>
  );
}
