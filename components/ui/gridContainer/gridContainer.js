import Image from "next/image";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function GridContainer({
  hideButton,
  md_col = 2,
  lg_col = 3,
  articles,
}) {
  return (
    <>
      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-cols-${md_col} lg:grid-cols-${lg_col} mt-8`}
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
                src={item.banner_image}
                alt="Example"
                layout="fill"
                objectFit="cover"
                className="block"
              />
            </div>
            <span className="text-[10px] text-nl_background my-2 block font-bold uppercase">
              {item.published_at} <span>.</span> {item.read_time} READ
            </span>
            <p className="text-lg">{item.title}</p>
          </Link>
        ))}
      </div>

      {!hideButton && (
        <div className="flex justify-center mt-16 ">
          <Link
            className="flex px-4 py-2 border items-center gap-2"
            href="/archives"
          >
            <BookOpen size={18} color="hsl(2.69 73.58% 41.57%)" />
            See archives
          </Link>
        </div>
      )}
    </>
  );
}
