import { Button } from "@/shared/ui";
import { useState } from "react";
import clsx from "clsx";

type Item = {
  title: string;
  id: number;
};

const Switcher = ({
  options,
  onChange,
  defaultValue,
}: {
  options: Item[];
  onChange: (active: Item) => void;
  defaultValue: number;
}) => {
  const [active, setActive] = useState<number>(defaultValue);

  const handleChange = (option: Item) => {
    if (active !== option.id) {
      setActive(option.id);
      onChange(option);
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <Button
          variant={active === option.id ? "primary" : "secondary"}
          className={clsx(
            index === 0 && "rounded-r-[0]",
            index === options.length - 1 && "rounded-l-[0]",
            index > 0 && index < options.length - 1 && "rounded-[0]",
          )}
          onClick={() => handleChange(option)}
        >
          {option.title}
        </Button>
      ))}
    </div>
  );
};

export default Switcher;
