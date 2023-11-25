import { Button, Input } from "@/shared/ui";
import { useState } from "react";

const SurveyCreateModal = ({ closeFn }: { closeFn: () => void }) => {
  const [length, setLength] = useState<number>(3);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="py-[24px] px-[32px] bg-white rounded-[16px] w-1/2"
    >
      <h3 className="text-textPrimary font-bold">Опрос</h3>
      <div className="w-full h-[1px] bg-default mb-[40px] mt-[36px]"></div>
      <p className="mb-[12px]">Вопрос</p>
      <Input placeholder={"Введите вопрос"} />
      <h3 className="text-textPrimary mt-[36px] mb-[12px]">
        Варианты ответов (до 5 вариантов)
      </h3>
      <div className="flex flex-col gap-[12px] mb-[12px]">
        {new Array(length).fill(1).map((_, index) => (
          <Input
            key={index}
            onChange={
              index === length - 1 && length !== 5
                ? () => setLength((prev) => prev + 1)
                : undefined
            }
            placeholder={
              index === length - 1 && length !== 5
                ? "Добавить еще"
                : "Введите ответ"
            }
            className="w-full"
          />
        ))}
      </div>
      <div className="w-full h-[1px] bg-default mb-[20px] mt-[40px]"></div>
      <Button className="mr-[6px]">Создать</Button>
      <Button variant="secondary" onClick={() => closeFn()}>
        Отменить
      </Button>
    </div>
  );
};

export default SurveyCreateModal;
