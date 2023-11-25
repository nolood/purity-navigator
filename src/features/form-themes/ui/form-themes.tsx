import { InvocationThemesList } from "@/features/form-themes/lib/invocation-themes-list.ts";
import { Button } from "@/shared/ui";
import { useState } from "react";
import clsx from "clsx";

const FormThemes = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (themeId: number) => {
    const item = selected.find((id) => id === themeId);
    if (item) {
      setSelected((prev) => prev.filter((id) => id !== themeId));
    } else {
      setSelected((prev) => [...prev, themeId]);
    }
  };

  return (
    <div className="flex flex-wrap gap-[20px]">
      {InvocationThemesList.map((theme) => (
        <Button
          variant={"secondary"}
          onClick={() => handleSelect(theme.id)}
          className={clsx(
            selected.find((id) => id === theme.id) && "!bg-default",
          )}
        >
          {theme.title}
        </Button>
      ))}
    </div>
  );
};

export default FormThemes;
