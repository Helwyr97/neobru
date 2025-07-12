import {
  Dialog as HDialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

const titleVariants = cva(
  "font-bold border-b-2 border-black px-4 py-2 flex justify-between items-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        outline: "text-black bg-white",
        danger: "bg-danger text-white",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-md px-4 py-1.5",
        lg: "text-lg px-4.5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type DialogProps = {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  variant?: VariantProps<typeof titleVariants>["variant"];
  size?: VariantProps<typeof titleVariants>["size"];
};

export const Dialog = ({
  title = "",
  isOpen = false,
  onClose = () => {},
  variant = "default",
  size = "md",
}: DialogProps) => {
  const titleClasses = titleVariants({ variant, size });

  return (
    <HDialog open={isOpen} as="div" onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg min-w-xs bg-white border-2 border-black shadow-[4px_4px_rgba(0,0,0,1)]">
          <DialogTitle className={titleClasses}>
            {title}
            <button onClick={onClose} className="ml-2 cursor-pointer">
              <X />
            </button>
          </DialogTitle>
          <p className="p-4">Description</p>
          <div className="mt-4"></div>
        </DialogPanel>
      </div>
    </HDialog>
  );
};
