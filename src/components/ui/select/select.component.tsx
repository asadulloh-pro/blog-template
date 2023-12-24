import { FC } from "react";
import ReactSelect, { Props } from "react-select";

export type SelectType = Props;

const Select: FC<SelectType> = (props) => <ReactSelect {...props} />;
export default Select;
