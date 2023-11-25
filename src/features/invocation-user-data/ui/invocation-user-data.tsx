import { PencilIcon, SaveIcon } from "@/shared/ui/icons";
import { Input } from "@/shared/ui";

const InvocationUserData = () => {
  return (
    <div className="flex w-full justify-between">
      <div>
        <p className="text-primary">Иванов Иван Артемович</p>
        <div className="flex items-center gap-[5px] mt-[5px]">
          <PencilIcon />
          <span className="text-textSecondary">Изменить</span>
        </div>
      </div>
      <div>
        <p className="text-primary">aaaaaaaaa@mail.ru</p>
        <div className="flex items-center gap-[5px] mt-[5px]">
          <PencilIcon />
          <span className="text-textSecondary">Изменить</span>
        </div>
      </div>
      <div>
        <p className="text-primary">Телефон</p>
        <Input className="my-[10px]" />
        <div className="flex items-center gap-[5px] mt-[5px]">
          <SaveIcon />
          <span className="text-textSecondary">Сохранить</span>
        </div>
      </div>
    </div>
  );
};

export default InvocationUserData;
