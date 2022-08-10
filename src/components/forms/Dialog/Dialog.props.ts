import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DialogProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  header: string;
  text: string | null;
  onClose: (x: boolean) => void;
}
