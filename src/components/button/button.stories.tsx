import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { Menu } from "lucide-react";

const meta = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    className: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Icon: Story = {
  args: {
    children: <Menu />,
    size: "icon",
  },
};
