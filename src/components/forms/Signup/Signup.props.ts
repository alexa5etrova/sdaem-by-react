import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SignUpProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  toLogin: (x: "login" | "confirmed" | "signUp") => void;
}
