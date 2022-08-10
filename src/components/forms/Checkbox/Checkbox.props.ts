import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CheckboxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  value: string;
  title: string;
  isChecked: boolean;
}
