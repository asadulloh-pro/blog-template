import dynamic from "next/dynamic";
import { FC, useMemo } from "react";
import { BlogCardType } from "./types";

export const cards = {
  primary: dynamic(() => import("./card-types/primary.component")),
  secondary: dynamic(() => import("./card-types/secondary.component")),
  additional: dynamic(() => import("./card-types/additional.component")),
};

export type CardsType = {
  type?: keyof typeof cards;
  data: BlogCardType;
};

const Cards: FC<CardsType> = (props) => {
  const { type = "primary", data } = props;
  const Component = useMemo(() => cards[type], [type]);
  return (
    <Component
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
};

export default Cards;
