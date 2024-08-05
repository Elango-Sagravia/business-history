import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

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
        className="flex-1 bg-black text-white flex flex-col justify-center py-8 uppercase"
      >
        <span className="text-[12px] text-nl_background font-bold mb-2 block px-16">
          {article.published_at} <span className="text-4xl">.</span>{" "}
          {article.read_time}READ
        </span>
        <p className="text-3xl px-16 leading-10 hover:decoration-solid hover:underline">
          {article.title}
        </p>
        <div className="px-16 mt-4 flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>
          <span className="ml-4 text-[12px]">By {article.author}</span>
        </div>
      </Link>
    </div>
  );
}
