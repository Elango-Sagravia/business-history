import { Separator } from "@/components/ui/separator";

export default function HeadingWithUnderline({ text }) {
  return (
    <>
      <h2 className="text-2xl">{text}</h2>
      <Separator className="bg-black mt-1" />
    </>
  );
}
