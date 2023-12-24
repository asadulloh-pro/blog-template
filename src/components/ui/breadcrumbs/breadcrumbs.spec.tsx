import React from "react";
import { render } from "@testing-library/react";
import Breadcrumbs from "./breadcrumbs.component";
import data from "../../../constants/bread-crumbs-data.json";

it("renders Breadcrumbs component", () => {
  const { container } = render(<Breadcrumbs crumbs={data} />);
  expect(container).toMatchSnapshot();
});
