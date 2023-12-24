import type { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "@/components/common/svg-icon";
import Button, { ButtonType } from "./button.component";

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

export const IconButton: Story = {
  args: {
    type: "primary",
    size: "md",
    onClick: () => {},
    icon: <SvgIcon iconName="time" className="w-[1rem] h-[1rem]" />,
  },
};

export const Prefix: Story = {
  args: {
    children: "Button with Prefix",
    type: "primary",
    size: "md",
    onClick: () => {},
    prefix: <SvgIcon iconName="time" className="w-[1rem] h-[1rem]" />,
  },
};

export const Afix: Story = {
  args: {
    children: "Button with Afix",
    type: "primary",
    size: "md",
    onClick: () => {},
    afix: <SvgIcon iconName="time" className="w-[1rem] h-[1rem]" />,
  },
};
