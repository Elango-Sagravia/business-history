import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import libre from "@/components/libre-font";

export default function FancyCard({ article }) {
  return (
    <div className="flex mt-8 min-h-96 md:min-h-[410px]">
      <div className="hidden flex-1 sm:block relative">
        <Image
          src={article.banner_image}
          alt="Example"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Link
        href={`archives/${article.slug}`}
        className="flex-1 bg-black text-white flex flex-col justify-center py-8"
      >
        <div className="flex items-center gap-2 py-4 px-4 sm:px-16 text-nl_background">
          <p className="text-[12px] font-bold uppercase">
            {article.published_at}
          </p>
          <p className="rounded-full bg-nl_background w-[5px] h-[5px]"></p>
          <p className="text-[12px] font-bold uppercase">
            {article.read_time} READ
          </p>
        </div>
        <p
          className={`text-3xl px-4 sm:px-16 leading-tight hover:decoration-solid hover:underline ${libre.className}`}
        >
          {article.title}
        </p>
      </Link>
    </div>
  );
}
