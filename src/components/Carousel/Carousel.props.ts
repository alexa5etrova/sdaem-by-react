import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { FlatModel } from "../../interfaces/flat.interface";

export interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flats: FlatModel[];
  children: ReactNode;
}
