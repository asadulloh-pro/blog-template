import Image from "next/image";
import { FC, memo } from "react";
import { BlogCardType } from "../types";
import Link from "next/link";

const Alpha: FC<BlogCardType> = (props) => {
  const { image, title, tag } = props;
  return (
    <Link
      href={"/"}
      className="grid gap-[1rem] max-w-[47.8rem] group w-full rounded-[0.75rem] overflow-hidden relative"
    >
      <Image
        src={image}
        width={100}
        height={100}
        className="w-full h-full max-h-[28.125rem] object-cover object-center "
        alt="Primary card's image"
        placeholder="blur"
        blurDataURL={image}
      />
      <div className="absolute w-full h-full flex flex-col justify-end gap-[0.75rem] p-[2.25rem] gradient-bottom-top">
        <span className="py-[0.31rem] px-[0.75rem] border border-solid border-light rounded-[6.25rem] text-[0.625rem] text-light font-[400] w-max">
          {tag}
        </span>
        <p className="text-[1.75rem] leading-[150%] font-[700] text-light">
          {tag}
        </p>
        <p className="text-[1rem] font-[400] text-light leading-[150%]">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default memo(Alpha);
