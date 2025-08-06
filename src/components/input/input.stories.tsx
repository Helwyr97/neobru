import type { Meta, StoryObj } from "@storybook/react-vite";
// @ts-expect-error: need dependency to compile
import { Input, IInputProps} from "./input";

const meta = {
  component: Input,
  title: "Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};
