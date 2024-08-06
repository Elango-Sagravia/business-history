import Link from "next/link";

export default function PrimaryInterLinkButton({ children, className }) {
  return (
    <div className="flex">
      <a
        className={`px-4 py-2 border border-nl_button_border bg-white flex items-center  ${className}`}
        href="#advertise-form"
      >
        {children}
      </a>
    </div>
  );
}
