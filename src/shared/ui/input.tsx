import { InputHTMLAttributes } from "react";
import clsx from "clsx";

const Input = ({
  className,
  error,
  ...props
}: {
  className?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={"relative"}>
      <input
        {...props}
        className={clsx(
          "rounded-[2px] px-[16px] py-[12px] outline outline-outline outline-[1px] focus:outline-primary text-primary focus:outline placeholder:text-disabledText",
          error &&
            "!outline-error !outline-[1px] !text-error placeholder:text-error focus:outline-error",
          className,
        )}
      />
      {error && (
        <p className={"absolute left-0 bottom-[-1.5rem] text-error"}>{error}</p>
      )}
    </div>
  );
};

export default Input;
