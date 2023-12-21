import Image from "next/image";
import { FC, memo } from "react";
import { BlogCardType } from "../types";
import Link from "next/link";

const Secondary: FC<BlogCardType> = (props) => {
  const { image, title, created_at } = props;
  return (
    <Link
      href={"/"}
      className="flex gap-[1rem] max-w-[24rem] group bg-gray-sec rounded-[0.75rem] overflow-hidden w-full"
    >
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          className="w-[9.5rem] h-[8rem] max-w-[8rem] max-h-[8rem] object-cover object-center rounded-[0.75rem]"
          alt="Primary card's image"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="p-[1rem] grid gap-[0.38]">
        <p className="text-[0.75rem] font-[500] text-gray group-hover:text-dark transition-all">
          {created_at}
        </p>
        <p className="text-[1rem] font-[700] leading-[150%] text-dark group-hover:text-prime transition-all line-clamp-3">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default memo(Secondary);
