import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FlatModel } from "../../interfaces/flat.interface";

export interface FlatCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flat: FlatModel;
  page: "home" | "flats";
  view?: "tile" | "list";
}
