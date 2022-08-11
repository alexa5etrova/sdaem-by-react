import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DialogProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  header: string;
  text: string | null;
  form?: "signIn";
  onClose: (x: boolean) => void;
}
