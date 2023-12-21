import { FC, HTMLProps, useMemo } from "react";

export type ButtonType = {
  size?: keyof typeof sizes;
  type?: keyof typeof types;
  hmltType?: 'button' | "submit" | "reset";
  disabled?: boolean;
} & Pick<
  HTMLProps<HTMLButtonElement>,
  "className" | "children" | "aria-label" | "onClick"
>;

export const sizes = {
  sm: "py-[0.5rem] px-[0.88rem] text-[0.875rem] font-[500] leading-[1.25rem] rounded-[0.5rem]",
  md: "py-[0.62rem] px-[1rem] text-[0.875rem] font-[500] leading-[1.25rem] rounded-[0.5rem]",
  lg: "py-[0.62rem] px-[1.12rem] text-[1rem] font-[500] leading-[1.5rem] rounded-[0.625rem]",
  xl: "py-[0.75rem] px-[1.25rem] text-[1rem] font-[500] leading-[1.25rem] rounded-[0.75rem]",
  "2xl":
    "py-[1rem] px-[1.75rem] text-[1.125rem] font-[500] leading-[1.75rem] rounded-[0.75rem]",
};

export const types = {
  primary:
    "bg-prime hover:bg-prime-dark text-light shadow-button active:shadow-button-primary-active transition-all active:transition-all",
  secondary:
    "bg-prime-light hover:bg-prime-mid text-prime shadow-button active:shadow-button-primary-active transition-all active:transition-all",
  default:
    "bg-gray-sec hover:bg-hover text-dark shadow-button active:shadow-button-default-active transition-all active:transition-all",
};

export const Button: FC<ButtonType> = (props) => {
  const {
    size = "sm",
    type = "primary",
    hmltType = "button",
    className = "disabled:opacity-[0.3] disabled:pointer-events-none",
    children,
    ...rest
  } = props;

  const classNames = useMemo(() => {
    const classes = [sizes[size], types[type], className];

    return classes.join(" ");
  }, [className, size, type]);

  return (
    <button {...rest} className={classNames} type={hmltType}>
      {children}
    </button>
  );
};
