import clsx from "clsx";

type BoxProps = {
  children: React.ReactNode[];
  className?: string;
};

export const Box = ({ children, className = "" }: BoxProps) => {
  const classes = clsx(
    "p-2 border-2 rounded-none focus:outline-none shadow-[4px_4px_rgba(0,0,0,1)] duration-200 transition-all focus:shadow-none",
    className
  );
  return <div className={classes}>{children}</div>;
};
