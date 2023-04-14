import Link from "next/link";
import Image from "next/image";

import Hangeulin from "../public/img/Hangeulin.png";

export default function Navbar() {
  return (
    <nav className="container mx-auto h-[80px] flex justify-center mt-5">
      <ul className="flex items-center justify-between py-4 w-full">
        <Image
          src={Hangeulin}
          width={195}
          height={57}
          alt={""}
          className="z-10 cursor-pointer"
        />
        <div className="flex space-x-6 font-Poppins">
          <li>
            <Link href="/">Kursus</Link>
          </li>
          <li>
            <Link href="/">Beasiswa</Link>
          </li>
          <li>
            <Link href="/">Travel</Link>
          </li>
          <li>
            <Link href="/">Tentang Kami</Link>
          </li>
        </div>
        <div className="flex space-x-4 font-Poppins">
          <li>
            <Link
              href="/"
              className="py-[0.6rem] px-4 bg-yellow-500 rounded-md"
            >
              Masuk
            </Link>
          </li>
          <li>
            <Link href="/">Daftar</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
