import React from "react";
import { render } from "@testing-library/react";
import Select from "./select.component";
import data from "../../../constants/select-options.json";

it("renders Select component", () => {
  const { container } = render(<Select options={data} />);
  expect(container).toMatchSnapshot();
});
