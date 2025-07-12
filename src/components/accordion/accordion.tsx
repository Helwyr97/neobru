import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const accordionVariants = cva(
  "inline-block min-w-xs border-2 shadow-[4px_4px_rgba(0,0,0,1)] hover:shadow-[2px_2px_rgba(0,0,0,1)] data-open:shadow-[2px_2px_rgba(0,0,0,1)] transition-all duration-200",
  {
    variants: {
      variant: {
        primary: "",
        secondary:
          "shadow-[4px_4px_rgba(51,0,255,1)] hover:shadow-[2px_2px_rgba(51,0,255,1)]",
        outline: " ",
        danger: "",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const accordionButtonVariants = cva(
  "w-full flex justify-between group cursor-pointer focus:outline-none px-4 py-2 data-open:border-b-2 border-black",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        outline: "bg-white text-black",
        danger: "bg-danger text-white",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type AccordionProps = {
  title: string;
  content: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof accordionVariants>["variant"];
  size?: VariantProps<typeof accordionVariants>["size"];
};

export const Accordion = ({
  title,
  content,
  className = "",
  variant = "primary",
  size = "md",
}: AccordionProps) => {
  const classes = clsx(accordionVariants({ variant, size }), className);
  const buttonClasses = accordionButtonVariants({ variant, size });

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
