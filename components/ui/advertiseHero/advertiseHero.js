import PrimaryInterLinkButton from "../PrimaryInterLinkButton/PrimaryInterLinkButton";
import { ArrowDown } from "lucide-react";
import libre from "@/components/libre-font";
import Image from "next/image";
import content from "@/content/content";

export default function AdvertiseHero() {
  return (
    <div className="flex px-4 md:px-16 py-28 min-h-[600px]">
      <div className="flex-1">
        <h1
          className={`text-nl_background text-5xl ${libre.className} leading-tight w-full`}
        >
          {content.advertise.hero.title}
        </h1>
        <p className="pt-4 pb-8">{content.advertise.hero.subTitle}</p>
        <PrimaryInterLinkButton>
          <ArrowDown size={18} color="hsl(2.69 73.58% 41.57%)" />
          <span className="px-2">Partner with Us</span>
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
  );
}
