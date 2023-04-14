import Image from "next/image";
import HeroImage from "../public/img/Hero.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/3 flex items-center">
            <div className="flex flex-col">
              <h2 className="text-4xl font-Poppins">
                Solusi <span className="text-blue-800">Terbaik</span> Untuk
                Belajar Bahasa Korea
              </h2>
              <p className="text-base font-thin font-Poppins text-gray-500 mt-[16px] pr-10">
                Kursus online gratis yang menyediakan beragam fasilitas dan
                dapat membantu dalam mengasah kemampuan berbahasa koreamu
              </p>
              <div className="flex mt-7">
                <Link
                  href="/register"
                  className="px-4 py-3 bg-yellow-500 rounded-md"
                >
                  Gabung Sekarang
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex justify-end">
            <Image src={HeroImage} width={700} height={600} alt={""} />
          </div>
        </div>
      </div>
    </>
  );
}
