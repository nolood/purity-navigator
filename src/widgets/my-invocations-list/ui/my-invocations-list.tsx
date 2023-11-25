import SectionLayout from "@/app/layouts/section-layout/ui/section-layout.tsx";
import { useState } from "react";
import { Switcher } from "@/shared/ui";

const options = [
  {
    id: 0,
    title: "Все",
  },
  {
    id: 1,
    title: "Мои",
  },
  {
    id: 2,
    title: "Наблюдаю",
  },
];

const MyInvocationsList = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <SectionLayout>
      <h1 className="text-textPrimary text-[52px]">Мои обращения</h1>
      <Switcher
        options={options}
        defaultValue={0}
        onChange={(item) => setActiveTab(item.id)}
      />
    </SectionLayout>
  );
};

export default MyInvocationsList;
