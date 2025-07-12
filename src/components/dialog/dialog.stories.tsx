import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, DialogProps } from "./dialog";
import { Button } from "../button";
import { useState } from "react";

const meta = {
  component: Dialog,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args: Omit<DialogProps, "isOpen" | "onClose">) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Dialog
          title={args.title}
          isOpen={open}
          onClose={() => setOpen(false)}
          variant={args.variant}
          size={args.size}
        />
      </>
    );
  },
};

export const Primary: Story = {
  ...Template,
  args: {
    title: "Dialog Title",
    isOpen: true,
    onClose: () => {},
    variant: "default",
    size: "md",
  },
};
