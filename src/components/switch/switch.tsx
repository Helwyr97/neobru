import { cva } from "class-variance-authority";
import { useState } from "react";
import { ColorSchemesType, CommonSizesType } from "../../utils/common-types";

const checkedVariants = cva(
  "transition-translate duration-500 ease-in-out ml-1 mr-1",
  {
    variants: {
      colorScheme: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        outline: "bg-gray-500",
        success: "bg-success",
        danger: "bg-danger",
        warning: "bg-warning",
        info: "bg-info",
      },
      state: {
        true: "bg-white translate-x-1/5",
        false: "",
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
      true: "justify-end",
      false: "bg-white justify-start",
    },
    colorScheme: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      outline: "bg-gray-500",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
    }
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
  size?: CommonSizesType;
  colorScheme?: ColorSchemesType;
  disabled?: boolean;
  onChange?: (value: boolean) => void;

};

export const Switch = ({
  label = "",
  value,
  onChange,
  disabled = false,
  size = "md",
  colorScheme = "primary"
}: SwitchProps) => {
  const [state, setState] = useState<boolean>(
    value === undefined ? false : value
  );

  const mainClassName = mainVariants({ disabled });

  const checkedClassName = checkedVariants({ colorScheme, state, size });

  const containerClassName = containerVariants({ colorScheme, state, size });

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
