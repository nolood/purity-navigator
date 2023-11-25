import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";
import { INFO } from "@/shared/lib/info.ts";

const Footer = () => {
  return (
    <SectionLayout>
      <div className="pb-[30px]">
        <div className="flex justify-between">
          <img className="h-[98px]" src={INFO.logo.main.src} alt="logo" />
          <div>
            <h4 className="text-textPrimary font-bold mb-[20px]">
              Полезные ссылки
            </h4>
            <ul className="flex flex-col gap-[12px]">
              <li>
                <span className="text-textPrimary">Сайт города</span>
              </li>
              <li>
                <span className="text-textPrimary">
                  Эллектронное правительство
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-textPrimary font-bold mb-[20px]">Документы</h4>
            <ul className="flex flex-col gap-[12px]">
              <li>
                <span className="text-textPrimary">
                  Пользовательское соглашение
                </span>
              </li>
              <li>
                <span className="text-textPrimary">
                  Порядок работы с обращениями
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-textPrimary font-bold mb-[20px]">
              Есть вопросы или предложения по порталу?
            </h4>
            <a className="underline underline-offset-4">Напишите в поддержку</a>
          </div>
          <ul className="flex flex-col gap-[50px]">
            {INFO.social.map((social) => (
              <li key={social.name}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-[40px] h-[40px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-textPrimary">
          &copy; 2023 Мэрия Екатеринбурга
        </p>
      </div>
    </SectionLayout>
  );
};

export default Footer;
