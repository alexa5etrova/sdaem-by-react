import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OwnerContactsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photo: string;
  name: string;
  phone: string;
  email: string;
}
