import ServiceImg from "@/public/img/Service.png";
import Image from "next/image";

import Materi from "@/public/img/Materi.png";
import Akses from "@/public/img/Akses.png";
import Sertifikat from "@/public/img/Sertifikat.png";
import Pengajar from "@/public/img/Pengajar.png";
import CardService from "./CardService";

export default function Service() {
  return (
    <div className="container mx-auto mt-24 px-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-Poppins md:leading-[3.5rem]">
            Layanan Kami Dalam Membantu Anda
          </h2>
          <Image
            src={ServiceImg}
            alt="Service"
            width={528}
            height={349}
            className="mt-5"
          />
        </div>
        <div className="md:w-1/2 md:mt-16">
          <div className="grid grid-cols-2 gap-x-5 gap-y-6">
            <CardService
              img={Materi}
              title="Materi Update"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
            <CardService
              img={Akses}
              title="Akses Selamanya"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
            <CardService
              img={Sertifikat}
              title="Sertifikat Kompeten"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
            <CardService
              img={Pengajar}
              title="Pengajar Berpengalaman"
              desc="Tincidunt pretium amet ut vestibulum commodo in nulla lacus, convallis. Molestie nulla venenatis facilisi at."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
