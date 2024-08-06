import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 md:px-16 py-8 bg-black text-white">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <p className="text-2xl">Logotype</p>
          <p className="mt-4 text-[12px] text-gray-400">
            &copy; 2024 All rights reserved
          </p>
        </div>
        <div>
          <ul>
            <li className="px-8 py-2">
              <Link href="/advertise">Advertise</Link>
            </li>
            <li className="px-8 py-2">
              <Link href="/archives">Archives</Link>
            </li>
            <li className="px-8 py-2">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
