import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { ButtonSizes, Variants, ColorSchemes} from "../../utils/common-types";

const meta = {
  component: Button,
  title: "COMPONENTS/Button",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: Variants,
    },
    colorScheme: {
      control: { type: "select" },
      options: ColorSchemes,
    },
    size: {
      control: { type: "inline-radio" },
      options: ButtonSizes,
    },
    disabled: {
      description: "If button is disabled",
      type: "boolean",
    },
    className: {
      control: "text",
      type: "string",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <p>Primary Button</p>
      </>
    ) as React.ReactNode,
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <>
        <p>Secondary Button</p>
      </>
    ),
    colorScheme: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    colorScheme: "outline",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    colorScheme: "danger",
  },
};

export const Icon: Story = {
  args: {
    children: <Menu />,
    size: "icon",
  },
};
