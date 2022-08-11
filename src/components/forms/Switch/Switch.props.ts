import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface SwitchProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  children: ReactNode;
}
