import CardSlider from "@/components/common/card-slider";
import { BlogCardType } from "@/components/common/cards/types";
import { cards } from "@common/cards/cards.comopnent";
import Cards from "@common/cards";
import Link from "next/link";
import { FC, useMemo } from "react";

export type CardContainerType = {
  title?: string;
  link?: string;
  container: "slider" | "default";
  type: keyof typeof cards;
  data: Array<BlogCardType>;
  className?: string;
};

const containerTypes: Record<CardContainerType["type"], string> = {
  primary: "grid grid-cols-3 gap-[1.5rem]",
  secondary: "grid grid-cols-3 gap-[1.5rem]",
  additional: "grid grid-cols-2 gap-[1.5rem]",
  alpha: "grid alphagrid gap-[1.5rem]",
};

const CardContainer: FC<CardContainerType> = (props) => {
  const { container, data = [], type, title, link, className } = props;

  const classNames = useMemo(() => {
    return ["grid gap-[1.5rem] w-full", className].join(" ");
  }, [className]);

  return (
    <div className={classNames}>
      {title && (
        <div className="flex items-center justify-between">
          <h3 className="text-[1.75rem] text-dark font-[700]">{title}</h3>
          {link && (
            <Link
              href={link}
              className="text-prime text-[1rem] font-[700] hover:text-gray transition-all hover:transition-all"
            >
              Смотреть всё
            </Link>
          )}
        </div>
      )}

      {container === "default" ? (
        <div className={containerTypes[type]}>
          {data.map((elem) => (
            <Cards data={elem} type={type} key={elem.id} />
          ))}
        </div>
      ) : (
        <CardSlider data={data} type={type} />
      )}
    </div>
  );
};

export default CardContainer;
