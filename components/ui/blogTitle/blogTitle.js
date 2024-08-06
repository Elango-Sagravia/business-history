import libre from "@/components/libre-font";

export default function BlogTitle({ title }) {
  return (
    <h1
      className={`text-5xl w-5/6 text-nl_background ${libre.className} leading-tight`}
    >
      {title}
    </h1>
  );
}
