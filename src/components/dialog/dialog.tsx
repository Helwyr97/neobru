import {
  Dialog as HDialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { ColorSchemesType, CommonSizesType, VariantsType } from "../../utils/common-types";

const titleVariants = cva(
  "font-bold border-b-2 border-black px-4 py-2 flex justify-between items-center text-black",
  {
    variants: {
      colorScheme: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        outline: "text-black",
        danger: "bg-danger",
        success: "bg-success",
        warning: "bg-warning",
        info: "bg-info",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-md px-4 py-1.5",
        lg: "text-lg px-4.5 py-2",
      },
    }
  }
);

const dialogVariants = cva(
  "max-w-lg min-w-xs bg-white border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        rectangular: "",
        rounded: "rounded-xl overflow-hidden"
      }
    }
});

export type DialogProps = {
  title?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  colorScheme?: ColorSchemesType;
  size?: CommonSizesType;
  variant?: VariantsType;
};

export const Dialog = ({
  title = "",
  children,
  isOpen = false,
  onClose = () => {},
  colorScheme = "primary",
  size = "md",
  variant = "rectangular",
}: DialogProps) => {
  const titleClasses = titleVariants({ colorScheme, size });
  const dialogClasses = dialogVariants({ variant });

  return (
    <HDialog open={isOpen} as="div" onClose={onClose} >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className={dialogClasses}>
          <DialogTitle className={titleClasses}>
            {title}
            <button onClick={onClose} className="ml-2 cursor-pointer">
              <X />
            </button>
          </DialogTitle>
          <p className="p-4">{children}</p>
        </DialogPanel>
      </div>
    </HDialog>
  );
};
