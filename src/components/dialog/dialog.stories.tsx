import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, DialogProps } from "./dialog";
import { Button } from "../button";
import { useState } from "react";
import { ColorSchemes, CommonSizes, Variants } from "../../utils/common-types";

const meta = {
  component: Dialog,
  title: "COMPONENTS/Dialog",
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ColorSchemes,
    },
    size: {
      control: { type: "select" },
      options: CommonSizes,
    },
    variant: {
      control: { type: "select" },
      option: Variants
    }
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
          colorScheme={args.colorScheme}
          size={args.size}
          variant={args.variant}
        >
          {args.children}
        </Dialog>
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
    colorScheme: "primary",
    size: "md",
    variant: "rectangular",
    children: <>
      <h1>Children title</h1>
      <p>Description</p>
      <footer>footer</footer>
    </>
  },
};
