import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropzone } from "./dropzone";

const meta = {
  component: Dropzone,
  title: "COMPONENTS/Dropzone"
  //   argTypes: {
  //     variant: {
  //       control: { type: "select" },
  //       options: ["default", "secondary", "outline", "danger"],
  //     },
  //     size: {
  //       control: { type: "select" },
  //       options: ["sm", "md", "lg", "icon"],
  //     },
  //     disabled: {
  //       control: { type: "boolean" },
  //     },
  //     className: {
  //       control: { type: "text" },
  //     },
  //   },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    accept: {
      "text/*": [".txt"],
    },
    mode: "full",
  },
};
