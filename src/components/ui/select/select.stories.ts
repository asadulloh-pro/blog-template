import type { Meta, StoryObj } from "@storybook/react";
import Select, { SelectType } from "./select.component";
import data from "../../../constants/select-options.json";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<SelectType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Slider: Story = {
  args: {
    options: data,
  },
};
