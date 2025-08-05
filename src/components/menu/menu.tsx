import {
  Menu as HMenu,
  MenuItems,
  MenuItem,
  MenuButton,
  MenuItemsProps,
} from "@headlessui/react";
import { Button } from "../button";
import { cva } from "class-variance-authority";
import React from "react";
import { ButtonSizesType, ColorSchemesType, VariantsType } from "../../utils/common-types";
import { twMerge } from "tailwind-merge";

const menuContainerVariants = cva(
  "border-2 m-1 outline-none border-black transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0",
  {
    variants: {
      variant: {
        rectangular: "",
        rounded: "rounded-xl hoverflow-hidden",
      },
    },
  },
)

const menuItemVariants = cva(
  "flex items-center cursor-pointer focus:outline-none bg-white",
  {
    variants: {
      colorScheme: {
        primary: "hover:bg-primary data-focus:bg-primary",
        secondary: "hover:bg-secondary hover:text-white data-focus:bg-secondary ",
        outline: "hover:underline data-focus:underline",
        danger: "hover:bg-danger data-focus:bg-danger",
        success: "hover:bg-success data-focus:bg-success",
        warning: "hover:bg-warning data-focus:bg-warning",
        info: "hover:bg-info data-focus:bg-info",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-md px-4 py-1.5",
        lg: "text-lg px-4.5 py-2",
        icon: "text-md px-4 py-1.5",
      },
    },
  },
);

const focusItemVariants = cva("", {
  variants: {
    colorScheme: {
      primary: "bg-primary",
      secondary: "bg-secondary text-white",
      outline: "underline",
      danger: "bg-danger",
      success: "bg-success",
      warning: "bg-warning",
      info: "bg-info",
    },
  },
});

type MenuProps = {
  btnContent?: React.ReactNode;
  colorScheme?: ColorSchemesType;
  size?: ButtonSizesType;
  items: React.ReactNode[];
  anchor?: MenuItemsProps["anchor"];
  variant?: VariantsType;
};

type CustomMenuItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  focus?: boolean;
  colorScheme?: ColorSchemesType;
};

const CustomMenuItem = ({
  className,
  children,
  onClick,
  focus = false,
  colorScheme = "primary",
}: CustomMenuItemProps) => {
  const classes = twMerge(className, focus ? focusItemVariants({ colorScheme }) : "");
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export const Menu = ({
  btnContent = "Menu",
  colorScheme = "primary",
  size = "md",
  items,
  anchor = "bottom",
  variant = "rectangular",
}: MenuProps) => {
  const menuContainerClasses = menuContainerVariants({variant});
  const menuItemClasses = menuItemVariants({ colorScheme, size });

  return (
    <HMenu>
      <MenuButton
        as={Button}
        colorScheme={colorScheme}
        size={size}
        variant={variant}
        className="data-active:shadow-none data-active:translate-y-1"
      >
        {btnContent}
      </MenuButton>
      <MenuItems
        anchor={anchor}
        className={menuContainerClasses}
      >
        {items.map((item, index) => (
          <MenuItem key={index}>
            {({ close, focus }) => (
              <CustomMenuItem
                className={menuItemClasses}
                onClick={close}
                focus={focus}
                colorScheme={colorScheme}
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
