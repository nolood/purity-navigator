import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";
import { InvocationIntroItems } from "@/widgets/invocation-intro/lib/invocation-intro-items.ts";

const InvocationIntro = () => {
  return (
    <SectionLayout>
      <div className="relative w-fit h-[250px]">
        <h1 className="text-textPrimary text-[52px]">Направить обращение</h1>
        <img
          className="absolute -top-[70px] -right-[40%] w-[180px]"
          src="/intro/writer.png"
          alt="картинка"
        />
      </div>
      <ul className="grid grid-cols-4 gap-x-[60px]">
        {InvocationIntroItems.map((item) => (
          <li key={item.id}>
            <div
              className={
                "bg-default outline outline-[1px] outline-primary rounded-full w-[34px] h-[34px] flex justify-center items-center mb-[24px]"
              }
            >
              {item.id}
            </div>
            <p className="text-textPrimary text-[18px] font-semibold">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default InvocationIntro;
