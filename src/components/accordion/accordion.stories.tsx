import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./accordion";
import { ColorSchemes, CommonSizes, Variants } from "../../utils/common-types";

const meta = {
  component: Accordion,
  title: "COMPONENTS/Accordion",
  argTypes: {
    colorScheme: {
      control: { type: "select"},
      options: ColorSchemes,
    },
    variant: {
      control: { type: "select" },
      options: Variants,
    },
    size: {
      control: { type: "select" },
      options: CommonSizes,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Accordion Title",
    content: "This is the content of the accordion.",
  },
};

export const Secondary: Story = {
  args: {
    title: "Accordion Title",
    content: "This is the content of the accordion.",
    colorScheme: "secondary",
  },
};

export const Outline: Story = {
  args: {
    title: "Accordion Title",
    content: "This is the content of the accordion.",
    colorScheme: "outline",
  },
};

export const Danger: Story = {
  args: {
    title: "Accordion Title",
    content: "This is the content of the accordion.",
    colorScheme: "danger",
  },
};
