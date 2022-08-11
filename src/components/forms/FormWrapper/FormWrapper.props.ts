import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface FormWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  wrStyle?: "auth" | "signup";
  children: ReactNode;
}
