import Image from "next/image";
import MemberImg from "../public/img/Member.png";
import HeroMember from "../public/img/HeroMember.png";

export default function Member() {
  return (
    <div className="container mx-auto mt-24 px-5 md:px-0">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2 font-Poppins">
          <h3 className="text-xll md:w-[505px] pr-10">
            Apa yang member kami katakan
          </h3>
          <p className="text-base font-PoppinsLight mt-3 md:w-[628px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
            nulla iaculis eget id arcu est cras. Purus at interdum est in lorem
            aliquam. Arcu, enim purus cras commodo aliquam purus a, justo nulla.
            Quis duis vulputate egestas dictum et in risus curabitur enim. Risus
            non semper pellentesque ornare accumsan malesuada. Risus leo erat
            neque rhoncus egestas id imperdiet. Dictum sed tristique lacus, ut
            vulputate dapibus elit. Gravida donec amet, non donec praesent diam
            gravida.”
          </p>
          <div className="flex mt-5 items-center">
            <Image src={MemberImg} width={45} height={45} alt={""} />
            <div className="flex flex-col ml-5">
              <h3 className="text-base font-bold">Davis Franci</h3>
              <p className="text-sm font-PoppinsLight">
                Palembang, Sumatera Selatan
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center">
          <Image src={HeroMember} width={457} height={457} alt={""} />
        </div>
      </div>
    </div>
  );
}
