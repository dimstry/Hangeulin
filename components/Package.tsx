import Image from "next/image";

import Checklist from "@/public/img/Checklist.png";
import ChecklistSelect from "@/public/img/ChecklistSelect.png";

export default function Package() {
  return (
    <div className="container mx-auto mt-24 px-5 md:px-0">
      <h2 className="text-3xl font-Poppins text-center">Pilih Paket</h2>
      <div className="md:w-[59%] mx-auto mt-5">
        <p className="text-lg text-center font-thin">
          Quisque aliquam, faucibus est massa phasellus turpis pellentesque nam
          tristique. Facilisi varius sed ridiculus cras lacus. Elementum in in
          convallis sit vitae donec amet.
        </p>
      </div>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-[24px] items-center mt-[24px]">
        <div className="bg-[#FEF7E5] md:w-[417px] h-[469px] rounded-lg p-6">
          <h3 className="font-Poppins font-semibold text-xl text-center">
            Paket 1
          </h3>
          <div className="flex flex-col mt-6 gap-y-[13.5px]">
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Vitae sagittis</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Quis ipsum gravida in</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">
                Nibh mauris erat tristique sagittis nunc
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Tellus nunc fermentum eget eu</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Porttitor egestas lobortis elit</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Consequat sed id ornare odio</p>
            </div>
            <div className="flex justify-center mt-[35px]">
              <span className="px-4 py-[0.5rem] font-Poppins primary-gradient rounded-md">
                Beli Kelas
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#F4C237] md:w-[417px] h-[571px] rounded-lg p-6">
          <h3 className="font-Poppins font-semibold text-xl text-center">
            Paket 2
          </h3>
          <div className="flex flex-col mt-6 gap-y-[13.5px]">
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Vitae sagittis</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Quis ipsum gravida in</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">
                Nibh mauris erat tristique sagittis nunc
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Tellus nunc fermentum eget eu</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Porttitor egestas lobortis elit</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Consequat sed id ornare odio</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Consequat sed id ornare odio</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={ChecklistSelect} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Consequat sed id ornare odio</p>
            </div>
            <div className="flex justify-center mt-[35px]">
              <span className="px-4 py-[0.5rem] font-Poppins secondary-gradient text-white rounded-md">
                Beli Kelas
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#FEF7E5] md:w-[417px] h-[469px] rounded-lg p-6">
          <h3 className="font-Poppins font-semibold text-xl text-center">
            Paket 3
          </h3>
          <div className="flex flex-col mt-6 gap-y-[13.5px]">
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Vitae sagittis</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Quis ipsum gravida in</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">
                Nibh mauris erat tristique sagittis nunc
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Tellus nunc fermentum eget eu</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Porttitor egestas lobortis elit</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Checklist} width={35} height={35} alt="chek" />
              <p className="font-Poppins">Consequat sed id ornare odio</p>
            </div>
            <div className="flex justify-center mt-[35px]">
              <span className="px-4 py-[0.5rem] font-Poppins primary-gradient rounded-md">
                Beli Kelas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
