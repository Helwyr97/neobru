import { cva, VariantProps } from "class-variance-authority";

const checkedVariants = cva(
  "bg-primary rounded-full transition-transform duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        outline: "text-black bg-white",
        danger: "bg-danger",
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
  variant?: VariantProps<typeof checkedVariants>["variant"];
  size?: VariantProps<typeof containerVariants>["size"];
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export const RadioItem = ({
  item,
  onClick,
  variant = "primary",
  disabled = false,
  size = "md",
  selected = false,
}: RadioItemProps) => {
  const mainClassName = mainVariants({ disabled });

  const checkedClassName = checkedVariants({ variant, state: selected, size });

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
