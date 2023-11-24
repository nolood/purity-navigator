import { HTMLProps, ReactNode } from "react";
import clsx from "clsx";

const Button = ({
  children,
  className,
  variant = "primary",
  disabled,
}: {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
} & HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        variant === "primary"
          ? "bg-primary rounded-[8px] px-[20px] py-[12px] text-white hover:bg-secondary active:bg-selected"
          : "bg-white rounded-[8px] px-[20px] py-[12px] text-primary outline outline-outline hover:bg-muted active:bg-default",
        variant === "secondary" &&
          disabled &&
          "cursor-not-allowed text-disabledText outline-disabled hover:bg-transparent active:bg-transparent",
        variant === "primary" &&
          disabled &&
          "cursor-not-allowed text-disabledText bg-disabled hover:bg-disabled active:bg-disabled",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
