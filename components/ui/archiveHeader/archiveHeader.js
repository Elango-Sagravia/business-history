import libre from "@/components/libre-font";

export default function ArchiveHeader() {
  return (
    <div className="">
      <div
        className={`px-4 md:px-16 pt-20 ${libre.className} leading-tight max-w-7xl mx-auto`}
      >
        <h1 className="text-4xl text-nl_background">Archives</h1>
      </div>
    </div>
  );
}
