import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { value: 1, name: "Option 1" },
      { value: 2, name: "Option 2" },
      { value: 3, name: "Option 3" },
    ],
  },
};
