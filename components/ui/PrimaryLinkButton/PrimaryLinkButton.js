import Link from "next/link";

export default function PrimaryLinkButton({ children, className, href }) {
  return (
    <div className="flex">
      <Link
        href={href}
        className={`px-4 py-2 border border-nl_button_border bg-white flex items-center  ${className}`}
      >
        {children}
      </Link>
    </div>
  );
}
