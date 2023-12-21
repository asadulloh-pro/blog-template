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
  argTypes: {
    type: {
      options: ["primary", "secondary", "additional", "alpha"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<CardsType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    data: data,
  },
};
