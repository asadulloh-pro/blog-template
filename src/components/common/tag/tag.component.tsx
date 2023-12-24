import { FC, HTMLProps, memo, useMemo } from "react";

export type TagType = Pick<
  HTMLProps<HTMLSpanElement>,
  "children" | "onClick" | "className"
>;

const Tag: FC<TagType> = ({ children, className }) => {
  const classNames = useMemo(() => {
    return [
      "text-center text-[0.875rem] font-[500] leading-[1.25rem] px-[1rem] py-[0.62rem] rounded-[6.25rem] text-prime border border-solid border-prime cursor-pointer",
      className,
    ].join(" ");
  }, [className]);

  return <span className={classNames}>{children}</span>;
};

export default memo(Tag);
