import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import clsx from "clsx";

const TextArea = ({
  error,
  maxLength,
  onChange,
  value,
  ...props
}: {
  error?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const [localValue, setLocalValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className={"relative"}>
      <textarea
        {...props}
        maxLength={maxLength}
        value={value ? value : localValue}
        onChange={handleChange}
        className={clsx(
          "rounded-[2px] w-full py-[12px] px-[16px] outline outline-outline outline-[1px] focus:outline-primary text-primary focus:outline placeholder:text-disabledText resize-none",
          error &&
            "!outline-error !outline-[1px] !text-error placeholder:!text-error focus:!outline-error focus:outline-[1px]",
        )}
      />
      {error && (
        <p className={"absolute left-0 bottom-[-1.5rem] text-error"}>{error}</p>
      )}
      {maxLength && (
        <p className={"absolute right-0 bottom-[-1.5rem] text-gray"}>
          {localValue.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default TextArea;
