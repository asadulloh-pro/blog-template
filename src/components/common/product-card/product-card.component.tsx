import Image from "next/image";
import { FC, memo, useMemo } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { moneyFormat } from "@/utils/formaters";

export type ProductCardType = {
  id: string;
  image: string;
  title: string;
  price: number;
  className?: string;
};

const ProductCard: FC<ProductCardType> = (props) => {
  const { image, title, id, price, className } = props;

  const formatPrice = useMemo(() => {
    return moneyFormat(price);
  }, [price]);

  const classNames = useMemo(() => {
    return ["flex flex-col", className].join(" ");
  }, [className]);

  return (
    <div className={classNames}>
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          className="w-full h-[10rem] max-h-[10rem] object-cover object-center rounded-[0.375rem]"
          alt="Primary card's image"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <div className="mt-[0.75rem]">
        <p className="text-[0.875rem] font-[400] text-dark">{title}</p>
        <p className="text-[1.25rem] font-[700] leading-[150%] text-dark mt-[0.75rem]">
          {formatPrice} UZS
        </p>
      </div>
      <div className="mt-[1rem]">
        <Link href={`/product/${id}`}>
          <Button size="lg" type="primary" className="w-full">
            К товару
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default memo(ProductCard);
