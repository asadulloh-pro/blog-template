import dynamic from "next/dynamic";
import { FC, HTMLProps, useMemo } from "react";
import { BlogCardType } from "./types";

export const cards = {
  primary: dynamic(() => import("./card-types/primary.component")),
  secondary: dynamic(() => import("./card-types/secondary.component")),
  alpha: dynamic(() => import("./card-types/alpha.component")),
  additional: dynamic(() => import("./card-types/additional.component")),
};

export type CardsType = {
  type?: keyof typeof cards;
  data: BlogCardType;
} & Pick<HTMLProps<HTMLElement>, "className">;

const Cards: FC<CardsType> = (props) => {
  const { type = "primary", data, className } = props;
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
      className={className}
    />
  );
};

export default Cards;
