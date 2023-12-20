import { ForwardedRef, ReactNode, forwardRef, useMemo } from "react";

export type ButtonType = {
  children?: ReactNode;
  size?: keyof typeof sizes;
};

export const sizes = {
  sm: "py-[0.5rem] px-[0.88rem] text-[0.875rem] font-[500] leading-[1.25rem]",
  md: "py-[0.62rem] px-[1rem] text-[0.875rem] font-[500] leading-[1.25rem]",
  lg: "py-[0.62rem] px-[1.12rem] text-[1rem] font-[500] leading-[1.5rem]",
  xl: "py-[0.75rem] px-[1.25rem] text-[0.875rem] font-[500] leading-[1.25rem]",
  "2xl": "py-[1rem] px-[1.75rem] text-[1.125rem] font-[500] leading-[1.75rem]",
};

export const Button = forwardRef(
  (props: ButtonType, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, size = "sm" } = props;

    const classNames = useMemo(() => {
      const classes = [sizes[size]];
      return classes.join(" ");
    }, [size]);

    return (
      <button className={classNames} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Custom Button";
