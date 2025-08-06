import { Input as HInpunt, InputProps as HInputProps } from "@headlessui/react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { VariantsType } from "../../utils/common-types";

const inputVariants = cva(
  "p-2 border-2 rounded-none focus:outline-none shadow-[4px_4px_rgba(0,0,0,1)] duration-200 transition-all focus:shadow-none",
  {
    variants: {
      variant: {
        rectangular: "",
        rounded: "rounded-xl"
      }
    }
  }
);

export interface IInputProps extends HInputProps {
  variant?: VariantsType;
}

export const Input = (props: IInputProps) => {
  const { className = "", variant = "rectangular", ...rest } = props;
  const classes = twMerge(inputVariants({variant}), className as string);

  return <HInpunt className={classes} {...rest} />;
};
