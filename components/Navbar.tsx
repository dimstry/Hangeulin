import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import Hangeulin from "../public/img/Hangeulin.png";
import Close from "../public/close.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // cek scroll atau tidak
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  // cek lebar layar
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  }, []);

  return (
    <nav
      className={`container mx-auto h-[80px] w-full md:mt-5 px-5 md:px-0 z-50 fixed md:relative top-0 transition-all ${
        scroll ? "bg-white md:bg-transparent" : ""
      } ${isOpen ? `h-[70px] overflow-hidden` : "h-[250px] md:h-[80px]"}`}
    >
      <ul className="flex flex-col md:flex-row md:items-center justify-between py-4 w-full gap-5 md:gap-0">
        <div className="flex items-center justify-between">
          <Image
            src={Hangeulin}
            width={195}
            height={57}
            alt={""}
            className="z-10 cursor-pointer"
          />
          <button
            className="flex items-center space-x-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <Image src={Close} width={35} height={35} alt={""} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-0 md:space-x-6 font-Poppins">
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
