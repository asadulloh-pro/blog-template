import React from "react";
import { render } from "@testing-library/react";
import data from "../../../constants/card-data.json";
import PrimaryComponent from "./card-types/primary.component";
import SecondaryComponent from "./card-types/secondary.component";
import AdditionalComponent from "./card-types/additional.component";

it("renders Primary Card component", () => {
  const { container } = render(
    <PrimaryComponent
      title={data.title}
      key={data.id}
      created_at={data.created_at}
      id={data.id}
      image={data.image}
      minute={data.minute}
      tag={data.tag}
      view={data.view}
    />
  );
  expect(container).toMatchSnapshot();
});

it("renders Secondary Card component", () => {
  const { container } = render(
    <SecondaryComponent
      title={data.title}
      key={data.id}
      created_at={data.created_at}
      id={data.id}
      image={data.image}
      minute={data.minute}
      tag={data.tag}
      view={data.view}
    />
  );
  expect(container).toMatchSnapshot();
});

it("renders Additional Card component", () => {
  const { container } = render(
    <AdditionalComponent
      title={data.title}
      key={data.id}
      created_at={data.created_at}
      id={data.id}
      image={data.image}
      minute={data.minute}
      tag={data.tag}
      view={data.view}
    />
  );
  expect(container).toMatchSnapshot();
});
