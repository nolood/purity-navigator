import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";
import { Button, TextArea } from "@/shared/ui";
import FormThemes from "@/features/form-themes/ui/form-themes.tsx";
import FormMap from "@/features/form-map/ui/form-map.tsx";
import FileUploader from "@/features/file-uploader/ui/file-uploader.tsx";
import InvocationUserData from "@/features/invocation-user-data/ui/invocation-user-data.tsx";
import { SupportIcon } from "@/shared/ui/icons";

const InvocationCreate = () => {
  return (
    <SectionLayout>
      <h2 className="text-textPrimary text-[34px] mb-[56px]">Ваше обращение</h2>
      <div className="flex flex-col gap-[90px]">
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Текст обращения*
            </h4>
            <p>Опишите суть проблемы или вопроса</p>
          </div>
          <TextArea maxLength={4000} />
        </div>
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Тема*
            </h4>
            <p>С выбранной темой обращение быстрее попадёт в нужную службу.</p>
          </div>
          <FormThemes />
        </div>
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Адрес или местоположение
            </h4>
            <p>
              Выберите точку на карте или введите адреса объекта, по которому вы
              обращаетесь. Это тоже существенно ускорит работу по обращению.
            </p>
          </div>
          <FormMap />
        </div>
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Контактные данные заявителя*
            </h4>
            <p>Нужны для оперативной связи с вами</p>
          </div>
          <InvocationUserData />
        </div>
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Приложить файлы
            </h4>
            <p>
              Вы можете загрузить до 5 файлов. Максимальный размер файла - 25 МБ
            </p>
          </div>
          <FileUploader />
        </div>
      </div>
      <div className="flex items-center w-full justify-between mt-[66px]">
        <div className="flex items-center gap-[12px]">
          <Button>Отправить</Button>
          <Button variant={"secondary"}>Сохранить и закрыть</Button>
        </div>
        <div className="flex gap-[12px] cursor-pointer">
          <SupportIcon />
          <span className="text-textPrimary underline underline-offset-4">
            Написать в тех поддержку
          </span>
        </div>
      </div>
    </SectionLayout>
  );
};

export default InvocationCreate;
