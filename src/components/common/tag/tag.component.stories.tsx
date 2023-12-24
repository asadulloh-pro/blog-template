import type { Meta, StoryObj } from "@storybook/react";
import Tag, { TagType } from "./tag.component";

const meta = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TagType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagExample: Story = {
  args: {
    children: "Смартфоны",
    onClick: () => {},
  },
};
