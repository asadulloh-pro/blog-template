"use client";
import { useKeenSlider } from "keen-slider/react";
import Cards from "@common/cards";
import { BlogCardType } from "../cards/types";
import { FC, MouseEvent, useEffect, useMemo } from "react";
import SvgIcon from "../svg-icon";
import { cards } from "@common/cards/cards.comopnent";

export type CardSliderType = {
  type: keyof typeof cards;
  data: Array<BlogCardType>;
  className?: string;
};

export const configs: Record<
  keyof typeof cards,
  Parameters<typeof useKeenSlider<HTMLElement>>[0]
> = {
  primary: {
    slides: {
      perView: 3,
      spacing: 15,
    },
  },
  secondary: {
    slides: {
      perView: 3,
      spacing: 15,
    },
  },
  additional: {
    slides: {
      perView: 2,
      spacing: 15,
    },
  },
  alpha: {
    slides: {
      perView: 1,
      spacing: 15,
    },
  },
} as const;

const CardSlider: FC<CardSliderType> = ({ data = [], type, className }) => {
  const [ref, innerRef] = useKeenSlider<HTMLDivElement>(configs[type]);

  const onPrev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    innerRef.current && innerRef.current?.prev();
  };
  const onNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    innerRef.current && innerRef.current?.next();
  };

  useEffect(() => {
    if (data?.at(0)?.id && innerRef.current) {
      innerRef.current.update();
    }
  }, [data, innerRef]);

  const classNames = useMemo(() => {
    return ["container mx-auto relative", className].join(" ");
  }, [className]);

  return (
    <div className={classNames}>
      <div ref={ref} className="keen-slider">
        {data.map((elem) => (
          <div className="keen-slider__slide flex justify-center" key={elem.id}>
            <Cards data={elem} type={type} />
          </div>
        ))}
      </div>
      <button
        onClick={onPrev}
        className="absolute shadow-slider-button left-[-18px] z-2 top-[35%] bg-light p-[0.62rem] w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[50%] rotate-[180deg] custom-shadow mobileS:hidden  tablet:flex"
        aria-label="slider-left-button"
      >
        <SvgIcon
          iconName="slider_arrow"
          className="fill-gray w-[1rem] h-[1rem]"
        />
      </button>
      <button
        onClick={onNext}
        className="absolute shadow-slider-button right-[-18px] z-2 top-[35%] bg-light p-[0.62rem] w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-[50%] custom-shadow mobileS:hidden  tablet:flex"
        aria-label="slider-right-button"
      >
        <SvgIcon
          iconName="slider_arrow"
          className="fill-gray w-[1rem] h-[1rem]"
        />
      </button>
    </div>
  );
};
export default CardSlider;
