import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SearchContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  stl: "search" | "carousel";
}
