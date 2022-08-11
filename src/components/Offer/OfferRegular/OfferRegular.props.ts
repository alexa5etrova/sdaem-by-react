import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface OfferRegularProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  children: ReactNode;
  photo: string;
  text: string;
}
