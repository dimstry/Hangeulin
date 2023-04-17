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
        <div className="md:pl-[70px] md:pr-[69px] py-[32px] px-5 md:px-0 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col w-[307px] font-Poppins">
            <h2 className="text-3xl md:text-4xl font-bold text-[#045285]">
              Hangeul
              <span className="text-[#EC7589]">in</span>
            </h2>
            <p className="text-base font-PoppinsLight mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              sollicitudin malesuada cras egestas gravida. Quis potenti
              suspendisse aliquet consectetur egestas et.
            </p>
          </div>
          <div className="flex flex-col md:w-[171px] md:ml-[81px] mt-3 md:mt-0">
            <h3 className="text-lg font-medium">Legalitas</h3>
            <p className="text-base font-PoppinsLight mt-7">
              Syarat & Ketentuan
            </p>
            <p className="text-base font-PoppinsLight mt-3">
              Kebijakan Privasi
            </p>
          </div>
          <div className="flex flex-col md:w-[76px] md:ml-[81px] mt-3 md:mt-0">
            <h3 className="text-lg font-medium">Jelajahi</h3>
            <p className="text-base font-PoppinsLight mt-7">Kursus</p>
            <p className="text-base font-PoppinsLight mt-3">Beasiswa</p>
            <p className="text-base font-PoppinsLight mt-3">Tour</p>
          </div>
          <div className="flex flex-col md:w-[116px] md:ml-[81px] mt-3 md:mt-0">
            <h3 className="text-lg font-medium">Perusahaan</h3>
            <p className="text-base font-PoppinsLight mt-7">Hubungi Kami</p>
            <p className="text-base font-PoppinsLight mt-3">Tentang Kami</p>
          </div>
          <div className="flex flex-col md:w-[307px] md:ml-[81px] mt-3 md:mt-0">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-base font-PoppinsLight mt-7">
              Dapatkan pembaruan yang menarik dari kami
            </p>
            <div className="mt-4 flex justify-between gap-5 md:block">
              <input
                className="md:w-[307px] flex-1 h-[40px] mt-3 rounded-lg pl-4"
                placeholder="email anda"
              />
              <button className="md:px-6 px-3 py-2 md:py-3 text-white secondary-gradient rounded-md font-Poppins mt-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white container mx-auto py-3 flex flex-col md:flex-row justify-between items-center px-5 md:px-0">
        <h4 className="text-sm md:text-base font-PoppinsLight">
          © Copyright 2021 Hak Cipta Terpelihara oleh Hangeulin
        </h4>
        <div className="flex gap-5 md:gap-0">
          <Link href="#">
            <Image src={Facebook} alt="facebook" width={30} height={30} />
          </Link>
          <Link href="#" className="md:ml-[16px]">
            <Image src={Instagram} alt="instagram" width={30} height={30} />
          </Link>
          <Link href="#" className="md:ml-[16px]">
            <Image src={Twitter} alt="twitter" width={30} height={30} />
          </Link>
          <Link href="#" className="md:ml-[16px]">
            <Image src={Line} alt="line" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
