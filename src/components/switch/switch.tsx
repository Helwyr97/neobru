import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

const checkedVariants = cva(
  "transition-translate duration-500 ease-in-out ml-1 mr-1",
  {
    variants: {
      state: {
        true: "bg-white translate-x-1/5",
        false: "bg-primary",
      },
      size: {
        sm: "w-1 h-1",
        md: "w-3 h-3",
        lg: "w-5 h-5",
      },
    },
  }
);

const mainVariants = cva("flex gap-2 items-center", {
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "cursor-pointer",
    },
  },
});

const containerVariants = cva("border-2 border-black flex items-center", {
  variants: {
    size: {
      sm: "w-6 h-3",
      md: "w-10 h-5",
      lg: "w-16 h-8",
    },
    state: {
      true: "bg-primary justify-end",
      false: "justify-start",
    },
  },
});

const labelVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-3xl",
    },
  },
});

type SwitchProps = {
  label?: string;
  value?: boolean;
  size?: VariantProps<typeof containerVariants>["size"];
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};

export const Switch = ({
  label = "",
  value,
  onChange,
  disabled = false,
  size = "md",
}: SwitchProps) => {
  const [state, setState] = useState<boolean>(
    value === undefined ? false : value
  );

  const mainClassName = mainVariants({ disabled });

  const checkedClassName = checkedVariants({ state, size });

  const containerClassName = containerVariants({ state, size });

  const labelClassName = labelVariants({ size });

  const changeState = () => {
    const current = state;
    if (disabled) return;
    setState(!current);
    if (onChange) onChange(!current);
  };

  return (
    <div className={mainClassName} onClick={changeState}>
      <div className={containerClassName}>
        <span className={checkedClassName} />
      </div>
      <span className={labelClassName}>{label}</span>
    </div>
  );
};
