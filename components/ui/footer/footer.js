import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 md:px-16 py-8 bg-black text-white ">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <Link href="/">
            <div className="w-32 md:w-48">
              <img src="/logo-dark.png" layout="responsive" alt="Logo" />
            </div>
          </Link>
          <p className="mt-4 text-[12px] text-gray-400">
            &copy; 2024 All rights reserved
          </p>
        </div>
        <div>
          <ul>
            <li className="px-8 py-2 hover:underline underline-offset-8">
              <Link href="/advertise">Advertise</Link>
            </li>
            <li className="px-8 py-2 hover:underline underline-offset-8">
              <Link href="/archives">Archives</Link>
            </li>
            <li className="px-8 py-2 hover:underline underline-offset-8">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
