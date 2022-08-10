import { ReactNode } from "react";

export interface HtagProps {
  tag:
    | "h1"
    | "h1white"
    | "h2"
    | "h2FlatHeader"
    | "h3"
    | "h3bigger"
    | "h3violet"
    | "notFound"
    | "homeViolet"
    | "homeVioletBigger"
    | "h2white";

  children: ReactNode;
}
