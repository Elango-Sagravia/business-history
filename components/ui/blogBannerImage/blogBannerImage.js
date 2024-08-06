import { AspectRatio } from "@/components/ui/aspect-ratio";

import Image from "next/image";

export default function BlogBannerImage({ url }) {
  return (
    <div className="w-full relative mt-12 mb-12">
      <AspectRatio ratio={16 / 9}>
        <Image src={url} alt="Example" layout="fill" objectFit="cover" />
      </AspectRatio>
    </div>
  );
}
