"use client";

import Image from "next/image";
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
      <Link href="/">
        <div className="w-32 md:w-48">
          <img src="/logo.png" layout="responsive" alt="Logo" />
        </div>
      </Link>

      <nav className="text-[12px] sm:text-base">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`ml-2 md:ml-6 text-black ${
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
