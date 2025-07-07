import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./menu";
import { Menu as MenuIcon } from "lucide-react";

const meta = {
  component: Menu,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    btnContent: <MenuIcon />,
    items: ["Item 1", "Item 2 Item 2 Item 2 Item 2 Item 2", "Item 3"],
    variant: "default",
    size: "icon",
    anchor: "bottom",
  },
};

export const Secondary: Story = {
  args: {
    btnContent: <MenuIcon />,
    items: ["Item 1", "Item 2 Item 2 Item 2 Item 2 Item 2", "Item 3"],
    variant: "secondary",
    size: "icon",
    anchor: "bottom",
  },
};

export const Outline: Story = {
  args: {
    btnContent: <MenuIcon />,
    items: ["Item 1", "Item 2 Item 2 Item 2 Item 2 Item 2", "Item 3"],
    variant: "outline",
    size: "icon",
    anchor: "bottom",
  },
};

export const Danger: Story = {
  args: {
    btnContent: <MenuIcon />,
    items: ["Item 1", "Item 2 Item 2 Item 2 Item 2 Item 2", "Item 3"],
    variant: "danger",
    size: "icon",
    anchor: "bottom",
  },
};
