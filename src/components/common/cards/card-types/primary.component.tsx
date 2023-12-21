import Image from "next/image";
import { FC, memo } from "react";
import { BlogCardType } from "../types";
import Link from "next/link";
import SvgIcon from "@common/svg-icon";

const Primary: FC<BlogCardType> = (props) => {
  const { image, title, tag, created_at, minute, view } = props;
  return (
    <Link href={"/"} className="grid gap-[1rem] max-w-[24rem] group w-full">
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          className="w-full h-auto max-h-[12.5rem] object-cover object-center rounded-[0.75rem]"
          alt="Primary card's image"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div>
        <p className="text-[0.875rem] font-[500] text-prime group-hover:text-dark transition-all">
          {tag}
        </p>
        <p className="text-[1.25rem] font-[700] leading-[150%] text-dark group-hover:text-prime transition-all">
          {title}
        </p>
      </div>
      <div className="flex items-center text-[0.875rem] font-[500] text-gray justify-between">
        <div className="flex items-center gap-[0.75rem]">
          <span className="flex items-center gap-[0.38rem]">
            <SvgIcon iconName="eye" className="w-[1rem] h-[1rem] stroke-gray" />
            {view}
          </span>
          <span className="flex items-center gap-[0.38rem]">
            <SvgIcon
              iconName="time"
              className="w-[1rem] h-[1rem] stroke-gray"
            />
            {minute}
            min
          </span>
        </div>
        <p className="flex items-center">{created_at}</p>
      </div>
    </Link>
  );
};

export default memo(Primary);
