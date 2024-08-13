import libre from "@/components/libre-font";

export default function ArchiveHeader() {
  return (
    <div className="bg-nl_sec_background">
      <div
        className={`px-4 md:px-16 py-20 bg-nl_sec_background ${libre.className} leading-tight max-w-7xl mx-auto`}
      >
        <h1 className="text-5xl text-nl_background">Archives</h1>
      </div>
    </div>
  );
}
