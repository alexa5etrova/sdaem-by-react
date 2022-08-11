import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SocialsSharedProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  sharedLink: string;
  photo: string;
  page?: "flats";
}
