import type { Meta, StoryObj } from "@storybook/react";
import Cards, { CardsType } from "./cards.comopnent";
import data from "@/constants/card-data.json";

const meta = {
  title: "Cards",
  component: Cards,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<CardsType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    data: data[0],
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    data: data[0],
  },
};

export const Additional: Story = {
  args: {
    type: "additional",
    data: data[0],
    className: "max-w-[35.5rem]",
  },
};

export const Alpha: Story = {
  args: {
    type: "alpha",
    data: data[0],
    className: "min-w-[47.8rem]",
  },
};
