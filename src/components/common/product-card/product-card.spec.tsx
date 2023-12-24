import React from "react";
import { render } from "@testing-library/react";
import data from "../../../constants/product-data.json";
import ProductCard from "./product-card.component";

it("renders Product Card component", () => {
  const { container } = render(
    <ProductCard
      price={data.price}
      title={data.title}
      id={data.id}
      image={data.image}
    />
  );
  expect(container).toMatchSnapshot();
});
