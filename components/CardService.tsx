import Image, { StaticImageData } from "next/image";

type CardServiceProps = {
  img: StaticImageData;
  title: string;
  desc: string;
};

export default function CardService({ img, title, desc }: CardServiceProps) {
  return (
    <div className="flex flex-col">
      <Image src={img} width={50} height={50} alt="Service Materi" />
      <h3 className="text-base font-Poppins mt-5">{title} </h3>
      <p className="text-sm font-Poppins text-gray-500 mt-2">{desc}</p>
    </div>
  );
}
