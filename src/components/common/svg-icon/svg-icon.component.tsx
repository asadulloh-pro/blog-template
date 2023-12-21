import { FC, HTMLProps } from "react";

export type SvgIconType = {
  iconName: "logo" | "eye" | "time";
  width?: number;

  height?: number;
} & Pick<HTMLProps<HTMLElement>, "className">;
export const SvgIcon: FC<SvgIconType> = ({ iconName, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use
        xlinkHref={`/svg/sprite.svg#${iconName}`}
        width="100%"
        height="100%"
      />
    </svg>
  );
};
