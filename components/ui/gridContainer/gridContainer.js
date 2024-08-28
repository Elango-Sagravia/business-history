import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import libre from "@/components/libre-font";
import changeFormat from "@/components/dateFormat";

export default function GridContainer({
  hideButton,
  md_col = 2,
  lg_col = 3,
  articles,
}) {
  return (
    <>
      <div
        className={`grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-${md_col} lg:grid-cols-${lg_col} mt-8`}
      >
        {/* Component rendering */}
        {articles.map((item, i) => (
          <Link
            href={`/archives/${item.slug}`}
            key={i}
            className="flex flex-col min-w-[250px] sm:min-w-[360px] md:min-w-[360px] relative min-h-[300px]"
          >
            <div className="relative min-h-[250px]">
              <Image
                src={item.coverImage}
                alt="Example"
                layout="fill"
                objectFit="cover"
                className="block"
              />
            </div>
            <div className="flex items-center gap-2 py-2 text-nl_background">
              <p className="text-[10px] font-bold uppercase">
                {changeFormat(item.publishedAt)}
              </p>
              <p className="rounded-full bg-nl_background w-[5px] h-[5px]"></p>
              <p className="text-[10px] font-bold uppercase">
                {item.readTime} MIN READ
              </p>
            </div>
            <p className={`text-lg ${libre.className}`}>{item.title}</p>
          </Link>
        ))}
      </div>

      {!hideButton && (
        <div className="flex justify-center mt-16 ">
          <Link
            className="flex px-4 py-2 border items-center gap-2"
            href="/archives"
          >
            <BookOpen size={18} color="hsl(10 62% 34%)" />
            See archives
          </Link>
        </div>
      )}
    </>
  );
}
