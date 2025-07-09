import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type SelectOption = {
  value: number | string;
  name: string;
};

type SelecProps = {
  className?: string;
  selectedValue?: SelectOption;
  options?: Array<SelectOption>;
  onChange?: (value: SelectOption) => void;
  btnClassName?: string;
  optionsClassName?: string;
};

export const Select = ({
  selectedValue,
  options = [],
  onChange = () => {},
  btnClassName = "",
  optionsClassName = "",
}: SelecProps) => {
  const [value, setValue] = useState(
    selectedValue || options?.[0] || { value: 1, name: "Select an option" }
  );

  const btnClasses = clsx(
    "relative block w-50 p-2 border-2 bg-white text-black shadow-[4px_4px_rgba(0,0,0,1)] flex gap-2 justify-between focus:outline-none",
    btnClassName
  );

  const optionsClasses = clsx(
    "w-(--button-width) border-2 my-1 outline-none border-black transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0 shadow-[4px_4px_rgba(0,0,0,1)]",
    optionsClassName
  );

  const optionClasses = clsx(
    "p-2 cursor-pointer",
    "data-focus:underline data-selected:bg-black data-selected:text-white"
  );

  const handleChange = (value: SelectOption) => {
    setValue(value);
    onChange(value);
  };

  return (
    <Listbox onChange={handleChange}>
      <ListboxButton className={btnClasses}>
        {value.name}
        <ChevronDown />
      </ListboxButton>
      <ListboxOptions className={optionsClasses} anchor="bottom">
        {options.map((option) => (
          <ListboxOption
            key={"option-" + option.value}
            value={option}
            className={optionClasses}
          >
            {option.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};
