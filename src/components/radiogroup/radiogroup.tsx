import { useState } from "react";
import { RadioItem } from "./radioitem";
import { ColorSchemesType, CommonSizesType } from "../../utils/common-types";

type RadioItem = {
  value: string | number | object;
  label: string;
};

type RadioGroupProps = {
  items: RadioItem[];
  size?: CommonSizesType;
  colorScheme?: ColorSchemesType;
  disabled?: boolean;
};

export const RadioGroup = ({
  items,
  size = "md",
  colorScheme = "primary",
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
          colorScheme={colorScheme}
          disabled={disabled}
          onClick={() => setSelected(item)}
          selected={selected?.value === item.value}
        />
      ))}
    </div>
  );
};
