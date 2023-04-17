import Facebook from "../public/img/facebook.png";
import Instagram from "../public/img/instagram.png";
import Twitter from "../public/img/twitter.png";
import Line from "../public/img/line.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="mt-24 bg-[#FAE3A4]">
        <div className="pl-[70px] pr-[69px] py-[32px] flex justify-between">
          <div className="flex flex-col w-[307px] font-Poppins">
            <h2 className="text-4xl font-bold text-[#045285]">
              Hangeul
              <span className="text-[#EC7589]">in</span>
            </h2>
            <p className="text-base font-PoppinsLight mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              sollicitudin malesuada cras egestas gravida. Quis potenti
              suspendisse aliquet consectetur egestas et.
            </p>
          </div>
          <div className="flex flex-col w-[171px] ml-[81px]">
            <h3 className="text-lg font-medium">Legalitas</h3>
            <p className="text-base font-PoppinsLight mt-7">
              Syarat & Ketentuan
            </p>
            <p className="text-base font-PoppinsLight mt-3">
              Kebijakan Privasi
            </p>
          </div>
          <div className="flex flex-col w-[76px] ml-[81px]">
            <h3 className="text-lg font-medium">Jelajahi</h3>
            <p className="text-base font-PoppinsLight mt-7">Kursus</p>
            <p className="text-base font-PoppinsLight mt-3">Beasiswa</p>
            <p className="text-base font-PoppinsLight mt-3">Tour</p>
          </div>
          <div className="flex flex-col w-[116px] ml-[81px]">
            <h3 className="text-lg font-medium">Perusahaan</h3>
            <p className="text-base font-PoppinsLight mt-7">Hubungi Kami</p>
            <p className="text-base font-PoppinsLight mt-3">Tentang Kami</p>
          </div>
          <div className="flex flex-col w-[307px] ml-[81px]">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-base font-PoppinsLight mt-7">
              Dapatkan pembaruan yang menarik dari kami
            </p>
            <div className="mt-4">
              <input
                className="w-[307px] h-[40px] mt-3 rounded-lg pl-4"
                placeholder="email anda"
              />
              <button className="px-6 py-3 text-white secondary-gradient rounded-md font-Poppins mt-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white container mx-auto py-3 flex justify-between items-center">
        <h4 className="text-base font-PoppinsLight">
          © Copyright 2021 Hak Cipta Terpelihara oleh Hangeulin
        </h4>
        <div className="flex">
          <Link href="#">
            <Image src={Facebook} alt="facebook" width={30} height={30} />
          </Link>
          <Link href="#" className="ml-[16px]">
            <Image src={Instagram} alt="instagram" width={30} height={30} />
          </Link>
          <Link href="#" className="ml-[16px]">
            <Image src={Twitter} alt="twitter" width={30} height={30} />
          </Link>
          <Link href="#" className="ml-[16px]">
            <Image src={Line} alt="line" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
