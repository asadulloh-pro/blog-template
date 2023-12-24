import Image from "next/image";
import { FC, memo, useMemo } from "react";
import { BlogCardType } from "../types";
import Link from "next/link";

const Additional: FC<BlogCardType> = (props) => {
  const { image, title, tag, className } = props;
  const classNames = useMemo(() => {
    return [
      "flex gap-[1rem]  group bg-prime-light rounded-[0.75rem] overflow-hidden  w-full",
      className,
    ].join(" ");
  }, [className]);

  return (
    <Link href={"/"} className={classNames}>
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          className="w-[17rem] h-[17rem] max-w-[17rem] max-h-[17rem] object-cover object-center rounded-[0.75rem]"
          alt="Primary card's image"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="p-[1.38rem] flex flex-col justify-center gap-[0.38] w-full">
        <p className="text-[0.875rem] font-[500] text-prime group-hover:text-dark transition-all">
          {tag}
        </p>
        <p className="text-[1.25rem] font-[700] leading-[150%] text-dark group-hover:text-prime transition-all line-clamp-3">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default memo(Additional);
