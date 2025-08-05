import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./radiogroup";
import { ColorSchemes } from "../../utils/common-types";

const meta = {
  component: RadioGroup,
  title: "Radio Group",
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ColorSchemes,
    }
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
    ],
  },
};
