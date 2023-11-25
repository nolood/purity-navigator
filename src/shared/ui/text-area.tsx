import { ChangeEvent, TextareaHTMLAttributes, useRef, useState } from "react";
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
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "48px";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={"relative w-full h-max"}>
      <textarea
        {...props}
        ref={textAreaRef}
        maxLength={maxLength}
        value={value ? value : localValue}
        onChange={handleChange}
        className={clsx(
          "rounded-[2px] h-[48px] w-full py-[12px] px-[16px] outline outline-outline outline-[1px] focus:outline-primary text-textPrimary focus:outline placeholder:text-disabledText resize-none overflow-y-hidden",
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
