import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs, { BreadcrumbsType } from "./breadcrumbs.component";
import data from "@/constants/bread-crumbs-data.json";

const meta = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<BreadcrumbsType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    crumbs: data,
  },
};
