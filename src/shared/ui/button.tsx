import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

const Button = ({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const disabledPrimary =
    "cursor-not-allowed !text-disabledText !bg-disabled outline-disabled hover:bg-disabled active:bg-transparent";
  const disabledSecondary =
    "cursor-not-allowed !text-disabledText outline-disabled hover:bg-transparent active:bg-transparent";
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        "rounded-[8px] px-[20px] py-[12px] outline-offset-0 border-none",
        variant === "primary"
          ? "bg-primary text-white hover:bg-secondary active:bg-selected"
          : "bg-white text-textPrimary outline outline-outline outline-[1px] hover:bg-muted active:bg-default",
        variant === "secondary" && disabled && disabledSecondary,
        variant === "primary" && disabled && disabledPrimary,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
