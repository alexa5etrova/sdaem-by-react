import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: [];
  sendFirstIndex: (x: number) => void;
  sendLastIndex: (x: number) => void;
  contentPerPage: number;
}
