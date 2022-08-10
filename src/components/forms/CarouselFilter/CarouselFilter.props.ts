import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CarouselFilterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setDistrict: (x: string) => void;
  setMetro: (x: string) => void;
}
