import type { Meta, StoryObj } from "@storybook/react";
import ProductCard, { ProductCardType } from "./product-card.component";
import data from "@/constants/product-data.json";

const meta = {
  title: "Product Card",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ProductCardType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    ...data,
    className: "max-w-[11rem]",
  },
};
