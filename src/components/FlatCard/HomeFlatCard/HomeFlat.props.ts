import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FlatModel } from "../../../interfaces/flat.interface";

export interface HomeFlatProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flat: FlatModel;
}
