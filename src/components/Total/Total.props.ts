import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TotalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  total: number;
}
