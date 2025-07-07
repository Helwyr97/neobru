import { Input as HInpunt, InputProps } from "@headlessui/react";

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  const classes = className
    ? className
    : "p-2 border-2 rounded-none focus:outline-none shadow-[4px_4px_rgba(0,0,0,1)] duration-200 transition-all focus:shadow-none";

  return <HInpunt className={classes} {...rest} />;
};
