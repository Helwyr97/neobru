import { useState } from "react";
import { RadioItem } from "./radioitem";

type RadioItem = {
  value: string | number | object;
  label: string;
};

type RadioGroupProps = {
  items: RadioItem[];
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "danger";
  disabled?: boolean;
};

export const RadioGroup = ({
  items,
  size = "md",
  variant = "primary",
  disabled = false,
}: RadioGroupProps) => {
  const [selected, setSelected] = useState<RadioItem>();

  return (
    <div>
      {items.map((item, i) => (
        <RadioItem
          key={`radioitem-${i}`}
          item={item}
          size={size}
          variant={variant}
          disabled={disabled}
          onClick={() => setSelected(item)}
          selected={selected?.value === item.value}
        />
      ))}
    </div>
  );
};
