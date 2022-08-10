import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface BackgroundProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bgStyle?: "homeFilter";
  children: ReactNode;
}
