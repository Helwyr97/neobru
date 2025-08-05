import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./menu";
import { Menu as MenuIcon } from "lucide-react";
import { ButtonSizes, ColorSchemes } from "../../utils/common-types";

const meta = {
  component: Menu,
  title: "Menu",
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ColorSchemes,
    },
    size: {
      control: { type: "select" },
      options:ButtonSizes,
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    btnContent: <MenuIcon />,
    items: ["Item 1", "Item 2 Item 2 Item 2 Item 2 Item 2", "Item 3"],
    colorScheme: "primary",
    size: "icon",
    anchor: "bottom",
  },
};
