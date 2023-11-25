import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";
import { Button, Modal, Switcher, TextArea } from "@/shared/ui";
import { useState } from "react";
import FormThemes from "@/features/form-themes/ui/form-themes.tsx";
import FormMap from "@/features/form-map/ui/form-map.tsx";
import FileUploader from "@/features/file-uploader/ui/file-uploader.tsx";
import { SupportIcon } from "@/shared/ui/icons";
import SurveyCreateModal from "@/features/survey-create/ui/survey-create-modal.tsx";
import { createPortal } from "react-dom";

const options = [
  { id: 1, title: "Сообщение" },
  { id: 2, title: "Новость" },
];

const NewsCreate = () => {
  const [activeOption, setActiveOption] = useState<number>(options[1].id);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <SectionLayout className={"-translate-y-[120px]"}>
      <Switcher
        defaultValue={2}
        options={options}
        onChange={(item) => setActiveOption(item.id)}
      />
      <h2 className="mt-[64px] text-textPrimary text-[34px] mb-[56px]">
        {activeOption === options[1].id ? "Новость" : "Сообщение"}
      </h2>
      <div className="flex flex-col gap-[90px]">
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              {activeOption === options[1].id
                ? "Название*"
                : "Текст сообщения*"}
            </h4>
            <p>
              {activeOption === options[1].id
                ? "Придумайте название для новости"
                : "Напишите текст сообщения. Можете использовать Markdown для разметки"}
            </p>
          </div>
          <TextArea
            maxLength={4000}
            placeholder={"Мусор на проезжей части возле сквера Вяземскоого"}
          />
        </div>
        {activeOption === options[1].id && (
          <div className="flex gap-[100px]">
            <div className={"min-w-[300px] max-w-[300px]"}>
              <h4
                className={"text-textPrimary font-bold text-[18px] mb-[12px]"}
              >
                Текст новости
              </h4>
              <p>
                Напишите текст новости. Можете использовать Markdown для
                разметки
              </p>
            </div>
            <TextArea
              maxLength={4000}
              placeholder={"Мусор на проезжей части возле сквера Вяземскоого"}
            />
          </div>
        )}
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Тема*
            </h4>
            <p>
              {activeOption === options[1].id
                ? "Может быть определена автоматически по названию или тексту новости. В случае несовпадения выберите самостоятельно."
                : ""}
            </p>
          </div>
          <FormThemes />
        </div>
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Адрес или местоположение
            </h4>
            <p>
              {activeOption === options[1].id
                ? "Выберите точку на карте или адреса объектов, к которым относится новость"
                : "Выберите точку на карте или адреса объектов, к которым относится сообщение"}
            </p>
          </div>
          <FormMap />
        </div>
        <div className="flex gap-[100px]">
          <div className={"min-w-[300px] max-w-[300px]"}>
            <h4 className={"text-textPrimary font-bold text-[18px] mb-[12px]"}>
              Добавить медиа-контент
            </h4>
            <p>
              Вы можете загрузить до 5 файлов. Максимальный размер файла - 100
              МБ
            </p>
          </div>
          <FileUploader />
        </div>
        {activeOption === options[1].id && (
          <div className="flex gap-[100px]">
            <div className={"min-w-[300px] max-w-[300px]"}>
              <h4
                className={"text-textPrimary font-bold text-[18px] mb-[12px]"}
              >
                Провести опрос
              </h4>
              <p>Вы можете создать голосование в новости</p>
            </div>
            <Button
              variant={"secondary"}
              className={"h-max"}
              onClick={() => setIsModalVisible(true)}
            >
              Создать опрос
            </Button>
            {createPortal(
              <Modal
                visible={isModalVisible}
                closeFn={() => setIsModalVisible(false)}
              >
                <SurveyCreateModal closeFn={() => setIsModalVisible(false)} />
              </Modal>,
              document.body,
            )}
          </div>
        )}
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

export default NewsCreate;
