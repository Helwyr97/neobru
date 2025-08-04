import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { ColorSchemesType, CommonSizesType, VariantsType } from "../../utils/common-types";
import { twMerge } from "tailwind-merge";

const accordionVariants = cva(
  "inline-block min-w-xs border-2 shadow-[4px_4px_rgba(0,0,0,1)] hover:shadow-[2px_2px_rgba(0,0,0,1)] data-open:shadow-[2px_2px_rgba(0,0,0,1)] transition-all duration-200",
  {
    variants: {
      colorScheme: {
        primary: "",
        secondary:
          "shadow-[4px_4px_rgba(251,125,168,1)] hover:shadow-[2px_2px_rgba(251,125,168,1)] data-open:shadow-[2px_2px_rgba(251,125,168,1)]",
        outline: " ",
        danger: "",
        warning: "",
        info: "",
        success: "",
      },
      variant: {
        rectangular: "",
        rounded: "rounded-xl overflow-hidden"
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    }
  }
);

const accordionButtonVariants = cva(
  "w-full flex justify-between group cursor-pointer focus:outline-none px-4 py-2 data-open:border-b-2 border-black text-black ",
  {
    variants: {
      colorScheme: {
        primary: "bg-primary",
        secondary: "bg-secondary text-white",
        outline: "bg-white",
        danger: "bg-danger",
        success: "bg-success",
        warning: "bg-warning",
        info: "bg-info",
      },
      variant: {
        rectangular: "",
        rounded: "",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    }
  }
);

type AccordionProps = {
  title: string;
  content: React.ReactNode;
  className?: string;
  variant?: VariantsType;
  size?: CommonSizesType;
  colorScheme?: ColorSchemesType;
};

export const Accordion = ({
  title,
  content,
  className = "",
  colorScheme = "primary",
  variant = "rectangular",
  size = "md",
}: AccordionProps) => {
  const classes = twMerge(accordionVariants({ colorScheme, variant, size }), className);
  const buttonClasses = accordionButtonVariants({ colorScheme, variant, size });

  return (
    <Disclosure as="div" className={classes}>
      <DisclosureButton className={buttonClasses}>
        <b>{title}</b>
        <ChevronDown className="group-data-open:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="p-4">{content}</DisclosurePanel>
    </Disclosure>
  );
};
