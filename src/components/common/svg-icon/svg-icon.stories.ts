import type { Meta, StoryObj } from "@storybook/react";
import SvgIcon, { SvgIconType } from "./svg-icon.component";

const meta = {
  title: "SvgIcon",
  component: SvgIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SvgIconType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Slider: Story = {
  args: {
    iconName: "eye",
    className: "w-[10rem] h-[10rem] stroke-prime fill-prime",
  },
};
