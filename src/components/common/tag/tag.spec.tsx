import React from "react";
import { render } from "@testing-library/react";
import Tag from "./tag.component";

it("renders Tag component", () => {
  const { container } = render(<Tag>Смартфоны</Tag>);
  expect(container).toMatchSnapshot();
});
