import React from "react";
import { Button } from "./button.component";
import { render } from "@testing-library/react";

it("renders Button component", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
