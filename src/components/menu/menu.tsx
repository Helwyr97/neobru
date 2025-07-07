import {
  Menu as HMenu,
  MenuItems,
  MenuItem,
  MenuButton,
  MenuItemsProps,
} from "@headlessui/react";
import { Button } from "../button";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import clsx from "clsx";

const menuItemVariants = cva(
  "flex items-center cursor-pointer focus:outline-none",
  {
    variants: {
      variant: {
        default: "hover:bg-[#3300FF] hover:text-white",
        secondary:
          "hover:bg-black hover:text-white focus:bg-black focus:text-white",
        outline: "hover:underline focus:underline",
        danger:
          "hover:bg-[#FF6B6B] hover:text-white focus:bg-[#FF6B6B] focus:text-white",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-md px-4 py-1.5",
        lg: "text-lg px-4.5 py-2",
        icon: "text-md px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const focusItemVariants = cva("", {
  variants: {
    variant: {
      default: "bg-[#3300FF] text-white",
      secondary: "bg-black text-white",
      outline: "underline",
      danger: "bg-[#FF6B6B] text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type MenuProps = {
  btnContent?: React.ReactNode;
  variant?: VariantProps<typeof menuItemVariants>["variant"];
  size?: VariantProps<typeof menuItemVariants>["size"];
  items: React.ReactNode[];
  anchor?: MenuItemsProps["anchor"];
};

type CustomMenuItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  focus?: boolean;
  variant?: VariantProps<typeof menuItemVariants>["variant"];
};

const CustomMenuItem = ({
  className,
  children,
  onClick,
  focus = false,
  variant = "default",
}: CustomMenuItemProps) => {
  const classes = clsx(className, focus ? focusItemVariants({ variant }) : "");
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export const Menu = ({
  btnContent = "Menu",
  variant = "default",
  size = "md",
  items,
  anchor = "bottom",
}: MenuProps) => {
  const menuItemClasses = menuItemVariants({ variant, size });

  return (
    <HMenu>
      <MenuButton
        as={Button}
        variant={variant}
        size={size}
        className="data-active:shadow-none data-active:translate-y-1"
      >
        {btnContent}
      </MenuButton>
      <MenuItems
        anchor={anchor}
        className="border-2 my-1 outline-none border-black transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0"
      >
        {items.map((item, index) => (
          <MenuItem key={index}>
            {({ close, focus }) => (
              <CustomMenuItem
                className={menuItemClasses}
                onClick={close}
                focus={focus}
                variant={variant}
              >
                {item}
              </CustomMenuItem>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </HMenu>
  );
};
