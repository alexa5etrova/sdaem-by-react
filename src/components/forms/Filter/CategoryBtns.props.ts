import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CategoryBtnsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: "flats" | "cottages" | "cars" | "saunas";
  setCategory: (x: "flats" | "cottages" | "cars" | "saunas") => void;
}
