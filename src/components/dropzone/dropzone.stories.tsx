import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropzone } from "./dropzone";

const meta = {
  component: Dropzone,
  title: "Dropzone"
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
