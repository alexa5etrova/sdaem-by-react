import { DetailedHTMLProps, HTMLAttributes } from "react";
import { DistrictSelectModel } from "../../interfaces/filter.interface";

export interface ReccommendProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  districts: DistrictSelectModel[];
}
