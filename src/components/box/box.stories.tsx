import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./box";
import { Variants } from "../../utils/common-types";

const meta = {
  component: Box,
  title: "Box",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Variants,
    },
  }
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ["String"],
    className: "",
  },
};
