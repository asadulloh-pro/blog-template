import type { Meta, StoryObj } from "@storybook/react";
import CardContainer, { CardContainerType } from "./card-container.component";
import data from "@/constants/card-data.json";

const meta = {
  title: "CardContainer",
  component: CardContainer,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<CardContainerType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Container: Story = {
  args: {
    container: "default",
    link: "/",
    title: "Актуальное",
    data: data,
    type: "primary",
    className: "container mx-auto w-full",
  },
};
