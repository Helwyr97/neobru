import { VariantsType } from "../../utils/common-types";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: React.ReactNode[];
  className?: string;
  variant?: VariantsType;
};

export const Box = ({ children, className = "", variant = "rectangular"}: BoxProps) => {
  const classes = twMerge(
    "p-2 border-2 rounded-none focus:outline-none shadow-[4px_4px_rgba(0,0,0,1)] duration-200 transition-all focus:shadow-none",
    className,
    variant === "rounded" && "rounded-xl"
  );
  return <div className={classes}>{children}</div>;
};
