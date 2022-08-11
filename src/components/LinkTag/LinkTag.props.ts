import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface LinkTagProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  to: string;
  linkStyle:
    | "violet"
    | "lightViolet"
    | "reccomend"
    | "roundArrow"
    | "black"
    | "yellow"
    | "lightYellow"
    | " gradientHome"
    | "white"
    | "yellowBtn"
    | "newsList"
    | "newsSeeAll"
    | "gradientHome"
    | "whiteToMap";
  children?: ReactNode;
}
