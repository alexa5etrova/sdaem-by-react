import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  btnStyle:
    | "gradient"
    | "violet"
    | "send"
    | "lightViolet"
    | "search"
    | "yellow"
    | "filter"
    | "white"
    | "disable"
    | "switchOff"
    | "viewOn"
    | "viewOff"
    | "rose"
    | "roseRound";
}
