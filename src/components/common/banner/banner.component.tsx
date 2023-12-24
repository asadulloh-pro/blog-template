import Image from "next/image";
import { FC } from "react";

export type BannerType = {
  image: string;
};

const Banner: FC<BannerType> = ({ image }) => {
  return (
    <Image
      src={image}
      className="w-full max-h-[20.5rem] rounded-[0.75rem] object-cover object-center"
      width={300}
      height={100}
      alt="banner image"
    />
  );
};

export default Banner;
