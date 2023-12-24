import Link from "next/link";
import { FC } from "react";

export type BreadcrumbsType = {
  crumbs: {
    title: string;
    link: string | null;
  }[];
};

const Breadcrumbs: FC<BreadcrumbsType> = ({ crumbs }) => {
  return (
    <div className="flex overflow-x-hidden ">
      <ol
        className="flex items-center gap-[0.5rem] overflow-x-auto removeScrollbar"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {crumbs?.map((elem, index) => (
          <li
            key={index}
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            {elem?.link && crumbs?.length - 1 !== index ? (
              <Link
                href={elem?.link}
                className={`flex items-center gap-[0.5rem] text-[0.875rem]  font-[400] ${
                  crumbs?.length - 1 === index ? "text-dark" : "text-gray"
                }`}
                passHref
                itemScope
                itemID={elem?.link}
                itemProp="item"
                itemType="https://schema.org/Thing"
              >
                <span
                  className="hover:text-dark whitespace-nowrap"
                  itemProp="name"
                >
                  {elem?.title}
                </span>
                {crumbs?.length - 1 !== index && <span>/</span>}
              </Link>
            ) : (
              <div className="flex items-center gap-[0.5rem] pointer-events-none">
                <span
                  itemProp="name"
                  className="text-[0.875rem]  font-[400] hover:text-dark whitespace-nowrap text-dark"
                >
                  {elem?.title}
                </span>
              </div>
            )}
            <meta itemProp="position" content={`${index + 1}`} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
