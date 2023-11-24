import IntroForm from "@/features/intro-form/ui/intro-form.tsx";

const Intro = () => {
  return (
    <section className={"section"}>
      <div className="container flex flex-col items-center relative">
        <h1 className="text-primary text-[112px] text-center leading-[110px] mb-[100px]">
          Чистый и красивый город - это просто
        </h1>
        <IntroForm />
        <p className="font-caveat text-primary text-[32px] self-end w-1/2 mt-[58px]">
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
      </div>
    </section>
  );
};

export default Intro;
