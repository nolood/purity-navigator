import IntroForm from "@/features/intro-form/ui/intro-form.tsx";
import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";

const Intro = () => {
  return (
    <SectionLayout className={"flex flex-col items-center relative"}>
      <h1 className="text-textPrimary text-[112px] text-center leading-[110px] mb-[100px]">
        Чистый и красивый город - это просто
      </h1>
      <IntroForm />
      <p className="font-caveat text-textPrimary text-[32px] self-end w-1/2 mt-[58px]">
        Сообщите о проблеме с ЖКХ, благоустройством и другими тематиками, и
        следите за их исправлением
      </p>
      <img
        src="/intro/intro-1.png"
        alt="фотограф"
        className={"absolute top-0 left-0"}
      />
      <img
        src="/intro/intro-2.png"
        alt="фотограф"
        className={"absolute bottom-0 right-[-100px]"}
      />
    </SectionLayout>
  );
};

export default Intro;
