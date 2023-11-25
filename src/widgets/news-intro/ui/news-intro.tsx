import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";

const NewsIntro = () => {
  return (
    <SectionLayout className="flex justify-between">
      <div className="w-1/2">
        <h1 className="text-[52px] text-textPrimary mb-[20px] leading-[70px]">
          Опубликовать сообщение или новость для жителей
        </h1>
        <p className="text-textPrimary mb-[1rem]">
          Новости служат для информирования населения по общим вопросам, о
          планируемых мероприятиях и текущей работе вашей организации.
        </p>
        <p className="text-textPrimary">
          Для публикации социально-значимой информации, без которой у жителей
          могут возникнуть проблемы (отключения, работы и тп), используйте
          сообщения
        </p>
      </div>
      <img
        width={380}
        height={520}
        className="-mt-[100px]"
        src="/intro/writer.png"
        alt="картинка"
      />
    </SectionLayout>
  );
};

export default NewsIntro;
