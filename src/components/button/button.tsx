import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { ButtonSizesType, CommonVariantsType } from "../../utils/common-types";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex items-center border-2 border-black outline-none font-bold shadow-[4px_4px_rgba(0,0,0,1)] duration-200 transition-all",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white shadow-[4px_4px_rgba(51,0,255,1)]",
        outline: "text-black bg-white",
        danger: "bg-danger text-white",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-md px-4 py-1.5",
        lg: "text-lg px-4.5 py-2",
        icon: "p-2",
      },
      isDisabled: {
        true: "opacity-60 cursor-not-allowed",
        false: "cursor-pointer hover:shadow-none hover:translate-y-1",
      },
    },
  }
);

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizesType;
  variant?: CommonVariantsType;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children = <></>,
      size = "md",
      className = "",
      variant = "primary",
      disabled = false,
      ...props
    }: IButtonProps,
    forwardedRef
  ) => {
    const classes = twMerge(
      buttonVariants({ variant, size, isDisabled: disabled }),
      className
    );

    return (
      <button
        ref={forwardedRef}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
