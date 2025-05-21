import Image from "next/image";
import titleLayer from "@/images/title_layer.png";
import mainGirl1 from "@/images/main_girl1.png";
import mainBrush from "@/images/main_brush.jpg";
import mainBrushSound from "@/images/main_brushSound.png";
import mainGirl2 from "@/images/main_girl2.png";
import Speech from "@/components/speech";
import FortuneGraph from "@/components/fortuneGraph";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gradient-custom backpattern">
        <div className="flex flex-col items-center gap-3 mb-10">
          <h1 className="text-xl text-white">제 1장</h1>
          <Image src={titleLayer} alt="no image" />
          <h1 className="text-xl text-white">나의 사주 팔자</h1>
        </div>
        <div className="mb-10">
          <Image
            src={mainGirl1}
            alt="no image"
            className="w-80 ml-24 transform scale-x-[-1]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
              maskSize: '100% 100%',
              maskRepeat: 'no-repeat',
            }}
          />
          <Speech text={"이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요."} />
        </div>
        <div className="relative mb-64">
          <Image src={mainBrushSound} alt="no image" className="absolute z-10 ml-52 mt-5" />
          <Image src={mainBrush} alt="no image" className="absolute ml-64" />
        </div>
        <Speech text={"제가 OO님의 사주를 보기 쉽게 표로 정리했어요."} direction="bottom" />
        <Image src={mainGirl2} alt="no image" className="w-full" />
        <FortuneGraph />
      </div>
    </div>
  );
}