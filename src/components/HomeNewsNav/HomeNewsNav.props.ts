import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NewsModel } from "./../../interfaces/news.interface";

export interface HomeNewsNavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  news: NewsModel[];
}
