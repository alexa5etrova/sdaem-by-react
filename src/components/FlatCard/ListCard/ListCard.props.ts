import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FlatModel } from "../../../interfaces/flat.interface";

export interface ListFlatProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flat: FlatModel;
}
