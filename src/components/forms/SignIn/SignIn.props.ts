import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SignInProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  toSignUp: (x: "login" | "confirmed" | "SignUp") => void;
}
