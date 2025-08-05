import { cva } from "class-variance-authority";
import { ColorSchemesType, CommonSizesType } from "../../utils/common-types";

const checkedVariants = cva(
  "rounded-full transition-transform duration-300 ease-in-out",
  {
    variants: {
      colorScheme: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        outline: "bg-gray-500",
        danger: "bg-danger",
        success: "bg-success",
        warning: "bg-warning",
        info: "bg-info",
      },
      state: {
        true: "scale-100",
        false: "scale-0",
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

const containerVariants = cva(
  "border-2 border-black grid place-content-center rounded-full",
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-5 h-5",
        lg: "w-8 h-8",
      },
    },
  }
);

const labelVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-3xl",
    },
  },
});

type ItemValue = string | number | object;

type RadioItem = {
  value: ItemValue;
  label: string;
};

type RadioItemProps = {
  item: RadioItem;
  colorScheme?: ColorSchemesType;
  size?: CommonSizesType;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export const RadioItem = ({
  item,
  onClick,
  colorScheme = "primary",
  disabled = false,
  size = "md",
  selected = false,
}: RadioItemProps) => {
  const mainClassName = mainVariants({ disabled });

  const checkedClassName = checkedVariants({ colorScheme, state: selected, size });

  const containerClassName = containerVariants({ size });

  const labelClassName = labelVariants({ size });

  return (
    <div className={mainClassName} onClick={onClick}>
      <div className={containerClassName}>
        <span className={checkedClassName} />
      </div>
      <span className={labelClassName}>{item.label}</span>
    </div>
  );
};
