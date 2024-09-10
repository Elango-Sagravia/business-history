"use client";

import { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import libre from "@/components/libre-font";
import changeFormat from "@/components/dateFormat";

export default function FancyCard({ article }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex mt-8 min-h-96 md:min-h-[410px]">
      <div className="hidden flex-1 sm:block relative">
        <Link href={`archives/${article.slug}`}>
          <Image
            src={article.coverImage}
            alt="Example"
            layout="fill"
            objectFit="cover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </div>
      <Link
        href={`archives/${article.slug}`}
        className="flex-1 bg-nl_new_sec_background text-black flex flex-col justify-center py-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-2 py-4 px-4 sm:px-16 text-nl_background">
          <p className="text-[12px] font-bold uppercase">
            {changeFormat(article.publishedAt)}
          </p>
          <p className="rounded-full bg-nl_background w-[5px] h-[5px]"></p>
          <p className="text-[12px] font-bold uppercase">
            {article.readTime} MIN READ
          </p>
        </div>
        <p
          className={`text-3xl px-4 sm:px-16 leading-tight ${
            isHovered ? "underline decoration-solid" : ""
          } ${libre.className}`}
        >
          {article.title}
        </p>
      </Link>
    </div>
  );
}
