import type { Meta, StoryObj } from "@storybook/react";
import Banner, { BannerType } from "./banner.component";

const meta = {
  title: "Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<BannerType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: "/mock/banner.jpg",
  },
};
