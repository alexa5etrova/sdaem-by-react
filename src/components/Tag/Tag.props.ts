import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tagType: "gold" | "info" | "infoTile" | string;
  children?: ReactNode;
}
