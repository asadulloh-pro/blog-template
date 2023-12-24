import React from "react";
import { render } from "@testing-library/react";
import Banner from "./banner.component";

it("renders Banner Slider component", () => {
  const { container } = render(<Banner image="/mock/banner.jpg" />);
  expect(container).toMatchSnapshot();
});
