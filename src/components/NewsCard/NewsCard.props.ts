import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NewsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  text: string;
  title: string;
  photo: string;
  date: string;
}
