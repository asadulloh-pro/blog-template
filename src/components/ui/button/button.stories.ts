import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonType } from "./button.component";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Example Button",
    type: "primary",
    size: "md",
    onClick: () => {},
  },
};
