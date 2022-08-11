import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ViewButtonsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  view: "tile" | "list";
  setView: (v: "tile" | "list") => void;
}
