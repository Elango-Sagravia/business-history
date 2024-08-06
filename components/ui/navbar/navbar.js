"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
const routes = [
  { path: "/advertise", name: "Advertise" },
  { path: "/archives", name: "Archives" },
  { path: "/contact", name: "Contact us" },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 bg-nl_sec_background px-4 md:px-16 py-6 flex justify-between items-center border-b border-nl_button_border z-10">
      <Link href="/" className="text-2xl text-black">
        Logotype
      </Link>
      <nav className="text-base">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`ml-6 text-black ${
              pathname === route.path && "underline underline-offset-4"
            }`}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
