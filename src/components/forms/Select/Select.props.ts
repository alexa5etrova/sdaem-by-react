import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { SelectModel } from "../../../interfaces/filter.interface";

export interface SelectProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  label: string;
  name: string;
  id: string;
  choise: SelectModel[];
  page?: "flats" | "home";
}
