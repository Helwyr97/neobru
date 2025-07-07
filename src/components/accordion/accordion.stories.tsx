import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./accordion";

const meta = {
  component: Accordion,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
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
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    title: "Accordion Title",
    content: "This is the content of the accordion.",
    variant: "outline",
  },
};

export const Danger: Story = {
  args: {
    title: "Accordion Title",
    content: "This is the content of the accordion.",
    variant: "danger",
  },
};
