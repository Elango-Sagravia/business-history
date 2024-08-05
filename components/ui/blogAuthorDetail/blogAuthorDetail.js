import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BlogAuthorDetail({ name, img }) {
  return (
    <div className="mt-6 flex items-center gap-4">
      <Avatar>
        <AvatarImage src={img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-[12px]">By {name}</span>
    </div>
  );
}
