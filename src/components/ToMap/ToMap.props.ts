import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ToMapProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  header: string;
  body: string;
  page: "flats" | "home";
}
