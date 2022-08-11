import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NewsModel } from "../../interfaces/news.interface";
import { FlatModel } from "./../../interfaces/flat.interface";

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: NewsModel[] | FlatModel[];
  sendFirstIndex: (x: number) => void;
  sendLastIndex: (x: number) => void;
  contentPerPage: number;
}
