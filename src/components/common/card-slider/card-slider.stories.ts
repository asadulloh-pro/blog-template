import type { Meta, StoryObj } from "@storybook/react";
import CardSlider, { CardSliderType } from "./card-slider.component";
import data from "@/constants/card-data.json";

const meta = {
  title: "CardSlider",
  component: CardSlider,
  tags: ["autodocs"],
} satisfies Meta<CardSliderType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Slider: Story = {
  args: {
    type: "primary",
    data: data,
  },
};
